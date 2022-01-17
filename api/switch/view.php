<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/index.php';
  include_once '../../models/Switch/index.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog data object
  $data = new SwitchKeeb($db);

  // Get ID
  $data->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get data
  $data->read_single();

  // Create array
  $data_arr = array(
        'id' => $id->id,
        'switch_name' => $data->switch_name,
        'switch_brand' => $data->switch_brand,
        'switch_price' => $data->switch_price,
        'switch_type' => $data->switch_type,
      );

  // Make JSON
  print_r(json_encode($data_arr));
