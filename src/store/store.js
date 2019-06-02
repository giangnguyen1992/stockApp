import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions/action';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        allStocks: {
            'BMW': {
                price: 100,
                quantity: 0,
                id: 1
            },
            'Google': {
                price: 300,
                quantity: 0,
                id: 2
            },
            'Apple': {
                price: 400,
                quantity: 0,
                id: 3
            },
            'Twitter': {
                price: 10,
                quantity: 0,
                id: 4
            }
        }
    },
    getters: {

    },
    mutations: {
        changePrice(state) {
            for(let key in state.allStocks) {
                state.allStocks[key].price = Math.round(state.allStocks[key].price * (1 + Math.random() - 0.5));
            };
        },
        buyStocks(state, [index, value]) {
            state.allStocks[index].quantity = state.allStocks[index].quantity + parseInt(value);

            if(state.funds - state.allStocks[index].price * parseInt(value) < 0) {
                alert('Zu wenig Geld!!');
                return;
            } else {
                state.funds -= state.allStocks[index].price * parseInt(value);
            };
        },
        sellStocks(state, [index, value]) {
            if(state.allStocks[index].quantity - parseInt(value) < 0) {
                alert('Nicht genug Aktien!');
                return;
            } else {
                state.allStocks[index].quantity -= parseInt(value);
                state.funds += state.allStocks[index].price * parseInt(value);
            }
        }
    },
    actions
})