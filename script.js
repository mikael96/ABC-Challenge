
window.onload = function () {
    var coloresH1 = ["yellow", "blue", "green"];
    var titulosH1 = document.getElementsByTagName("h1");

    function cambiarColorH1(titulo) {
        var posicion = Math.floor(Math.random() * coloresH1.length);
        titulo.style.color = coloresH1[posicion];
    }

    var i;

    for (i = 0; i < titulosH1.length; i++) {
        titulosH1[i].onclick = function () {
            cambiarColorH1(this);
        };
    }

    var coloresH5 = ["green", "blue", "red"];
    var titulosH5 = document.getElementsByTagName("h5");

    function cambiarColorH5(titulo) {
        var posicion = Math.floor(Math.random() * coloresH5.length);
        titulo.style.color = coloresH5[posicion];
    }

    for (i = 0; i < titulosH5.length; i++) {
        titulosH5[i].onclick = function () {
            cambiarColorH5(this);
        };
    }
};

