CREATE DATABASE logisticsdb;

USE logisticsdb;

CREATE TABLE shipments (
  shipment_id INT PRIMARY KEY AUTO_INCREMENT,
  sender VARCHAR(255),
  receiver VARCHAR(255),
  address VARCHAR(255),
  status VARCHAR(50),
  delivery_date DATE
);


CREATE TABLE vehicles (
  vehicle_id INT PRIMARY KEY AUTO_INCREMENT,
  plate_number VARCHAR(50),
  type VARCHAR(50),
  capacity INT
);


CREATE TABLE drivers (
  driver_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  license_number VARCHAR(50),
  phone_number VARCHAR(50)
);


CREATE TABLE routes (
  route_id INT PRIMARY KEY AUTO_INCREMENT,
  vehicle_id INT,
  start_location VARCHAR(255),
  end_location VARCHAR(255),
  route_distance INT,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id)
);
