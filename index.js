var galeryImage = (function galeryImage() {

    "use strict";

    var tableau = ['img/voiture.jpg', 'img/bugatti.jpg', 'img/f.jpg', 'img/dodge.jpg', 'img/tupac.jpg', 'img/combijpg.jpg', 'img/impala.jpg', 'img/shelby.jpg'];
    var compteur = 0;
    var img = document.getElementById('is-hidden');
    var monIcon = document.getElementById('move_next');
    var iconPreview = document.getElementById('move_preview');
    var iconUpload = document.getElementById('file_upload_btn');
    var iconPlay = document.querySelector("#play");
    console.log(iconPlay.style)
    var iconPause = document.querySelector("#pause");
    var div = document.getElementById("play_pause");
    var divGalery = document.getElementById('my_galery');
    var result = document.getElementById('result');
    var listingImgSrc = document.getElementById('imgsrc');
    var intervalID;






    var autoPlay = function autoPlay(x, y, z) {

        if (x == true && y == 'right') {
            intervalID = setInterval(moveImg, z)
        } else if (x == true && y == 'left') {
            intervalID = setInterval(previewImage, z)
        } else {
            console.log('hello !!!')
        }
    }




    const moveImg = function moveImg() {


        if (compteur < tableau.length - 1) compteur++;
        else compteur = 0;
        img.src = tableau[compteur];
        listingImgSrc.innerHTML += img.src + '<br><br>';
          console.log(img)
    };


    

    const previewImage = function previewImage() {


        if (compteur == 0) compteur = tableau.length - 1;
        else compteur += -1;
        img.src = tableau[compteur];
        listingImgSrc.innerHTML += img.src + '<br>';
          console.log(img)
    }








    var start = function () {


        autoPlay(true, 'right', 1000);

        img.src = tableau[0];

        monIcon.addEventListener("click", moveImg);

        iconPreview.addEventListener("click", previewImage);




        iconPlay.addEventListener("click", function () {

         
            autoPlay(true, 'right', 1000);
            iconPause.style.opacity = '1';
             iconPlay.style.opacity = '0';
            listingImgSrc.innerHTML = '';
            iconPlay.style.pointerEvents = 'none';
            iconPause.style.pointerEvents = 'auto';
        })



        iconPause.addEventListener("click", function () {

            
            window.clearInterval(intervalID);
            iconPause.style.opacity = '0';
            iconPlay.style.opacity = '1';
            iconPlay.style.pointerEvents = 'auto';
            iconPause.style.pointerEvents = 'none';
            
        })




        console.log('DOM READY !')
        

    };
    window.addEventListener("DOMContentLoaded", start)
}());
