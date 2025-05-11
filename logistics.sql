-- This SQL script creates a database for a logistics management system.
-- It includes tables for shipments, vehicles, drivers, and routes.

-- The script assumes you are using MySQL or a compatible database system.
-- Make sure to adjust the database connection settings as needed.
CREATE DATABASE logisticsdb;

-- Use the created database
-- Note: You may need to drop the database if it already exists.
-- DROP DATABASE IF EXISTS logisticsdb;
USE logisticsdb;


-- Create tables for the logistics management system
-- Table for shipments
-- This table stores information about shipments, including sender, receiver, address, status, and delivery date.
CREATE TABLE shipments (
  shipment_id INT PRIMARY KEY AUTO_INCREMENT,
  sender VARCHAR(255),
  receiver VARCHAR(255),
  address VARCHAR(255),
  status VARCHAR(50),
  delivery_date DATE
);

-- Table for vehicles
-- This table stores information about vehicles, including vehicle ID, plate number, type, and capacity.
-- The vehicle ID is the primary key and is auto-incremented.
CREATE TABLE vehicles (
  vehicle_id INT PRIMARY KEY AUTO_INCREMENT,
  plate_number VARCHAR(50),
  type VARCHAR(50),
  capacity INT
);

-- Table for drivers
-- This table stores information about drivers, including driver ID, name, license number, and phone number.
-- The driver ID is the primary key and is auto-incremented.
CREATE TABLE drivers (
  driver_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  license_number VARCHAR(50),
  phone_number VARCHAR(50)
);

-- Table for routes
-- This table stores information about routes, including route ID, vehicle ID, start location, end location, and distance.
-- The route ID is the primary key and is auto-incremented.
CREATE TABLE routes (
  route_id INT PRIMARY KEY AUTO_INCREMENT,
  vehicle_id INT,
  start_location VARCHAR(255),
  end_location VARCHAR(255),
  route_distance INT,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id)
);
