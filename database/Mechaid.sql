-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 16, 2022 at 03:54 PM
-- Server version: 10.6.5-MariaDB-log
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Mechaid`
--

-- --------------------------------------------------------

--
-- Table structure for table `Connection`
--

CREATE TABLE `Connection` (
  `id` int(11) NOT NULL,
  `connection` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Connection`
--

INSERT INTO `Connection` (`id`, `connection`) VALUES
(1, 'Wired'),
(2, 'Wireless'),
(3, 'Wireless 2.4Ghz'),
(4, 'Wired, Wireless'),
(5, 'Wired, Wireless, Wireless 2.4Ghz');

-- --------------------------------------------------------

--
-- Table structure for table `Keyboard`
--

CREATE TABLE `Keyboard` (
  `id` int(11) NOT NULL,
  `keeb_name` varchar(40) NOT NULL,
  `keeb_brand` int(11) NOT NULL,
  `keeb_price` float NOT NULL,
  `keeb_switch` int(11) NOT NULL,
  `keeb_keycaps` int(11) NOT NULL,
  `keeb_connection` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Keyboard`
--

INSERT INTO `Keyboard` (`id`, `keeb_name`, `keeb_brand`, `keeb_price`, `keeb_switch`, `keeb_keycaps`, `keeb_connection`) VALUES
(3, 'Keychron K6', 2, 1700000, 2, 1, 3),
(4, 'Keychron K4', 2, 1200000, 3, 1, 2),
(5, 'Keychron K4', 2, 1200000, 2, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `KeyboardBrand`
--

CREATE TABLE `KeyboardBrand` (
  `id` int(11) NOT NULL,
  `brand` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `KeyboardBrand`
--

INSERT INTO `KeyboardBrand` (`id`, `brand`) VALUES
(1, 'GMK'),
(2, 'Keychron'),
(3, 'PressPlay'),
(4, 'KBD Fans');

-- --------------------------------------------------------

--
-- Table structure for table `Keycaps`
--

CREATE TABLE `Keycaps` (
  `id` int(11) NOT NULL,
  `keycaps_name` varchar(40) NOT NULL,
  `keycaps_brand` int(11) NOT NULL,
  `keycaps_profile` int(40) NOT NULL,
  `keycaps_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Keycaps`
--

INSERT INTO `Keycaps` (`id`, `keycaps_name`, `keycaps_brand`, `keycaps_profile`, `keycaps_price`) VALUES
(1, 'GMK Samurai', 1, 1, 700000);

-- --------------------------------------------------------

--
-- Table structure for table `KeycapsBrand`
--

CREATE TABLE `KeycapsBrand` (
  `id` int(11) NOT NULL,
  `brand` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `KeycapsBrand`
--

INSERT INTO `KeycapsBrand` (`id`, `brand`) VALUES
(1, 'GMK'),
(2, 'Akko'),
(3, 'YMDK'),
(4, 'EnjoyPBT');

-- --------------------------------------------------------

--
-- Table structure for table `KeycapsProfile`
--

CREATE TABLE `KeycapsProfile` (
  `id` int(11) NOT NULL,
  `profile` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `KeycapsProfile`
--

INSERT INTO `KeycapsProfile` (`id`, `profile`) VALUES
(1, 'Cherry'),
(2, 'OEM'),
(3, 'ASA'),
(4, 'XDA');

-- --------------------------------------------------------

--
-- Table structure for table `Owner`
--

CREATE TABLE `Owner` (
  `id` int(11) NOT NULL,
  `owner_name` varchar(40) NOT NULL,
  `keyboard_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Owner`
--

INSERT INTO `Owner` (`id`, `owner_name`, `keyboard_id`) VALUES
(1, 'Maulana Sodiqin', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Switch`
--

CREATE TABLE `Switch` (
  `id` int(11) NOT NULL,
  `switch_name` varchar(40) NOT NULL,
  `switch_brand` int(11) NOT NULL,
  `switch_type` int(11) NOT NULL,
  `switch_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Switch`
--

INSERT INTO `Switch` (`id`, `switch_name`, `switch_brand`, `switch_type`, `switch_price`) VALUES
(2, 'Gateron Brown ', 1, 2, 3000),
(3, 'Gateron Blue', 1, 3, 3000);

-- --------------------------------------------------------

--
-- Table structure for table `SwitchBrand`
--

CREATE TABLE `SwitchBrand` (
  `id` int(11) NOT NULL,
  `brand` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `SwitchBrand`
--

INSERT INTO `SwitchBrand` (`id`, `brand`) VALUES
(1, 'Gateron'),
(2, 'Outemu'),
(3, 'Bobba'),
(4, 'Jwick'),
(5, 'Cherry'),
(6, 'Akko');

-- --------------------------------------------------------

--
-- Table structure for table `SwitchType`
--

CREATE TABLE `SwitchType` (
  `id` int(11) NOT NULL,
  `type` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `SwitchType`
--

INSERT INTO `SwitchType` (`id`, `type`) VALUES
(1, 'Linear'),
(2, 'Tactile'),
(3, 'Clicky'),
(4, 'Tactile, Clicky');

-- --------------------------------------------------------

--
-- Table structure for table `Transactions`
--

CREATE TABLE `Transactions` (
  `id` int(11) NOT NULL,
  `keyboard_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Transactions`
--

INSERT INTO `Transactions` (`id`, `keyboard_id`, `owner_id`) VALUES
(1, 2, 1),
(2, 3, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Connection`
--
ALTER TABLE `Connection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Keyboard`
--
ALTER TABLE `Keyboard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `KeyboardBrand`
--
ALTER TABLE `KeyboardBrand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Keycaps`
--
ALTER TABLE `Keycaps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `KeycapsBrand`
--
ALTER TABLE `KeycapsBrand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `KeycapsProfile`
--
ALTER TABLE `KeycapsProfile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Owner`
--
ALTER TABLE `Owner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Switch`
--
ALTER TABLE `Switch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SwitchBrand`
--
ALTER TABLE `SwitchBrand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SwitchType`
--
ALTER TABLE `SwitchType`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Connection`
--
ALTER TABLE `Connection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Keyboard`
--
ALTER TABLE `Keyboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `KeyboardBrand`
--
ALTER TABLE `KeyboardBrand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Keycaps`
--
ALTER TABLE `Keycaps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `KeycapsBrand`
--
ALTER TABLE `KeycapsBrand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `KeycapsProfile`
--
ALTER TABLE `KeycapsProfile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Owner`
--
ALTER TABLE `Owner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Switch`
--
ALTER TABLE `Switch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `SwitchBrand`
--
ALTER TABLE `SwitchBrand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `SwitchType`
--
ALTER TABLE `SwitchType`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Transactions`
--
ALTER TABLE `Transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
