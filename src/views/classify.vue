<template>
    <div>
        <!-- 分类 -->
        <!-- <div class="classify-box"> -->
            <van-sticky>
                <van-nav-bar title="分类"  @click-left="onClickLeft"  left-arrow  z-index="55">
                    <van-icon name="search" slot="right" class="searchify"/>
                </van-nav-bar>
            </van-sticky>
        <!-- </div> -->
        
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(leftson,index) in left" :key="index" 
                    @click="selectItem(index,$event)"
                    :class="{active:index==activeIndex}"
                    >
                        <span class="left-item">{{leftson}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <!-- 大模块 -->
                    <li v-for="(bigitem,index) in right" :key="index" class="right-bigItem">
                        <van-image width="100%" height="50%" fit="contain"
                          :src="bigitem.src"
                          v-if="bigitem.flag"
                        />
                        <div v-for="(smitem,index1) in bigitem.piece" :key="index1" class="right-small">
                            <van-divider>{{smitem.name}}</van-divider>
                            <van-row>
                              <van-col span="8" v-for="(ssitem,index2) in smitem.data" :key="index2" align="center">
                                    <router-link to="/details" tag="a">
                                        <van-image width="50%" height="50%" fit="cover" :src="ssitem.path"/>
                                        <p class="van-ellipsis" >{{ssitem.pathcontent}}</p>
                                    </router-link>
                              </van-col>
                              <!-- 底图片 -->
                                    <!-- <van-image width="100%" height="100%" fit="cover" :src="smitem.track" v-if="smitem.bool"/> -->
                            </van-row>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--  -->
        <div class="top"></div>
        <!--  -->
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
    export default {
        data(){
            return {
                left:[
                  '新品','众筹','小米手机','Redmi','黑鲨','电视','大家电',
                  '电脑办公','小爱智能','路由器','生活电器','厨房电器',
                  '智能穿戴','智能家居','车载出行' ,'个护健康','数码配件',
                  '日用百货','有品精选','服务','米粉卡','零售店',
                ],
                right:[
                    // 新品
                        {
                        flag:true,
                        src: require("../assets/images/122.png"),
                        piece:[
                            // 
                                {
                                name:"手机",
                                // bool:true,
                                // track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fx2.png"),
                                        pathcontent:"新品黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx3.png"),
                                        pathcontent:"黑鲨手机3Pro"
                                    },
                                    {
                                        path: require("../assets/images/fx4.png"),
                                        pathcontent:"小米10Pro"
                                    },
                                    {
                                        path: require("../assets/images/fx5.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx6.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    ]
                                },
                                {
                                name:"智能",
                                data:[
                                    {
                                        path: require("../assets/images/fx16.png"),
                                        pathcontent:"新品手表智能"
                                    },
                                    {
                                        path: require("../assets/images/fx16.png"),
                                        pathcontent:"黑鲨手机322222"
                                    },
                                    {
                                        path: require("../assets/images/fx16.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx16.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx16.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx16.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    ]
                                },
                            
                            ],
                        },
                        // 众筹
                        {
                        flag:true,
                        src: require("../assets/images/fz1.png"),
                        piece:[
                                {
                                name:"众筹好物",
                                data:[
                                    {
                                        path: require("../assets/images/fz2.png"),
                                        pathcontent:"众筹智能门铃"
                                    },
                                    {
                                        path: require("../assets/images/fx3.png"),
                                        pathcontent:"黑鲨手机322222"
                                    },
                                    {
                                        path: require("../assets/images/fx4.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx5.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx6.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx7.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx8.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx9.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx10.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx5.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx6.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx7.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx8.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx9.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fx10.png"),
                                        pathcontent:"黑鲨手机3"
                                    },

                                    ]
                                },
                            ],
                        },
                        // 小米手机
                        {
                        flag:true,
                        src: require("../assets/images/fx1.jpg"),
                        piece:[
                                {
                                name:"小米数字系列",
                                data:[
                                    {
                                        path: require("../assets/images/fphone2.png"),
                                        pathcontent:"小米手机10Pro"
                                    },
                                    {
                                        path: require("../assets/images/fphone3.png"),
                                        pathcontent:"小米10小米"
                                    },
                                    {
                                        path: require("../assets/images/fphone4.png"),
                                        pathcontent:"9Pro 5G"
                                    },
                                    {
                                        path: require("../assets/images/fphone4.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fphone4.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    ]
                                },
                                {
                                name:"小米CC系列",
                                data:[
                                    {
                                        path: require("../assets/images/fphonec2.png"),
                                        pathcontent:"小米CC9Pro"
                                    },
                                    {
                                        path: require("../assets/images/fphonec3.png"),
                                        pathcontent:"小米CC9"
                                    },
                                    {
                                        path: require("../assets/images/fphonec4.png"),
                                        pathcontent:"小米CC9"
                                    },
                                    {
                                        path: require("../assets/images/fphonec5.png"),
                                        pathcontent:"小米CC9"
                                    },
                                    {
                                        path: require("../assets/images/fphonec5.png"),
                                        pathcontent:"小米CC9"
                                    },
                                    ]
                                },
                            
                            ],
                        },
                        // Redmi
                        {
                        flag:false,
                        piece:[
                                {
                                name:"Redmi红米数字系列",
                                data:[
                                    {
                                        path: require("../assets/images/fredmi1.png"),
                                        pathcontent:"Redmi 8"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"Redmi 8A"
                                    },
                                    {
                                        path: require("../assets/images/fredmi3.png"),
                                        pathcontent:"Redmi 7A"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"Redmi 7A"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"Redmi 7A"
                                    },
                                    ]
                                },
                                {
                                name:"Redmi红米 Note系列",
                                bool:false,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    
                                    {
                                        path: require("../assets/images/fredmi1.png"),
                                        pathcontent:"Redmi 8"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"Redmi 8A"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"Redmi 7A"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fredmi6.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    ]
                                },
                            
                            ],
                        },
                        // 黑鲨
                        {
                        flag:false,
                        piece:[
                                {
                                name:"黑鲨游戏手机",
                                data:[
                                    {
                                        path: require("../assets/images/fredmi1.png"),
                                        pathcontent:"黑鲨手机3"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"黑鲨手机3Pro"
                                    },
                                    {
                                        path: require("../assets/images/fredmi3.png"),
                                        pathcontent:"黑鲨游戏手机"
                                    },
                                    ]
                                },
                                {
                                name:"黑鲨手机配件",
                                data:[
                                    {
                                        path: require("../assets/images/fredmi1.png"),
                                        pathcontent:"冰封散热背夹"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"冰封散热背夹"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"冰封散热背夹"
                                    },
                                    {
                                        path: require("../assets/images/fredmi2.png"),
                                        pathcontent:"冰封散热背夹"
                                    },
                                    {
                                        path: require("../assets/images/fredmi6.png"),
                                        pathcontent:"冰封散热背夹"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 电视
                        {
                        flag:false,
                        piece:[
                                {
                                name:"电视",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/f3.png"),
                                        pathcontent:"32-40英寸"
                                    },
                                    {
                                        path: require("../assets/images/f3.png"),
                                        pathcontent:"32-40英寸"
                                    },
                                    {
                                        path: require("../assets/images/f3.png"),
                                        pathcontent:"32-40英寸"
                                    },
                                    {
                                        path: require("../assets/images/f3.png"),
                                        pathcontent:"32-40英寸"
                                    },
                                    {
                                        path: require("../assets/images/f3.png"),
                                        pathcontent:"32-40英寸"
                                    },
                                    ]
                                },
                                {
                                name:"盒子",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/ftv8.png"),
                                        pathcontent:"盒子4"
                                    },
                                    {
                                        path: require("../assets/images/ftv9.png"),
                                        pathcontent:"盒子4c"
                                    },
                                    {
                                        path: require("../assets/images/ftv9.png"),
                                        pathcontent:"盒子4"
                                    },
                                    ]
                                }
                            ],
                        },
                        // 大家电
                        {
                        flag:false,
                        piece:[
                                {
                                name:"大家电",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 电脑办公
                        {
                        flag:false,
                        piece:[
                                {
                                name:"电脑办公",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 小爱智能
                        {
                        flag:false,
                        piece:[
                                {
                                name:"小爱智能",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 路由器
                        {
                        flag:false,
                        piece:[
                                {
                                name:"路由器",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 生活电器
                        {
                        flag:false,
                        piece:[
                                {
                                name:"生活电器",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 厨房电器
                        {
                        flag:false,
                        piece:[
                                {
                                name:"厨房电器",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 智能穿戴
                        {
                        flag:false,
                        piece:[
                                {
                                name:"智能穿戴",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 智能家居
                        {
                        flag:false,
                        piece:[
                                {
                                name:"智能家居",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 车载出行
                        {
                        flag:false,
                        piece:[
                                {
                                name:"车载出行",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 个护健康
                        {
                        flag:false,
                        piece:[
                                {
                                name:"个护健康",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 数码配件
                        {
                        flag:false,
                        piece:[
                                {
                                name:"数码配件",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 日用百货
                        {
                        flag:false,
                        piece:[
                                {
                                name:"日用百货",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 有品精选
                        {
                        flag:false,
                        piece:[
                                {
                                name:"有品精选",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 服务
                        {
                        flag:false,
                        piece:[
                                {
                                name:"服务",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 米粉卡
                        {
                        flag:false,
                        piece:[
                                {
                                name:"米粉卡",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                        // 零售店
                        {
                        flag:false,
                        piece:[
                                {
                                name:"零售店",
                                bool:true,
                                track:require("../assets/images/kitchen7.webp"),
                                data:[
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"冰箱"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"壁挂空调"
                                    },
                                    {
                                        path: require("../assets/images/fx13.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/fj1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    {
                                        path: require("../assets/images/f1.png"),
                                        pathcontent:"立式空调"
                                    },
                                    ]
                                },
                            ],
                        },
                ],
                scrollY:0,//得到right滚动的高度
                listHeight:[],
            }
        },
        methods:{
            onClickLeft(){//点击,返回时底部导航并未跟随改变
                this.$router.go(-1)
            },
            _initScroll(){
                this.lefts = new BScroll(this.$refs.left,{
                    click:true,
                    probeType: 3,
                });
                this.rights = new BScroll(this.$refs.right,{
                    // click:true,//不加点击事件，会默认全部不可点击
                    probeType: 3,
                });
                // right这个对象监听滚动事件，
                this.rights.on('scroll',(pos)=>{
                    // console.log(pos);
                    this.scrollY = Math.abs(Math.round(pos.y))
                })
            },
            _getHeight(){
                let rightItems =this.$refs.right.getElementsByClassName("right-bigItem");
                let height =0;//默认高度
                this.listHeight.push(height);
                
                for(let i=0;i<rightItems.length;i++){
                    let item = rightItems[i];
                    height += item.clientHeight;//对象高度
                    this.listHeight.push(height);
                    // console.log(this.listHeight);
                    
                }

            },
            // 左侧点击效果
            selectItem(index,event){
                // 浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
                if(!event){
                    return;
                }else{
                    // 右边联动效果
                    let rightItem = this.$refs.right.getElementsByClassName("right-bigItem");
                    let el = rightItem[index];
                    // scrollToElement()//滚动到指定的目标元素
                    this.rights.scrollToElement(el);

                    // 左边联动
                    let leftItem = this.$refs.left.getElementsByTagName("li");
                    let elli = leftItem[index];
                    this.lefts.scrollToElement(elli);
                }
            }
        },
         // 生命周期函数
        mounted(){
            // $nextTick() 让所有DOM执行完后
            this.$nextTick(()=>{
                this._initScroll();//调用初始化联动效果
                this._getHeight();//获取右边每一项高度

                // 跳转效果
                if("id" in this.$route.query){
                    // 联动效果
                    let rightItem = this.$refs.right.getElementsByClassName("right-bigItem");
                    let el = rightItem[this.$route.query.id];
                    // scrollToElement()//滚动到指定的目标元素
                    this.rights.scrollToElement(el);
                }
            })
        },
        computed:{
            activeIndex(){
                for(let i=0;i<this.listHeight.length;i++){
                    let height = this.listHeight[i];//当前高度
                    let height2 = this.listHeight[i+1];//下一个高度

                    if(!height2 || this.scrollY>=height && this.scrollY<height2){
                        let leftItem =this.$refs.left.getElementsByTagName('li');
                        let elli = leftItem[i];
                        this.lefts.scrollToElement(elli);

                        return i;
                    }

                }
                // 如果this.listHeight没有值，返回0
                return 0;
            }
        }
        
    }
</script>

<style lang="scss" scoped>

.top{
    height: 50px;
}
.van-nav-bar{
    // background-image: linear-gradient(to top,yellow 1%,rgb(199, 248, 126) 5%,#fff 40%);
}
.searchify{
    font-size: 16px;
}
 .van-nav-bar .van-icon[data-v-305c369e] {
   color: rgb(136, 135, 135);
    font-size: 20px;
}
.van-nav-bar__title {
    color: rgb(51, 50, 50);
    font-weight: 500;
    font-size: 18px;
}
// content
.content{
    display: flex;
    position: absolute;
    top: 50px;
    bottom: 50px;
    // background: pink;
    width: 100%;
    overflow: hidden;
}
// 左边
.left{
    flex: 0 0 20%;
    background-color: #fff;
    box-sizing: border-box;
    li{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #777676;
        .left-item{
            display: block;
            height: 100%;
            width: 100%;
            text-align: center;
            font-size: 16px;
        }
        &.active{
            color: #000;
            font-weight: 600;
            border-left: 5px solid orange;
        }
        
    }
}
// 右边
.right{
    flex:1;
    background: rgb(255, 255, 255);
    padding: 0 20px;
    p{
        color: #242323;
        font-size: 12px;
        height: 16px;
        padding: 0 5px 10px;
        text-align: center;
        font-weight: 300;

    }
    .van-col{
        
    }

}
// // 右边标题
.van-divider::after, .van-divider::before {
    height: 2px;
    border-color: rgb(250, 250, 250);
    // border:1px solid #000;
}
.van-divider {
    padding: 40px 0px;

    color: #000;
    font-size: 20px;
    line-height: 30px;
}
</style>