 // Problem 5: The Private Inventory
class Item {
    #discount = 0.1; // private property

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // getter for final price after discount
    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}