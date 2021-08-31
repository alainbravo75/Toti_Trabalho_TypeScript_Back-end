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
//Calcular a área de um triângulo A = (bxh)/2
var Triangulo = /** @class */ (function () {
    function Triangulo(b, h) {
        this.b = b;
        this.h = h;
    }
    Triangulo.prototype.getTriangulo = function () {
        var A = (this.b * this.h) / 2;
        return "A área do triangulo é igual a " + A + "cm²";
    };
    return Triangulo;
}());
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
//calcular a área de um circulo A = pi * r²
var CirculoGeo = /** @class */ (function () {
    function CirculoGeo(pi, r) {
        this.pi = pi;
        this.r = r;
    }
    CirculoGeo.prototype.getCirculo = function () {
        var A = this.pi * (this.r * this.r);
        return "A área do circulo é igual a " + A + "cm";
    };
    return CirculoGeo;
}());
var quadrdrado = new Quadrado(22);
console.log(quadrdrado.getQuadrado());
var rectangulo = new Rectangulo(17, 22);
console.log(rectangulo.getRectangulo());
var triangulo = new Triangulo(12, 8);
console.log(triangulo.getTriangulo());
var geoParalelograma = new GeoParalelograma(15, 20);
console.log(geoParalelograma.getParalelograma());
var geometriaTrapezia = new GeometriaTrapezia(7, 9, 4);
console.log(geometriaTrapezia.getTrapezio());
var circuloGeo = new CirculoGeo(32, 24);
console.log(circuloGeo.getCirculo());
/*
Inicialmente queria usar a classe com herança só que teve um erro persistente na declaração dos
atributos é por isso que eu usei as calsses separadamente.
Em baixo está o código inicial*/
/*
class Geometria {
a: number
b: number
h: number
pi: number
r: number
B: number

constructor(
a: number, b: number, h: number, pi: number, r: number, B: number){
    this.a = a;
    this.b = b;
    this.h = h;
    this.pi = pi;
    this.r = r;
    this.B = B;
}
getQuadrado(){

}

getRectangulo(){

}

getArea(){

}

getParalelograma(){
  
}

getTrapezio(){
   
}

getCirculo(){

}
}
class GeometriaQuadrdrado extends Geometria{
constructor(a: number)
{
    super(a)
}
getQuadrado(): number|string{
    let A = this.a * this.a
    return ("O Quadrado de " + this.a + " é igual a " + A + "cm");
}
}
const geometriaQuadrdrado = new GeometriaQuadrdrado(22)
console.log(geometriaQuadrdrado.getQuadrado());


class RectanguloGeometria extends Geometria{
constructor(a: number, b: number){
        super(a, b)
    }
    getArea(): number|string{
        let A = this.a * this.b
        return "A área d rectagulo é igual a " + A + "cm";
    }
}
const rectanguloGeometria= new RectanguloGeometria(17, 22)
console.log(rectanguloGeometria.getArea());

class TrianguloGeometria extends Geometria{
constructor(b: number, h: number){
    super(b, h);
}
getTriangulo(): number|string{
    let A = (this.b * this.h)/2
    return "A área do triangulo é igual a " + A + "cm²"
}
}
const trianguloGeometria = new TrianguloGeometria(12, 8);
console.log(trianguloGeometria.getTriangulo())

class Paralelograma extends Geometria{
constructor(b: number, h: number){
    super(b, h)
}
getParalelograma(): number|string{
    let A = this.b * this.h
    return "A área do paralelograma é igual a " + A + "cm"
}
}
const paralelograma = new Paralelograma(15, 20);
console.log(paralelograma.getParalelograma());

class Trapezia extends Geometria{
constructor(B: number, b: number, h: number){
    super(B, b, h)
}
getTrapezio(): number|string{
    let A = ((this.B * this.b) / 2) * this.h
    return "A área da Trapézia é igual a " + A + "cm"
}
}
const trapezia = new Trapezia(7, 9, 4);
console.log(trapezia.getTrapezio());

class Circulo extends Geometria{
constructor(pi: number, r: number){
    super(pi, r)
}
getCirculo(): number{
    let A = this.pi * (this.r * this.r)
    return A
}
}
const circulo = new Circulo(32, 24);
console.log(circulo.getCirculo());







//Calcular a área de um quadrado A = a²


class Quadrado {a: number

constructor(a: number){
    this.a = a;
}
getQuadrado(): number|string{
    let A = this.a * this.a
    return ("O Quadrado de " + this.a + " é igual a " + A + "cm");
}
}
const quadrdrado = new Quadrado(22)
console.log(quadrdrado.getQuadrado());


// Calcular a área de um rectángulo A = a x b

class Rectangulo {
a: number
b: number

constructor(a: number, b: number){
        this.a = a;
        this.b = b;
    }
    getRectangulo(): number|string{
        let A = this.a * this.b
        return "A área do rectagulo é igual a " + A + "cm";
    }
}
const rectangulo = new Rectangulo(17, 22);
console.log(rectangulo.getRectangulo());

//Calcular a área de um triângulo A = (bxh)/2

class Triangulo{
b: number
h: number
constructor(b: number, h: number){
    this.b = b;
    this.h = h;
}
getTriangulo(): number|string{
    let A = (this.b * this.h)/2
    return " A área do triangulo é igual a " + A + "cm²"
}
}
const triangulo = new Triangulo(12, 8);
console.log(triangulo.getTriangulo())


// Calcular a área de um paralelograma A = bxh

class GeoParalelograma {
b: number
h: number
constructor(b: number, h: number){
    this.b = b;
    this.h = h;
}
getParalelograma(): number|string{
    let A = this.b * this.h
    return "A área do paralelograma é igual a " + A + "cm"
}
}
const geoParalelograma = new GeoParalelograma(15, 20);
console.log(paralelograma.getParalelograma());




//clacular a área de uma trapézia A = (B+b/2)xh
class GeometriaTrapezia{
B: number
b: number
h: number
constructor(
    B: number, b: number, h: number){
    this.B = B;
    this.b = b;
    this.h = h;
}
getTrapezio(): number|string{
    let A = ((this.B + this.b) / 2) * this.h
    return "A área da Trapézia é igual a " + A + "cm"
}
}
const geometriaTrapezia = new GeometriaTrapezia(7, 9, 4);
console.log(trapezia.getTrapezio());


//calcular a área de um circulo A = pi * r²
class CirculoGeo{
private pi: number
r: number
constructor(pi: number, r: number){
    this.pi = pi;
    this.r = r;
}
getCirculo(): number{
    let A = this.pi * (this.r * this.r)
    return A
}
}
const circuloGeo = new CirculoGeo(32, 24);
console.log(circuloGeo.getCirculo());

*/ 
