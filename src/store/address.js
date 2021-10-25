// 我的地址数据模块
export default{
    namespaced:true,//命名空间
    state:{
        lists:[
            {
                name: "张三",
                tel: "18211111111",
                province: "北京市",
                city: "北京市",
                county: "朝阳区",
                addressDetail: "123",
                address: "北京市北京市朝阳区123",
                areaCode: "110105",
                isDefault: true,
                id: 1,
            }
        ],
        defaultId:1, //默认选项id
    },
    mutations:{
        add(state,obj){
            // 去除每一项默认选项
            state.lists.forEach(element => {
                element.isDefault = false
            });

            obj.isDefault =true;//设置默认选项
            obj.id = state.lists.length+1;// 利用id判断
            state.lists.push(obj);//添加地址
            // console.log(obj);
        },
        edit(state,obj){// 修改地址
            let index = state.lists.findIndex(item=>item.id == obj.id);//findIndex返回id值
            state.lists[index]=obj;
        }

    },
    actions:{

    },
    getters:{

    },
}