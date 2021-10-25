// 订单列表
export default {
    namespaced: true, //命名空间
    state:{
        lists:[
            // {
            //     orderId:"123123123123",  //订单id固定不变
            //     address:{  //地址整个对象
            //         },
            //     goodsList:[ //商品整个对象或id
            //         {}
            //     ],
            //     type:""
            // }
        ],
        typeList:['全部订单','待付款','待收货','已完成']
    },
    mutations:{
        add(state,obj){
            state.lists.push(obj);
        },
        // 同步组件中的数据
        edit(state,obj){
            state.lists=null;//清空原本的数据
            state.lists=obj;//新数据替换
        },
        editId(state,obj){//通过id单独修改数据
            
            for(let i = 0;i<obj.length;i++){
                for(let j = 0;j<state.lists.length;j++){
                    //传过来的数据id等于当前vuex数据id时，修改数据
                    if(obj[i].orderId == state.lists[j].orderId && obj[i].type ==6){
                        state.lists.splice(j,1);
                    }else if(obj[i].orderId == state.lists[j].orderId){
                        state.lists[j].type = obj[i].type;

                    }
                }
            }
        }
    },
    acttions:{},
    getters:{},
    modules:{}
}