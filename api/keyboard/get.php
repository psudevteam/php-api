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

  // Blog data query
  $result = $data->read();
  // Get row count
  $num = $result->rowCount();

  // Check if any datas
  if($num > 0) {
    // data array
    $datas_arr = array();
    // $datas_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $data_item = array(
        'id' => $id,
        'keeb_name' => $keeb_name,
        'keeb_brand' => $keeb_brand,
        'keeb_price' => $keeb_price,
        'keeb_switch' => $keeb_switch,
        'keeb_keycaps' => $keeb_keycaps,
        'keeb_connection' => $keeb_connection
      );

      // Push to "data"
      array_push($datas_arr, $data_item);
      // array_push($datas_arr['data'], $data_item);
    }

    // Turn to JSON & output
    echo json_encode($datas_arr);

  } else {
    // No datas
    echo json_encode(
      array('message' => 'No datas Found')
    );
  }

