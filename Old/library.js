
            // When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
    
var vh;

function ScrollTo(blockID){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#"+blockID).offset().top - 39
    }, 1000);
}



function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("menuBar").style.backgroundColor = "#194880";
    } else {
        document.getElementById("menuBar").style.backgroundColor = "rgba(0, 0, 255, 0)";
    }
}
    
