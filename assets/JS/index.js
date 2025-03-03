const menuItens =document.getElementById("menuItens");

menuItens.style.maxHeight= "0px";

function menuHamburguer(){
    if(menuItens.style.maxHeight=="0px"){

        menuItens.style.maxHeight= "200px";

    }else{
        menuItens.style.maxHeight= "0px";
    }
}
