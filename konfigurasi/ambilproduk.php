<?php

header("Content-Type: application/json; charset=UTF-8");
include_once "koneksi.php";
$conn = new mysqli($servername, $username, $password, $dbname);


if($_GET["x"] == 'tampil'){

$result = $conn->query("SELECT a.idproduk, a.namaproduk,a.hargaproduk,a.stokproduk,a.deskripsi,a.kategoriproduk,b.idkategoriproduk,b.namakategoriproduk FROM produk a,kategoriproduk b WHERE a.kategoriproduk = b.idkategoriproduk");
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);
$conn->close();	

echo json_encode($outp);


}else if($_GET["x"] == 'tampil_kategori_pada_produk'){
$param_kategori = $_GET["param_kategori"];
$result = $conn->query("SELECT * FROM produk WHERE kategoriproduk='$param_kategori'");
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);
$conn->close();	

echo json_encode($outp);


}else if($_GET["x"] == 'hapusproduk'){

$id = $_GET["id"];

$sql = "DELETE FROM produk WHERE idproduk=$id";

if ($conn->query($sql) === TRUE) {
    $error =  "Record deleted successfully";
} else {
    $error= "Error deleting record: " . $conn->error;
}

$conn->close();	

}else if($_GET["x"] == 'update_produk'){
$id = $_GET["id"];
$nampro = $_GET["nampro"];
$harpro = $_GET["harpro"];
$deskripsi = $_GET["deskripsi"];
$stokpro = $_GET["stokpro"];



$sql = "UPDATE produk SET namaproduk='$nampro',hargaproduk='$harpro',deskripsi='$deskripsi',stokproduk='$stokpro' WHERE idproduk='$id'";

if ($conn->query($sql) === TRUE) {
    echo "<div class='alert alert-success'>  <strong>Berhasil Update Produk. :) </div>";
}else {
    echo "<div class='alert alert-danger'>  <strong>Gagal Update Produk. :(</div>";
   
}

$conn->close();


} else if($_GET["x"] == 'tampil_pilihan'){

$result = $conn->query("SELECT * FROM produk");


while($row = mysqli_fetch_array($result)) {

    echo "<option value=\"" . $row['idproduk'] . "\">". $row['namaproduk']."</option>";
   
}


$conn->close();	




}else if($_GET["x"] == 'tampil_kategori'){

$result = $conn->query("SELECT * FROM kategoriproduk");
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);
$conn->close();	

echo json_encode($outp);


}else if($_GET["x"] == 'tambah_produk'){


$nampro = $_GET["nampro"];
$harpro = $_GET["harpro"];
$deskripsi = $_GET["deskpro"];
$stokpro = $_GET["stokpro"];
$katpro = $_GET["katpro"];




$sql = "INSERT INTO produk (namaproduk,hargaproduk,stokproduk,deskripsi,kategoriproduk) VALUES ('$nampro','$harpro','$stokpro','$deskripsi','$katpro')";

if ($conn->query($sql) === TRUE) {
    echo "<div class='alert alert-success'>  <strong>Berhasil Menambahkan Produk. :) </div>";
}else {
    echo "<div class='alert alert-danger'>  <strong>Gagal Menambahkan Produk. :(</div>".$conn->error;
   
}

$conn->close();

}else{
	
echo "Error ";
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