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
        'switch_name' => $switch_name,
        'switch_brand' => $switch_brand,
        'switch_type' => $switch_type,
        'switch_price' => $switch_price,
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

