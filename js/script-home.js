addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector(".load-fullsreen").style.display = "none";
    }, 1200);
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

var c_spd_1 = document.querySelector(".cont-spant-1"),
    c_spd_2 = document.querySelector(".cont-spant-2"),
    c_spd_3 = document.querySelector(".cont-spant-3");

document.querySelector(".spand-1").addEventListener("click", function() {
    if (c_spd_1.style.height != "70px") {
        c_spd_3.style.height = "0", c_spd_2.style.height = "0", c_spd_1.style.height = "70px",
            c_spd_2.classList.add("invisible"), c_spd_3.classList.add("invisible"), c_spd_1.classList.remove("invisible");
    } else {
        c_spd_1.style.height = "0";
    }
});

document.querySelector(".spand-2").addEventListener("click", function() {
    if (c_spd_2.style.height != "120px") {
        c_spd_3.style.height = "0", c_spd_1.style.height = "0", c_spd_2.style.height = "120px",
            c_spd_1.classList.add("invisible"), c_spd_3.classList.add("invisible"), c_spd_2.classList.remove("invisible");
    } else {
        c_spd_2.style.height = "0";
    }
});

document.querySelector(".spand-3").addEventListener("click", function() {
    if (c_spd_3.style.height != "105px") {
        c_spd_2.style.height = "0", c_spd_1.style.height = "0", c_spd_3.style.height = "105px",
            c_spd_1.classList.add("invisible"), c_spd_2.classList.add("invisible"), c_spd_3.classList.remove("invisible");
    } else {
        c_spd_3.style.height = "0";
    }
});
var msg = document.querySelector('.msg-box'), alert = document.querySelector('.msg-alert');
document.querySelector(".btn-contact").addEventListener("click", function() {
    let login = document.querySelector('.form-contact'), r_ = "Essa requisição não funcionou.";
    let formData = new FormData(login), object = {};

    formData.forEach((value, key) => object[key] = value);

    let json = JSON.stringify(object), 
    ajax = new XMLHttpRequest();

    ajax.open("POST", "index.php", true), 
    ajax.setRequestHeader("Content-type", "application/json"), 
    ajax.send(json), ajax.onreadystatechange = function() {
    
        if (ajax.readyState == 4 && ajax.status == 200) {
            let data = ajax.responseText;
            document.getElementsByClassName('resposta-resquest').value = data;
        }else{
            msg.classList.add("animated");
            msg.style.display = 'block'; 
            alert.classList.add("erro");
            
            msg.classList.add("bounceInRight");
            document.getElementById("resposta").innerHTML = r_;

            setTimeout(function() {
                msg.classList.remove("bounceInRight");
                msg.classList.add("bounceOutRight");

                setTimeout(function() {
                    msg.style.display = 'none'; 
                    msg.classList.remove("bounceOutRight");
                    msg.classList.remove("animated");
                    alert.classList.remove("erro");
                }, 700);   
            }, 2500);    
        }
    }
});
