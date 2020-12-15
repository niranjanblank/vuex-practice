import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        // Data that can be used by other components
        products: [
            {name:'Apple', price:100},
            {name:'Tomato', price:50},
            {name:'Banana', price:80},
            {name:'Onion', price:200}
          ]
    },
    getters:{
        saleProducts: state => {
                var saleProducts = state.products.map(product=>{
                    return {
                        name:'**'+product.name+'**',
                        price:product.price/2
                    }
                })
                return saleProducts
        }
    }
})