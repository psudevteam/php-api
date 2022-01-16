<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/index.php';
  include_once '../../models/Switch/index.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog switch object
  $switch = new SwitchKeeb($db);

  // Get raw switched data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $switch->id = $data->id;

  // Delete switch
  if($switch->delete()) {
    echo json_encode(
      array('message' => 'Switch Berhasil di Hapus')
    );
  } else {
    echo json_encode(
      array('message' => 'Switch Berhasil di Hapus')
    );
  }
