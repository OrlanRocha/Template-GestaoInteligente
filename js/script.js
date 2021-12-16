var grid = document.querySelector(".g-p"),
    sba_1 = document.querySelector(".sbar-1"),
    sba_2 = document.querySelector(".sbar-2");

document.querySelector(".bar_").addEventListener("click", function() {
    if (grid.style.borderColor != 'transparent') {
        grid.classList.remove("grid-panel"), grid.classList.add("grid-panel-oculto"), grid.style.borderColor = "transparent";
    } else if (grid.style.borderColor == 'transparent') {
        grid.classList.remove("grid-panel-oculto"), grid.classList.add("grid-panel"), grid.style.borderColor = "white";
    }
});

addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector(".load-fullsreen").style.display = "none";
    }, 1200);

    setInterval(function() {
        var d = new Date(),
            n1 = d.getHours(),
            n2 = d.getMinutes(),
            n3 = d.getSeconds();
        document.getElementById("hora").innerHTML = n1 + ':' + n2 + ':' + n3;
    }, 1100);
});

document.querySelector(".btn-nav-mob").addEventListener("click", function() {
    var main = document.querySelector(".main"),
        nav = document.querySelector(".nav-mobile");
    if (nav.style.width != "250px") {
        nav.style.visibility = "visible", nav.style.width = "250px", main.style.marginLeft = "250px";
    } else {
        nav.style.width = "0", main.style.marginLeft = "0", nav.style.visibility = "hidden";
    }
});

var btn_Top = document.querySelector(".btn-top");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn_Top.style.display = "block";
    } else {
        btn_Top.style.display = "none";
    }
};
var alt_1 = document.querySelector(".alt-1");
document.querySelector(".alterar-1").addEventListener("click", function() {
    if (alt_1.style.display != "block") {
        alt_1.style.display = "block";
    } else {
        alt_1.style.display = "none";
    }

});
window.onclick = function(event) {
    if (event.target == alt_1) {
        alt_1.style.display = "none";
    }
}
document.querySelector(".btn-top").addEventListener("click", function() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
});