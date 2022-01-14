export class Herramientas {
    calcularLletra = numeros => {
        return "TRWAGMYFPDXBNJZSQVHLCKE".substr(numeros%23,1);
      }
}