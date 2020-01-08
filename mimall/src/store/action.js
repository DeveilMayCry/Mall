export default {
    saveUserName: function (context, username) {
        context.commit('saveUserName', username);
    },
    saveCartCount: function (context, cartCount) {
        context.commit('saveCartCount', cartCount);
    }
}