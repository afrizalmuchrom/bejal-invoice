//TAMPIL KATEGORI PRODUK DI INVOICE

function tampilkategori(k){
console.log(k.id);
var katid = k.id;//event.target.id;
var pilih_kategori = document.getElementById(katid);



var req = new XMLHttpRequest();
var param = 'tampil_kategori';
link = 'ambilproduk.php';

req.open("GET",path+link+"?x="+param,true);
req.send();

req.onreadystatechange = function(){

  if(req.readyState == 4 && req.status == 200){
    obj = JSON.parse(req.responseText);
     
 $(pilih_kategori).empty();
 
  for (var i = 0; i < obj.length; i++) {
  $(pilih_kategori).append( '<option id="'+katid+'" value=' + obj[i].idkategoriproduk + '>' + obj[i].namakategoriproduk +'</option>');

    }

    
pilih_kategori.addEventListener("change",tampilprodukselek);
}
}

}

//////////////////////////////// END TAMPIL OPTION