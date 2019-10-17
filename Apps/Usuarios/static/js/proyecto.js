var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3500);
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function alerta() {
    var opcion = confirm("¿Desea guardar sus datos?");
}

function validarFormulario() {
    var nombres = document.getElementById("nombres");
    var paterno = document.getElementById("paterno");
    var materno = document.getElementById("materno");
    var mail = document.getElementById("mail");
    var remail = document.getElementById("remail");
    var fono = document.getElementById("fono");
    var pass = document.getElementById("pass");
    var repass = document.getElementById("repass");
    if (nombres === "" || paterno === "" || materno === "" || mail === "" ||
        remail === "" || fono === "" || pass === "" || repass === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
}
/*
function validarFormulario() {
    $('.alert').remove();
    var nombres = $("#nombres").val();
    var paterno = $("#paterno").val();
    var materno = $("#materno").val();
    var mail = $("#mail").val();
    var remail = $("#remail").val();
    var fono = $("#fono").val();
    var pass = $("#pass").val();
    var repass = $("#repass").val();

    if (nombres == "" || nombres == null) {
        cambiarColor("nombres");
        return false;
    } else {
        var expresion = /^{a-zA-ZñÑáéíóúÁÉÍÓÚ} * $/;
        cambiarColor("nombres");
    }
    if (paterno == "" || paterno == null) {
        cambiarColor("paterno");
        return false;
    } else {
        var expresion = /^{a-zA-ZñÑáéíóúÁÉÍÓÚ} * $/;
        cambiarColor("paterno");
    }
    if (materno == "" || materno == null) {
        cambiarColor("materno");
        return false;
    } else {
        var expresion = /^{a-zA-ZñÑáéíóúÁÉÍÓÚ} * $/;
        cambiarColor("materno");
    }

    if (mail == "" || mail == null) {
        cambiarColor("mail");
        return false;
    } else {
        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresion.test(mail)) {

            cambiarColor("mail");
            return false;
        }
    }
    $('form').submit();
    return true;
}
$('input').focus(function() {
    $('.alert').remove();
    colorDefault('nombres');
    colorDefault('paterno');
    colorDefault('materno');
    colorDefault('mail');
    colorDefault('remail');
    colorDefault('fono');
    colorDefault('pass');
    colorDefault('repass');
});



function colorDefault(dato) {
    $('#' + dato).css({
        border: "1px solid #999"
    });
}

function cambiarColor(dato) {
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

function mostrarAlerta(texto) {
    $('#nombres').before('<div class="alert">Error: ' + texto + '</div>');
}*/
mybutton = document.getElementById("myBtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}