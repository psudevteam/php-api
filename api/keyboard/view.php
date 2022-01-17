<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/index.php';
  include_once '../../models/Keyboard/index.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog data object
  $data = new Keyboard($db);

  // Get ID
  $data->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get data
  $data->read_single();

  // Create array
  $data_arr = array(
        'id' => $id->id,
        'keeb_name' => $data->keeb_name,
        'keeb_brand' => $data->keeb_brand,
        'keeb_price' => $data->keeb_price,
        'keeb_switch' => $data->keeb_switch,
        'keeb_keycaps' => $data->keeb_keycaps,
        'keeb_connection' => $data->keeb_connection
      );

  // Make JSON
  print_r(json_encode($data_arr));
