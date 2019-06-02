export const newPrice = (context) => {
    context.commit('changePrice');
};

export const buyStocks = (context, payload) => {
    context.commit('buyStocks', payload);
};

export const sellStocks = (context, payload) => {
    context.commit('sellStocks', payload);
};