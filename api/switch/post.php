<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: data');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/index.php';
  include_once '../../models/Switch/index.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog data object
  $switch = new SwitchKeeb($db);

  // Get raw dataed data
  $data = json_decode(file_get_contents("php://input"));

  $switch->switch_name = $data->switch_name;
  $switch->switch_brand = $data->switch_brand;
  $switch->switch_price = $data->switch_price;
  $switch->switch_type = $data->switch_type;

  // Create data
 if($switch->create()) {
   echo json_encode(
     array('message' => 'Switch Berhasil di Buat')
   );
 } else {
   echo json_encode(
     array('message' => 'Switch Gagal di Buat')
   );
 }
