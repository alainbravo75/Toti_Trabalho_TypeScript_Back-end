"use strict";
//Exercício de Typescript 
//Estou construindo código que vai calcular as áreas de diferentes figuras geamétricas em Typescrip´usando o POO.
//Calcular a área de um quadrado A = a²
var Quadrado = /** @class */ (function () {
    function Quadrado(a) {
        this.a = a;
    }
    Quadrado.prototype.getQuadrado = function () {
        var A = this.a * this.a;
        return ("O Quadrado de " + this.a + " é igual a " + A + "cm");
    };
    return Quadrado;
}());
var quadrdrado = new Quadrado(22);
console.log(quadrdrado.getQuadrado());
// Calcular a área de um rectángulo A = a x b
var Rectangulo = /** @class */ (function () {
    function Rectangulo(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangulo.prototype.getRectangulo = function () {
        var A = this.a * this.b;
        return "A área do rectagulo é igual a " + A + "cm";
    };
    return Rectangulo;
}());
var rectangulo = new Rectangulo(17, 22);
console.log(rectangulo.getRectangulo());
//Calcular a área de um triângulo A = (bxh)/2
var Triangulo = /** @class */ (function () {
    function Triangulo(b, h) {
        this.b = b;
        this.h = h;
    }
    Triangulo.prototype.getTriangulo = function () {
        var A = (this.b * this.h) / 2;
        return " A área do triangulo é igual a " + A + "cm²";
    };
    return Triangulo;
}());
var triangulo = new Triangulo(12, 8);
console.log(triangulo.getTriangulo());
// Calcular a área de um paralelograma A = bxh
var GeoParalelograma = /** @class */ (function () {
    function GeoParalelograma(b, h) {
        this.b = b;
        this.h = h;
    }
    GeoParalelograma.prototype.getParalelograma = function () {
        var A = this.b * this.h;
        return "A área do paralelograma é igual a " + A + "cm";
    };
    return GeoParalelograma;
}());
var geoParalelograma = new GeoParalelograma(15, 20);
console.log(geoParalelograma.getParalelograma());
//clacular a área de uma trapézia A = (B+b/2)xh
var GeometriaTrapezia = /** @class */ (function () {
    function GeometriaTrapezia(B, b, h) {
        this.B = B;
        this.b = b;
        this.h = h;
    }
    GeometriaTrapezia.prototype.getTrapezio = function () {
        var A = ((this.B + this.b) / 2) * this.h;
        return "A área da Trapézia é igual a " + A + "cm";
    };
    return GeometriaTrapezia;
}());
var geometriaTrapezia = new GeometriaTrapezia(7, 9, 4);
console.log(geometriaTrapezia.getTrapezio());
//calcular a área de um circulo A = pi * r²
var CirculoGeo = /** @class */ (function () {
    function CirculoGeo(pi, r) {
        this.pi = pi;
        this.r = r;
    }
    CirculoGeo.prototype.getCirculo = function () {
        var A = this.pi * (this.r * this.r);
        return A;
    };
    return CirculoGeo;
}());
var circuloGeo = new CirculoGeo(32, 24);
console.log(circuloGeo.getCirculo());
