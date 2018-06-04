
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dasbor Toko</title>
	<!-- BOOTSTRAP STYLES-->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
     <!-- FONTAWESOME STYLES-->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />
        <!-- CUSTOM STYLES-->
    <link href="assets/css/custom.css" rel="stylesheet" />
     <!-- GOOGLE FONTS
   <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    -->
<link rel="stylesheet" type="text/css" href="datatables/media/css/jquery.dataTables.css">

<style type="text/css">
  
#myProgress {
    width: 100%;
    background-color: grey;
}
#myBar {
    width: 1%;
    height: 30px;
    background-color: green;


}
.progress {
  height: 300px;
}
.progress > svg {
  height: 100%;
  display: block;
}

</style>
<script type="text/javascript">
  

 window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

    circle.animate(1);
};
</script>




</head>




<body>
     

          
    <div id="wrapper">
         <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="adjust-nav">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <img src="assets/img/logo.png" />

                    </a>
                    
                </div>
              
                <span class="logout-spn" >
                  <a href="http://afrizalmuchrom.web.id" style="color:#fff;">i'AM</a>  

                </span>
            </div>
        </div>
        <!-- /. NAV TOP  -->
        <nav class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
                 


 





                    <li class="active-link">
                        <a href="index.php" ><i class="fa fa-desktop "></i>Dashboard <span class="badge">Included</span></a>
                    </li>
                   

                    <li>
                        <a href="ui.html"><i class="fa fa-table "></i>UI Elements  <span class="badge">Included</span></a>
                    </li>
                    <li>
                        <a href="#listproduktampil" id="linkproduk" data-toggle="tab"><i class="fa fa-edit "  ></i>Daftar Produk  </a>

                    </li>


                    <li>

<a href="#addprod"  data-toggle="tab" id="tambahproduk"><i class="fa fa-cube " ></i> Tambah Produk </a> 
                    </li>

                    <li>
                  <a href="#profile"  data-toggle="tab" id="forminvoice"><i class="fa fa-edit " ></i>Invoice  </a>     <!--     <a href="#" id="forminvoice"><i class="fa fa-edit " ></i>Invoice  </a> -->
                    </li>




                     
                          
                          
                       









                   
                    
                </ul>
                            </div>

        </nav>
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper" >
            <div id="page-inner">
                <div class="row">
                    <div class="col-lg-12">
                     <h2>I'am Inv</h2>   
                    </div>
                </div>              
                 <!-- /. ROW  -->
                  <hr />
                
                  <!-- /. ROW  --> <div id="dasbor">

                   <div class="tab-content">

                <div class="tab-pane fade active in" id="home">
                 <h2>Halaman Utama</h2> 
                </div>


  <div class="tab-pane fade " id="addprod">
              
<form id="formadd" >

      <div id="myProgress">
  <div id="myBar"></div>
</div>  

<span id="error_info_add"></span>
  <h1>Tambah Produk</h1>
  <br>
  <div class="input-group">
   <span class="input-group-addon">Kategori Produk</span> <select class="form-control" name="addkatpro" id="addkatpro" ><option onclick="tampilkategori(this)">Pilih Kategori</option></select>
 </div>
 <br>
  <div class="input-group">
   <span class="input-group-addon">Nama Produk</span> <input type="text" required name="addnampro" id="addnampro" class="form-control" />
 </div>
<br>
<div class="input-group">
   <span class="input-group-addon">Harga Produk</span><input onkeyup="cek_angka(this)" type="text" required name="addharpro" id="addharpro" placeholder="isi dengan angka" class="form-control" />
 

</div>
<br>
<div class="input-group">
   <span class="input-group-addon">Deskripsi Produk</span><input type="text" required name="adddeskripsi" id="adddeskripsi" class="form-control" />
 

</div>
<br>
<div class="input-group">
  <span class="input-group-addon">Stok Produk</span><input type="text" placeholder="isi dengan angka" onkeyup="cek_angka(this)" required name="addstokpro" id="addstokpro" class="form-control" />

</div>
<br>
  <input type="submit" id="submit" class="btn btn-primary" value="Tambah Produk" />

  
 <button type="reset" class="btn btn-default" data-dismiss="modal">Kosongkan</button>   
      </form>


                </div>

<div class="tab-pane fade " id="listproduktampil">
   
                        


                              <table  id='example' class='display' cellspacing='0' width='100%'>
                              <thead>
            <tr>
            <th>Kategori</th><th>Nama Produk</th><th>Deskripsi</th><th>Stok</th><th>Harga</th><th>Pilihan</th>
            </tr>
            </thead>
       
        <tfoot>
        <tr>
        <th>Kategori</th><th>Nama Produk</th><th>Deskripsi</th><th>Stok</th><th>Harga</th><th>Pilihan</th>
        </tr>
        </tfoot>
        </table>
                            </div>

                            <div class="tab-pane fade" id="profile">
                                

<!--  AWAL FORM INVOICE   -----------------------------------------------------------------  -->




 <h1 align="center">
                             <strong>Form Invoice</strong>
                        </h1>

<form action="terimasementara.php" method="POST">

  <div class="input-group"  >
  <span class="input-group-addon">Nama Pelanggan </span>
  
  <input type="text" class="form-control"  placeholder="awal nama lalu spasi untuk mencari member" name="nampel" id="nampel" required />
 
  <div id="hasilpelanggan"></div></div>



<br>
<div class="input-group">
  <input type="button" id="tambahkelist" onClick="addrowproduk()" value="Tambah Ke Daftar" class="btn btn-primary" />
  
</div>


<div class="form-group">

<div class="table-responsive">
                            <table id="table" class="table">
                                <thead>
                                    <tr>
                                         <th>Kategori Produk</th>
                                        <th>Nama Produk</th>
                                        <th>Jumlah Produk</th>
                                        <th>Jumlah Bayar</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                   <td id="katpro" class="success">
                                     </td>
         <td id="nampro" class="success" ></td>
  <td id="jumpro" class="success"></td>
 <td id="bayar" class="success"> </td>
                                       
                                    </tr>

                         
                                    
                                </tbody>
                            </table>
                        </div>

</div>

<div class="input-group">
  <span class="input-group-addon">Tanggal </span>
  <input type="date" class="form-control" required id="tanggalinvoice" name="tanggalinvoice" placeholder="tanggal invoice" />
</div>
<br>

<div class="input-group">
  <input type="submit" value="Buat Invoice" class="btn btn-primary" />
  

</div>


</form>





<!-- AKHIR FORM INVOICE ------------------------------------------------------------------ -->


                            </div>
                           

                        </div>



    </div>
             <!-- /. PAGE INNER  -->
            </div>
         <!-- /. PAGE WRAPPER  -->
        </div>
    <div class="footer">
      
    
            <div class="row">
                <div class="col-lg-12" >
                    &copy;  2014 yourdomain.com | Design by: <a href="http://binarytheme.com" style="color:#fff;" target="_blank">www.binarytheme.com</a>
                </div>
            </div>
        </div>
          

          
<!-- Modal -->
<from action="" method="POST" >
  <div class="modal fade" id="edit-modal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Ubah Detail Produk</h4>
        </div>
        <div class="modal-body editidproduk" >
<span id="error_info"></span>
        <div class="input-group">
   <span class="input-group-addon">Nama Produk</span> <input type="text" required name="editnampro" id="editnampro" class="form-control" />
 </div>
<br>
<div class="input-group">
   <span class="input-group-addon">Harga Produk</span><input type="text" required onkeyup="cek_angka(this)" name="editharpro" id="editharpro" class="form-control" />
 

</div>
<br>
<div class="input-group">
   <span class="input-group-addon">Deskripsi Produk</span><input type="text" required name="editdeskripsi" id="editdeskripsi" class="form-control" />
 

</div>
<br>
<div class="input-group">
  <span class="input-group-addon">Stok Produk</span><input type="text" onkeyup="cek_angka(this)" required name="editstokpro" id="editstokpro" class="form-control" />


</div>
<br>

<div class="input-group">
  <span class="input-group-addon">Kategori</span><select name="editkatpro" id="editkatpro" ></select>


</div>


<br>

       <input type="hidden" id="editidproduk" value="">

      
        </div>
        <div class="modal-footer">
        
  <button type="submit" onClick="update_produk()" id="update_produk" class="btn btn-primary" />Perbarui Data</button>

  
 <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
         
        </div>
      </div>
      
    </div>
  </div>
 </from>



 
     <!-- /. WRAPPER  -->
    <!-- SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME-->
    <!-- JQUERY SCRIPTS  -->
   
    <script src="assets/js/jquery-1.10.2.js"></script>
      <script src="assets/js/custom.js"></script>
      <!-- BOOTSTRAP SCRIPTS -->
    <script src="assets/js/bootstrap.min.js"></script>
      <!-- CUSTOM SCRIPTS -->
 <script type="text/javascript" src="load-an.js"></script>

 <script type="text/javascript" src="respon-produk.js"></script>


 <script type="text/javascript" src="datatables/media/js/jquery.min.js"></script>
<script type="text/javascript" src="datatables/media/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/plug-ins/1.10.16/api/fnReloadAjax.js"></script>



</body>
</html>
