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