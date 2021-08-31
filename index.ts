
//Exercício de Typescript 
//Estou construindo código que vai calcular as áreas de diferentes figuras geamétricas em Typescrip´usando o POO.

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
        const quadrdrado = new Quadrado(22);
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
        console.log(triangulo.getTriangulo());


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
        console.log(geoParalelograma.getParalelograma());




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
        console.log(geometriaTrapezia.getTrapezio());


        //calcular a área de um circulo A = pi * r²
        class CirculoGeo{
            pi: number
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

