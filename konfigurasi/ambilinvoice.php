<?php

header("Content-Type: application/json; charset=UTF-8");
include_once "koneksi.php";
$conn = new mysqli($servername, $username, $password, $dbname);


if($_GET["x"] == 'tampil_pelanggan'){
$a = $_GET["q"];
$b = $a.'%';
if($a == ''){
$outp = '';
echo json_encode($outp);
}else{

$result = $conn->query("SELECT * FROM pelanggan WHERE namapelanggan LIKE '$b'");
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);
$conn->close();	

echo json_encode($outp);

}




}else{
	
echo "Error : ";
}

/*

$sql = "SELECT * FROM produk";
$result = $conn->query($sql);
while($row = $result->fetch_assoc()) {
extract($row);

$show[] = $row;
    }

$tampil = json_encode($show);
echo $tampil;


}



 



function tambahproduk($nama,$stok,$harga,$tgl){
	
$stmt = $conn->prepare("INSERT INTO produk (idproduk, namaproduk, stokproduk, hargaproduk,tanggal) VALUES (?, ?, ?,?,?)");
$stmt->bind_param('', $namaproduk, $stokproduk, $hargaproduk,$tanggal);

// set parameters and execute
$namaproduk = $nama;
$stokproduk = $stok;
$hargaproduk = $harga;
$tanggal = $tgl;
$stmt->execute();

$stmt->close();
$conn->close();
}


*/








?>