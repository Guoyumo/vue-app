//积分系统api 集合
//created by gym 2019/10/18

import axios from '@/config/httpConfig'

export const testApi = (data={})=>
    axios.post('/teacherHomeWork/getHomeworkQuestion',data);