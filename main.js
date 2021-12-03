const body = document.querySelector("body"); //document.querySelector_dosyadan seç
const button = document.querySelector("button");
const colors =["black", "green" , "grey", "blue"];

button.addEventListener("click", changeBackground);//butona her tıkladığımda changeBackground fonksyonunu çaliştır

let sıra = 0;

function changeBackground() {

    //RASTGELE BİR RENK

   /* const rastgeleSayi = Math.floor(Math.random() * colors.lenght);// Math.random rastgele sayı seçer_ Math.floor(Math.random() rastgele tam sayı seçer
    const secilenRenk = colors[rastgeleSayi];//rastgele renk seç
    console.log(rastgeleSayi, secilenRenk);
    body.style.backgroundColor = secilenRenk;*/

    //sırayla arkaplan rengi seçmek için

    console.log(sıra);
    if(sıra == 4) sıra = 0;
    const secilenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenRenk;

}
