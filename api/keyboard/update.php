<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/index.php';
  include_once '../../models/Keyboard/index.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate keeb object
  $keeb = new Keyboard($db);

  // Get raw keebed data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $keeb->id = $data->id;

  // Set Data to update
  $keeb->keeb_name = $data->keeb_name;
  $keeb->keeb_brand = $data->keeb_brand;
  $keeb->keeb_price = $data->keeb_price;
  $keeb->keeb_switch = $data->keeb_switch;
  $keeb->keeb_keycaps = $data->keeb_keycaps;
  $keeb->keeb_connection = $data->keeb_connection;

  // Update keeb
  if($keeb->update()) {
    echo json_encode(
      array('message' => 'Keyboard Berhasil Diupdate')
    );
  } else {
    echo json_encode(
      array('message' => 'Keyboard Gagal Diupdate')
    );
  }
