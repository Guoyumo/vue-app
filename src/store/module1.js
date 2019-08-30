const state = {
    isStore:true,
    number:1,
    orderList: [{ orderno: '1111' }]
};
const getters = {
    dubbleNumber: state =>{
        return 2 * state.number;
    }
};
const mutations = {
    changeNumber: (state, payload)=>{
        console.log(456)
        state.number = state.number + payload.increase;
    }
};
const actions = {
    increment: ({commit},payload) =>{
        commit('changeNumber',payload);
    }
};

const module = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default module;