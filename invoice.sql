-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2018 at 09:53 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invoice`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategoriproduk`
--

CREATE TABLE `kategoriproduk` (
  `idkategoriproduk` int(3) NOT NULL,
  `namakategoriproduk` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategoriproduk`
--

INSERT INTO `kategoriproduk` (`idkategoriproduk`, `namakategoriproduk`) VALUES
(1, 'Gelas'),
(2, 'Mangkok');

-- --------------------------------------------------------

--
-- Table structure for table `pelanggan`
--

CREATE TABLE `pelanggan` (
  `idpelanggan` int(3) NOT NULL,
  `namapelanggan` varchar(30) NOT NULL,
  `nohppelanggan` int(15) NOT NULL,
  `tanggaldaftar` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `poinpelanggan` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pelanggan`
--

INSERT INTO `pelanggan` (`idpelanggan`, `namapelanggan`, `nohppelanggan`, `tanggaldaftar`, `poinpelanggan`) VALUES
(1, 'afrizal', 21813, '2018-04-03 13:56:10', 0),
(2, 'muchrom', 12356, '2018-04-03 13:56:10', 0),
(3, 'mahrom', 2356, '2018-04-03 14:00:49', NULL),
(4, 'abdul', 654, '2018-04-03 14:00:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `idproduk` int(3) NOT NULL,
  `namaproduk` varchar(30) NOT NULL,
  `hargaproduk` int(12) NOT NULL,
  `stokproduk` int(3) NOT NULL,
  `deskripsi` varchar(30) NOT NULL,
  `tanggal` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `kategoriproduk` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`idproduk`, `namaproduk`, `hargaproduk`, `stokproduk`, `deskripsi`, `tanggal`, `kategoriproduk`) VALUES
(1, 'Gelas Kaca', 25000, 111, 'warna merah muda', '2018-04-02 13:13:48', 1),
(3, 'mangkok ayam', 30000, 50, 'pelastik', '2018-04-02 14:16:06', 2),
(4, 'mangkok ayam', 60000, 99, 'beling', '2018-04-02 14:16:06', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategoriproduk`
--
ALTER TABLE `kategoriproduk`
  ADD PRIMARY KEY (`idkategoriproduk`);

--
-- Indexes for table `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD PRIMARY KEY (`idpelanggan`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`idproduk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategoriproduk`
--
ALTER TABLE `kategoriproduk`
  MODIFY `idkategoriproduk` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `pelanggan`
--
ALTER TABLE `pelanggan`
  MODIFY `idpelanggan` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `idproduk` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
