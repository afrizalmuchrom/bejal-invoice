

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

 // Find a <table> element with id="myTable":
var tableproduk = document.getElementById("table");
var pilih_kategori_add = document.getElementById("katpro");








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





    
  }
  }

}

}



//TAMPIL PRODUK----------------------------------------------------
window.onload = page();
function page(){


var param = 'tampil';
link = 'ambilproduk.php';


var req = new XMLHttpRequest();


req.open("GET",path+link+"?x="+param,true);
req.send();



req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
    obj = JSON.parse(req.responseText);

//console.log(JSON.parse(req.responseText));
   //Load  datatable------------------------------------------
    //var oTblReport = $("#example")
 var table = $('#example').DataTable( {
    //oTblReport.DataTable ({
      
        "data" : obj,
      
        "columns" : [
             { "data" : "namakategoriproduk" },
           //  { "data" : "kategoriproduk" },
            { "data" : "namaproduk" },
            { "data" : "deskripsi" },
            { "data" : "stokproduk" },
            { "data" : "hargaproduk",
            render: $.fn.dataTable.render.number( ',', '.', 2, 'Rp. ' ) },
         {  "data" : "idproduk", 
          "mRender": function (data,type, full) {
return '<a href="#edit-modal" ><button class="btn btn-warning"  data-toggle="modal" data-target="#edit-modal"  id="'+ full.namakategoriproduk + ',' +full.namaproduk+','+full.hargaproduk+','+full.stokproduk+','+full.deskripsi +'">U</button></a> \n\
               <button class="btn btn-danger" onClick="hapusproduk(this)" value='+ full.idproduk +'>H</button> ';
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

 // PANGGIL FUNGSI TAMPIL PELANGGAN

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
  
$('#hasilpelanggan').append( '<a href=#  onClick="fillnama(\''+ obj[i].namapelanggan +' - '+ obj[i].nohppelanggan  +'\')"><button class="btn btn-primary"><font color="white">'+ obj[i].namapelanggan +' - '+ obj[i].nohppelanggan +'</font></button></a><br>');
   
  }
}
}
}
);
// END TAMPIL NAMAPELANGGAN AJAX
}

var invoice = document.getElementById("forminvoice");
invoice.addEventListener("click",forminvoice);






//TAMPIL KATEGORI PRODUK DI INVOICE

function tampilkategori(k){


var katid = k.id;//event.target.id;
var pilih_kategori = document.getElementById(katid);



var req = new XMLHttpRequest();
var param = 'tampil_kategori';
link = 'ambilproduk.php';

req.open("GET",path+link+"?x="+param,true);
req.send();

req.onreadystatechange = function(){
$(pilih_kategori).empty();
  if(req.readyState == 4 && req.status == 200){
    obj = JSON.parse(req.responseText);
     
 
 
  for (var i = 0; i < obj.length; i++) {
  $(pilih_kategori).append( '<option id="'+katid+'" value=' + obj[i].idkategoriproduk + '>' + obj[i].namakategoriproduk +'</option>');

    }

    

}
}

if(k.id != 'addkatpro'){
pilih_kategori.addEventListener("change",tampilprodukselek);
}

}

//////////////////////////////// END TAMPIL OPTION KATEGORI











/// TAMPIL PRODUK OPTION SELECT DI INVOICE ----------------------------------

function tampilprodukselek(event){


var req = new XMLHttpRequest();
//var option_katpro = document.getElementById(event.target.id);
var regexid = event.target.id;


var kattonum = regexid.replace(/[^0-9]+/g, '');




link = 'ambilproduk.php';

req.open("GET",path+link+"?x=tampil_kategori_pada_produk&&param_kategori="+event.target.value,true);
req.send();

req.onreadystatechange = function(){
  if(req.readyState == 4 && req.status == 200){
    obj = JSON.parse(req.responseText);
    
  
 var pilih = document.getElementById('nampro'+kattonum+'');

 $(pilih).empty();
  
  for (var i = 0; i < obj.length; i++) {
    
  $(pilih).append( '<option id=' + obj[i].idproduk + ' value=' + obj[i].hargaproduk + '>' + obj[i].namaproduk + ' - '+obj[i].deskripsi +' - '+ obj[i].hargaproduk +'</option>');

    }
document.getElementById('bayar'+kattonum+'').innerHTML = '0';
document.getElementById('jumpro'+kattonum+'').value = '';

}
}

}


function jum(x){
 

var regexidjum = x.id;
kattonumjum = regexidjum.replace(/[^0-9]+/g, '');
var namprox = document.getElementById('nampro'+kattonumjum+'')
bayartot = document.getElementById('bayar'+kattonumjum+'');
jumprox = document.getElementById('jumpro'+kattonumjum+'');

if ( /\D/.test(jumprox.value)){
  jumprox.value = '';
 }else{
 var x=0;
  x = namprox.value * jumprox.value;
  

bayartot.innerHTML = x.toLocaleString();
}
}




(function(){

addrowproduk();



}());



function addrowproduk(){

// Create an empty <tr> element and add it to the 1st position of the table:
var row = tableproduk.insertRow(table.length);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

//$(pilih_kategori_add).append( '<select class="form-control" id="katpro'+tableproduk.rows.length+'" name="katpro'+tableproduk.rows.length+'"></select>');
//console.log(tableproduk.rows.length);
// Add some text to the new cells:
cell1.innerHTML = '<select class="form-control"  id="katpro'+tableproduk.rows.length+'"  name="katpro'+tableproduk.rows.length+'"><option onclick="tampilkategori(this)"  id="katpro'+tableproduk.rows.length+'" value="0">Pilih Kategori</option></select>';
cell2.innerHTML = '<select class="form-control" id="nampro'+tableproduk.rows.length+'" name="nampro'+tableproduk.rows.length+'"><option value="0">Pilih Produk</option></select>';
cell3.innerHTML = '<input type="text" class="form-control" onkeyup="jum(this)" required id="jumpro'+table.rows.length+'" name="jumpro'+tableproduk.rows.length+'" placeholder="Harus Angka" />';
cell4.innerHTML = '<h4 id="bayar'+tableproduk.rows.length+'" > </h4>';

var x = document.getElementById('katpro'+tableproduk.rows.length+'');
var y = document.getElementById('addkatpro');
tampilkategori(x);
tampilkategori(y);

}
















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





//TAMBAH PRODUK-------------------------


var addnamprod = document.getElementById('addnampro');
var addharprod = document.getElementById('addharpro');
var adddeskripsiprod = document.getElementById('adddeskripsi');
var addstokprod = document.getElementById('addstokpro');
var error_info_add = document.getElementById('error_info_add'); 
var addkatprod = document.getElementById('addkatpro');


function tambah_produk(event){

param = "tambah_produk";
var req = new XMLHttpRequest();
 req.open("GET",path+link+"?x="+param+"&&nampro="+addnamprod.value+"&&harpro="+addharprod.value+"&&deskpro="+adddeskripsiprod.value+"&&stokpro="+addstokprod.value+"&&katpro="+addkatprod.value,true);
req.send();
  
req.onreadystatechange = function(){
  
  if(req.readyState == 4 && req.status == 200){

move();
error_info_add.innerHTML = req.responseText;  



    
  }

  }


event.preventDefault();

}
var formadd = document.getElementById("formadd");
formadd.addEventListener("submit",tambah_produk);


//--- END TAMBAH PRODUK------------------



// FUNGSI CEK NOMOR--------


function cek_angka(angka){

var bersihnonumber = document.getElementById(angka.id);

if ( /\D/.test(angka.value)){
 bersihnonumber.value = 0;
 }

}




// END FUNGSI CEK NOMOR





