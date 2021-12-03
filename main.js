const body = document.querySelector("body"); //document.querySelector_dosyadan seç
const button = document.querySelector("button");
const colors =["#FFA500", "#FF9C00" , "#FF7F50", "#FF6347", "#FF4500"];

button.addEventListener("click", changeBackground);//butona her tıkladığımda changeBackground fonksyonunu çaliştır
//addEventListener_kullanıcı sayfada herhangi bir işlem yaptığında(click vb.) istediğimiz aksiyonları alabilmemizi sağlar.




let sıra = 0;

function changeBackground() {

    //RASTGELE BİR RENK
/*
    const rastgeleSayi = Math.floor(Math.random() * colors.lenght);// Math.random rastgele sayı seçer_ Math.floor(Math.random() rastgele tam sayı seçer
    const secilenRenk = colors[rastgeleSayi];//rastgele renk seç
    body.style.backgroundColor = secilenRenk;
*/
    //sırayla arkaplan rengi seçmek için

   
    if(sıra == 5) sıra = 0; // sıra dörde eşitlenince 0 dan tekrar başla
    const secilenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenRenk;
}
