/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */
interface Hamburguer{
    prepare(): void;
}
class ChickenBurger implements Hamburguer{
    prepare(): void {
        console.log("Preparando hamburguesa de pollo");
    }
}
class BeefBurger implements Hamburguer{
    prepare(): void {
        console.log("Preparando hamburguesa de res");
    }
}
class BeanBurger implements Hamburguer{
    prepare(): void {
        console.log("Preparando hamburguesa de frijoles");
    }
}

abstract class Restaurant{
    protected abstract createBurger(): Hamburguer;
    orderBurger(): void{
        const burger = this.createBurger();
        burger.prepare();
    }
}
class ChickenRestaurant extends Restaurant{
    override createBurger(): Hamburguer {
        return new ChickenBurger();
    }
}
class BeefRestaurant extends Restaurant{
    override createBurger(): Hamburguer {
        return new BeefBurger();
    }
}
class BeanRestaurant extends Restaurant{
    override createBurger(): Hamburguer {
        return new BeanBurger();
    }
}

function main(){

   let restaurant: Restaurant;
   const burguerType = prompt("¿Qué tipo de hamburguesa deseas? (pollo/res/frijoles)");
   switch(burguerType){
       case "pollo":
           restaurant = new ChickenRestaurant();
           break;
       case "res":
           restaurant = new BeefRestaurant();
           break;
       case "frijoles":
           restaurant = new BeanRestaurant();
           break;
       default:
           throw new Error("Tipo de hamburguesa no válido");
   }
   restaurant.orderBurger();
}

main();

