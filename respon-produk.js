

// VARIABLE 
var fullist='';
var link='';
var txt='';
var obj='';
var path = '';
var link='';
link = 'ambilproduk.php';
path = 'konfigurasi/';
var keys = {};
var valnampel ='';
var x ='';
















// UPDATE PRODUK-----------------------------------

 var editid = document.getElementById('editidproduk');   
            var editnampro = document.getElementById('editnampro');  
             var editharpro = document.getElementById('editharpro');  
              var editdeskripsi = document.getElementById('editdeskripsi');  
               var editstokpro = document.getElementById('editstokpro'); 
               var error_info = document.getElementById('error_info');  
			  

function update_produk(){
	 



param = "update_produk";
var req = new XMLHttpRequest();
 req.open("GET",path+link+"?x="+param+"&&id="+editid.value+"&&nampro="+editnampro.value+"&&harpro="+editharpro.value+"&&deskripsi="+editdeskripsi.value+"&&stokpro="+editstokpro.value,true);
req.send();

req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){

    
    error_info.innerHTML = req.responseText;
    
  page();

 
  
    
  }
  }


}













// HAPUS PRODUK---------------------------

function hapusproduk(idproduk){

var param = 'hapusproduk';

if ( confirm("Yakin, Mau Menghapus?")){
  

 var req = new XMLHttpRequest();

req.open("GET",path+link+"?x="+param+"&&id="+idproduk.value,true);
req.send();

req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
    obj = req.responseText;
page(event.target.id='linkproduk');
    
  }
  }

}

}


//TAMPIL PRODUK----------------------------------------------------

function page(event){


var param = 'tampil';
link = 'ambilproduk.php';


var req = new XMLHttpRequest();

req.open("GET",path+link+"?x="+param,true);
req.send();

req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
    obj = JSON.parse(req.responseText);

//console.log(JSON.parse(req.responseText));
dasbor.innerHTML = "<table  id='example' class='display' cellspacing='0' width='100%'><thead>"+
            "<tr><th>Kategori</th><th>Nama Produk</th><th>Deskripsi</th><th>Stok</th><th>Harga</th><th>Pilihan</th></tr></thead>"+
        "<tfoot><tr><th>Kategori</th><th>Nama Produk</th><th>Deskripsi</th><th>Stok</th><th>Harga</th><th>Pilihan</th></tr></tfoot></table>";


      
   //Load  datatable
    var oTblReport = $("#example")
 
    oTblReport.DataTable ({
        "data" : obj,
      
        "columns" : [
             { "data" : "kategoriproduk" },
            { "data" : "namaproduk" },
            { "data" : "deskripsi" },
            { "data" : "stokproduk" },
            { "data" : "hargaproduk",
            render: $.fn.dataTable.render.number( ',', '.', 2, 'Rp. ' ) },
         {  "data" : "idproduk", 
          "mRender": function (data,type, full) {
return '<a href="#edit-modal" ><button class="btn btn-warning"  data-toggle="modal" data-target="#edit-modal"  id="'+ full.idproduk + ',' +full.namaproduk+','+full.hargaproduk+','+full.stokproduk+','+full.deskripsi +'">Ubah</button></a> \n\
               <button class="btn btn-danger" onClick="hapusproduk(this)" value='+ full.idproduk +'>Hapus</button> ';
                            }}
                          
     
        ]
    });
      
}
}



}



 
 /// TAMPIL FORM INVOICE--------------------------- 


function forminvoice(event){
  
var link = 'forminvoice.html';
var req = new XMLHttpRequest();

req.open("GET",link,true);
req.send();
req.onreadystatechange = function(){
 
  if(req.readyState == 4 && req.status == 200){
    dasbor.innerHTML = req.responseText;



var param = 'tampil_kategori';
link = 'ambilproduk.php';

req.open("GET",path+link+"?x="+param,true);
req.send();

req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
    obj = JSON.parse(req.responseText);
  var pilih_kategori = document.getElementById("katpro");
  


 $(pilih_kategori).empty();
  
  for (var i = 0; i < obj.length; i++) {
  $(pilih_kategori).append( '<option id="option_katpro" value=' + obj[i].idkategoriproduk + '>' + obj[i].namakategoriproduk +'</option>');

    }
 


pilih_kategori.addEventListener("click",tampilprodukselek);
}


}


}
}
}


var utama = document.getElementById("linkutama");
var produk = document.getElementById("linkproduk");
var dasbor = document.getElementById("dasbor");
var invoice = document.getElementById("forminvoice");


produk.addEventListener("click",page);
invoice.addEventListener("click",forminvoice);






// MODALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL MODAL MODAL MODAL MODAL MODAL

 $('#edit-modal').on('show.bs.modal', function(e) {
          error_info.innerHTML = '';
            var $modal = $(this),
                esseyId = e.relatedTarget.id;

  
            var editid = document.getElementById('editidproduk');   
            var editnampro = document.getElementById('editnampro');  
             var editharpro = document.getElementById('editharpro');  
              var editdeskripsi = document.getElementById('editdeskripsi');  
               var editstokpro = document.getElementById('editstokpro');  
          
        
          
           var prod_array = esseyId.split(',');
        
        	editid.value = prod_array[0];
        	editnampro.value = prod_array[1];
        	editharpro.value = prod_array[2];
        	editstokpro.value = prod_array[3];
        	editdeskripsi.value = prod_array[4];


        })




// TAMPIL PELANGGAN-----------------------------------

function fillnama(x){
 var addnampel = document.getElementById('nampel'); 
addnampel.value = x;

$('#hasilpelanggan').empty();
  
}

// TAMPIL PRODUK OPTION SELECT DI INVOICE----------------------------------

function tampilprodukselek(event){
  
var req = new XMLHttpRequest();
var option_katpro = document.getElementById("option_katpro");



link = 'ambilproduk.php';


req.open("GET",path+link+"?x=tampil_kategori_pada_produk&&param_kategori="+event.target.value,true);
req.send();

req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
    obj = JSON.parse(req.responseText);
    console.log(obj);
  var pilih = document.getElementById("nampro");
  // PANGGIL FUNGSI TAMPIL PELANGGAN


 $(pilih).empty();
  
  for (var i = 0; i < obj.length; i++) {
  $(pilih).append( '<option id=' + obj[i].idproduk + ' value=' + obj[i].hargaproduk + '>' + obj[i].namaproduk + ' - '+obj[i].deskripsi +' - '+ obj[i].hargaproduk +'</option>');

    }
 
}

var addnampel = document.getElementById('nampel');             
addnampel.addEventListener("keydown",function(event){
 
link = 'ambilinvoice.php';
param = 'tampil_pelanggan'  

keys = event.which;
var req = new XMLHttpRequest();

if(keys == 32){
 
valnampel = addnampel.value;
req.open("GET",path+link+"?x="+param+"&&q="+valnampel,true);
req.send();

}else if( keys == 8){
 $('#hasilpelanggan').empty();
}else{}


req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
   obj = JSON.parse(req.responseText);
 
  $('#hasilpelanggan').empty();
  for (var i = 0; i < obj.length; i++) {
  
$('#hasilpelanggan').append( '<a href=#  onClick="fillnama(\''+ obj[i].namapelanggan +' - '+ obj[i].nohppelanggan  +'\')">'+ obj[i].namapelanggan +' - '+ obj[i].nohppelanggan +'</a><br>');
   


  }
}
}});


}

function jum(event){
 
if ( /\D/.test(jumpro.value)){
  alert('Inputkan dengan Angka');
 }else{
 var x=0;
  x = nampro.value * jumpro.value;

bayar.innerHTML = x.toLocaleString();
}
}

var jumpro = document.getElementById("jumpro");
var bayar = document.getElementById("bayar");

jumpro.addEventListener("keyup",jum);



   

}

