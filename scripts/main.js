function init(){
    AOS.init();
    setTimeout( ()=>{
        document.getElementById("mainContainer").scrollIntoView();
    }, 6000);
}

window.onload = init;