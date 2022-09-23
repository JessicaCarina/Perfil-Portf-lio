setTimeout(ApresentarModal, 5000);
function ApresentarModal(){
    var modal=document.querySelector(".modal");
   

    if(modal!=null)
    {
        document.querySelector(".modal").style.display ="block";

        document
        .querySelector(".modal a")
        .addEventListener("click", function(){
            document.querySelector(".modal").style.display ="none";
        });
    } 
}

var imagesizeW = $('.foto').width();
var imagesizeH = $('.foto').height();
    
$('.zoomout').on('click', function(){
    imagesizeW = imagesizeW - 60;
    imagesizeH = imagesizeH - 60;
    $('.foto').width(imagesizeW);
    $('.foto').height(imagesizeH);
});

$('.zoomin').on('click', function(){
    imagesizeW = imagesizeW + 60;
    imagesizeH = imagesizeH + 60;
    $('.foto').width(imagesizeW);
    $('.foto').height(imagesizeH);
});