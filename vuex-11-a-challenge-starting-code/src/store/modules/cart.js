export default {
    namespaced: true,
    state() {
        return {
            items: [],
            total: 0,
            qty: 0 //qty = quantity//cantidad
        }
    },
    mutations: { //Mutaciones sirve para crear metodos para modificar los valores en "state()"
        addProductToCart(state, payload) { //"state" para acceder a las variables, "payload" para pasar los datos que sean necesarios
            const productData = payload; //Recibimos el objeto "producto" desde actions "addToCart" a travez del parametro "payload"
            const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === productData.id
            );
        
            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                productId: productData.id,
                title: productData.title,
                image: productData.image,
                price: productData.price,
                qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
        },
        removeProductFromCart(state, payload) {
            const prodId = payload.productId
            const productInCartIndex = state.items.findIndex(
              (cartItem) => cartItem.productId === prodId
            );
            const prodData = this.cart.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        },
    },
    actions: {
        addToCart(context, payload) {
            const prodId = payload.id;
            const products = context.rootGetters['products/products'] //Obtenemos la informacion de los productos desde el modulo de productos "products", Getter "products"
            const product = products.find(prod => prod.id === prodId);
            context.commit('addProductToCart', product);
        },
        removeFromCart(context, payload) {  
            context.commit('removeProductFromCart', payload);
        }
    },
    getters: {
        cartItems(state) {
            return state.items;
        },
        cartTotal(state) {
            return state.total;
        },
        cartQty(state) {
            return state.qty;
        }
    }

}