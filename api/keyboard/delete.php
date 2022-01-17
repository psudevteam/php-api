<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/index.php';
  include_once '../../models/Keyboard/index.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog keeb object
  $keeb = new Keyboard($db);

  // Get raw keebed data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $keeb->id = $data->id;

  // Delete keeb
  if($keeb->delete()) {
    echo json_encode(
      array('message' => 'Keyboard Berhasil di Hapus')
    );
  } else {
    echo json_encode(
      array('message' => 'Keyboard Berhasil di Hapus')
    );
  }
