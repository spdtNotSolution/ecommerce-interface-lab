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


const API_BASE_URL = 'http://localhost:8080/api/v1';

async function fetchProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`Products not found - 404`);
            } else if (response.status === 500) {
                throw new Error(`Server error - 500`);
            }
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const products = await response.json();
        console.log(`Products fetched:, products`);
        return products;
        
    } catch (error) {
        console.error(`Fetch API Error:`, error.message);
        const main = document.querySelector(`main`);
        if (main) {
            main.innerHTML = `<h2>Error: ${error.message}</h2>`;
        }
        return [];
    }
}


fetchProducts();
