export default {
    namespaced: true, // Esto habilita que el modulo tenga un nombre por cual llamarse en index.js "products"
    state() {
        return {
            products: [ //Este arreglo de productos esta puesto en "state()" pero es estatico y no se modifica,
                {       //por lo tanto no es el mejor lugar para ponerlo, pero esta vez lo ahcemos por la practica
                  id: 'p1',
                  image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                  title: 'Book Collection',
                  description:
                    'A collection of must-read books. All-time classics included!',
                  price: 99.99,
                },
                {
                  id: 'p2',
                  image:
                    'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
                  title: 'Mountain Tent',
                  description: 'A tent for the ambitious outdoor tourist.',
                  price: 129.99,
                },
                {
                  id: 'p3',
                  image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                  title: 'Food Box',
                  description:
                    'May be partially expired when it arrives but at least it is cheap!',
                  price: 6.99,
                },
            ],
        }
    },
    getters: {
        products(state) { //siempre se debe acceder al parametro "state" para poder modificar los valores
            return state.products;
        }
    }
};