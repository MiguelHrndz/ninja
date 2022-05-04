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

const ninja1 = new Ninja("Miguel",10)
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()