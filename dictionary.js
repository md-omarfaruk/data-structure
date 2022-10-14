class Menu {
    constructor(){
        this.foodMenu = {}
    }
    addFood(key, value){
        this.foodMenu[key] = value
    }
    getPrice(key){
        return this.foodMenu[key]
    }
}

const foods = new Menu();
    foods.addFood('kacchi', 999);
    foods.addFood('biriyani', 555);
    foods.addFood('kabab', 333);
    foods.addFood('borhani', 111);
    foods.addFood('dim', 33);

console.log(foods.foodMenu);

const price = foods.getPrice('kacchi');

console.log(price);

