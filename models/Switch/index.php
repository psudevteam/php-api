<?php 
  class SwitchKeeb {
    // DB stuff
    private $conn;
    private $table = 'Switch';

    // Keyboard Properties
    public $id;
    public $switch_name;
    public $switch_brand;
    public $switch_price;
    public $switch_type;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get Keyboard
    public function read() {
      // Create query
      $query = '
               SELECT Switch.id, switch_name, SwitchBrand.brand as "switch_brand", switch_price, SwitchType.type as "switch_type"
               FROM ' . $this->table . '
               LEFT JOIN
                SwitchBrand ON Switch.switch_brand = SwitchBrand.id
               LEFT JOIN
                SwitchType ON Switch.switch_type = SwitchType.id
              ';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Get Single Keyboard
    public function read_single() {
          // Create query
          $query = '
               SELECT Switch.id, switch_name, SwitchBrand.brand as "switch_brand", switch_price, SwitchType.type as "switch_type"
               FROM ' . $this->table . '
               LEFT JOIN
                SwitchBrand ON Switch.switch_brand = SwitchBrand.id
               LEFT JOIN
                SwitchType ON Switch.switch_type = SwitchType.id
               WHERE
                Switch.id = ?
               LIMIT 0,1
              ';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Bind ID
          $stmt->bindParam(1, $this->id);

          // Execute query
          $stmt->execute();

          $row = $stmt->fetch(PDO::FETCH_ASSOC);

          // Set properties
          $this->id = $row['id'];
          $this->switch_name = $row['switch_name'];
          $this->switch_brand = $row['switch_brand'];
          $this->switch_price = $row['switch_price'];
          $this->switch_type = $row['switch_type'];
    }

    // Create Keyboard
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET switch_name = :switch_name, switch_brand = :switch_brand, switch_price = :switch_price, switch_type = :switch_type';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->switch_name = htmlspecialchars(strip_tags($this->switch_name));
          $this->switch_brand = htmlspecialchars(strip_tags($this->switch_brand));
          $this->switch_price = htmlspecialchars(strip_tags($this->switch_price));
          $this->switch_type = htmlspecialchars(strip_tags($this->switch_type));

          // Bind data
          $stmt->bindParam(':switch_name', $this->switch_name);
          $stmt->bindParam(':switch_brand', $this->switch_brand);
          $stmt->bindParam(':switch_price', $this->switch_price);
          $stmt->bindParam(':switch_type', $this->switch_type);

          // Execute query
          if($stmt->execute()) {
            return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Update Keyboard
    public function update() {
          // Update query
          $query = 'UPDATE ' . $this->table . ' SET switch_name = :switch_name, switch_brand = :switch_brand, switch_price = :switch_price, switch_type = :switch_type WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->switch_name = htmlspecialchars(strip_tags($this->switch_name));
          $this->switch_brand = htmlspecialchars(strip_tags($this->switch_brand));
          $this->switch_price = htmlspecialchars(strip_tags($this->switch_price));
          $this->switch_type = htmlspecialchars(strip_tags($this->switch_type));
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':switch_name', $this->switch_name);
          $stmt->bindParam(':switch_brand', $this->switch_brand);
          $stmt->bindParam(':switch_price', $this->switch_price);
          $stmt->bindParam(':switch_type', $this->switch_type);
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }

    // Delete Post
    public function delete() {
          // Create query
          $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }
    
  }
