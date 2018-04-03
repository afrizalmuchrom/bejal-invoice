-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 03 Apr 2018 pada 12.14
-- Versi Server: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `invoice`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pelanggan`
--

CREATE TABLE IF NOT EXISTS `pelanggan` (
  `idpelanggan` int(3) NOT NULL AUTO_INCREMENT,
  `namapelanggan` varchar(30) NOT NULL,
  `nohppelanggan` int(15) NOT NULL,
  `tanggaldaftar` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `poinpelanggan` int(5) DEFAULT NULL,
  PRIMARY KEY (`idpelanggan`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data untuk tabel `pelanggan`
--

INSERT INTO `pelanggan` (`idpelanggan`, `namapelanggan`, `nohppelanggan`, `tanggaldaftar`, `poinpelanggan`) VALUES
(1, 'afrizal', 21813, '2018-04-03 13:56:10', 0),
(2, 'muchrom', 12356, '2018-04-03 13:56:10', 0),
(3, 'mahrom', 2356, '2018-04-03 14:00:49', NULL),
(4, 'abdul', 654, '2018-04-03 14:00:49', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE IF NOT EXISTS `produk` (
  `idproduk` int(3) NOT NULL AUTO_INCREMENT,
  `namaproduk` varchar(30) NOT NULL,
  `hargaproduk` int(12) NOT NULL,
  `stokproduk` int(3) NOT NULL,
  `deskripsi` varchar(30) NOT NULL,
  `tanggal` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idproduk`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`idproduk`, `namaproduk`, `hargaproduk`, `stokproduk`, `deskripsi`, `tanggal`) VALUES
(1, 'Gelas Kaca', 25000, 98, 'warna merah muda', '2018-04-02 13:13:48'),
(3, 'mangkok ayam', 30000, 50, 'pelastik', '2018-04-02 14:16:06'),
(4, 'mangkok ayam', 60000, 99, 'beling', '2018-04-02 14:16:06');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
