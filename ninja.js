class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(this.nombre)
    }
    showStats(){
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud)
    }
    drinkSake(){
        this.salud = this.salud + 10;
    }
}

class Sensei extends Ninja{
    constructor(){ //Duda acá
        super("Master Splinter",200) // Duda acá
        this.sabiduria = 10;
        this.fuerza = 10;
        this.velocidad = 10;
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
        super.drinkSake()
    }

}

const ninja1 = new Ninja("Miguel",5)
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()

const superSensei = new Sensei(); // Duda acá
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
ninja1.showStats()
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
