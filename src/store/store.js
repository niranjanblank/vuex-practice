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
    }
})