import axios from 'axios';
axios.defaults.baseURL = '/dev';
const state = {
    number:5
};
const getters = {
    dubbleNumber: state =>{
        return 2 * state.number;
    }
};
const mutations = {
    changeNumber: (state, payload)=>{
        console.log(123)
        state.number = state.number + payload.increase;
    }
};
const actions = {
    increment: ({commit},payload) =>{
        commit('changeNumber',payload);

        axios.post('/teacherHomeWork/getHomeworkQuestion',{homeworkId:134}).then((response)=>{
            console.log(response);
        })
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