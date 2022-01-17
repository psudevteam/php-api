<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/index.php';
  include_once '../../models/Switch/index.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate switch object
  $switch = new SwitchKeeb($db);

  // Get raw switched data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $switch->id = $data->id;

  // Set Data to update
  $switch->switch_name = $data->switch_name;
  $switch->switch_brand = $data->switch_brand;
  $switch->switch_price = $data->switch_price;
  $switch->switch_type = $data->switch_type;

  // Update switch
  if($switch->update()) {
    echo json_encode(
      array('message' => 'Switch Berhasil Diupdate')
    );
  } else {
    echo json_encode(
      array('message' => 'Switch Gagal Diupdate')
    );
  }
