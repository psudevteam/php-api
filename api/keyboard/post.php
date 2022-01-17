<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST');
  header("Access-Control-Allow-Headers: X-Requested-With");
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, X-Requested-With');

  include_once '../../config/index.php';
  include_once '../../models/Keyboard/index.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog data object
  $keeb = new Keyboard($db);

  // Get raw dataed data
  $data = json_decode(file_get_contents("php://input"));

  $keeb->keeb_name = $data->keeb_name;
  $keeb->keeb_brand = $data->keeb_brand;
  $keeb->keeb_price = $data->keeb_price;
  $keeb->keeb_switch = $data->keeb_switch;
  $keeb->keeb_keycaps = $data->keeb_keycaps;
  $keeb->keeb_connection = $data->keeb_connection;

  // Create data
 if($keeb->create()) {
   echo json_encode(
     array('message' => 'Keyboard Berhasil di Buat')
   );
 } else {
   echo json_encode(
     array('message' => 'Keyboard Gagal di Buat')
   );
 }
