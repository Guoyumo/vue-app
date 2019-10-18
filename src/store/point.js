//积分系统状态管理
// created by gym 2019/10/17
import{testApi} from '../api/point';
const state = {
    test:"积分模块数据"
};
const getters = {

};
const mutations = {

};
const actions = {

    POINT_ACTION: ({commit},payload = {}) =>{

    // axios.post('/teacherHomeWork/getHomeworkQuestion',{homeworkId:134}).then((response)=>{
    //     console.log(response);
    // })
        testApi({test:1}).then((res)=>{
            console.log(res);
        });
        console.log('POINT_ACTION')
    }
};

const point = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default point;