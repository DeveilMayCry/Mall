export default {
    saveUserName: function (context, username) {
        context.commit('saveUserName', username);
    }
}