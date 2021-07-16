<template>
    <div class="qmenu">
         <div class="txts">
              <div v-for="(item,index) in list" :key="index">
                   {{item}}
              </div>
             <div class="block"></div>
             <div v-for="(item,index) in list2" :key="index">
                 {{item}}
             </div>
         </div>
        <div class="pics">
             <div  class="item" v-for="(item,index) in list3" :key="index">
                  <p class="t1">{{item.t1}}</p>
                 <div class="pic">
                     <img :src="item.img" alt="">
                 </div>
                 <p class="t1">{{item.t2}}</p>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "qmenu",
        data(){
            return{
                list:[
                    "ABOUT",
                    "Overview\n",
                    "What is Bitflix?\n",
                    "Ways to Collect: Sets\n",
                    "FAQ\n"
                ],
                list2:[
                    "BLOG\n",
                    "Latest Announcements\n",
                    "Developer Diaries\n",
                    "Getting Started Guides\n",
                    "Latest Drop Details"
                ],
                list3:[
                    {
                        img:require('@/assets/images/qm1.png'),
                        t1:'LEARN MORE',
                        t2:'How to play Bitflix'
                    },
                    {
                        img:require('@/assets/images/qm2.png'),
                        t1:'LATEST POST',
                        t2:'Developer Diary'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
 .qmenu{
     width:100%;
     background-color: #143360;
     padding: 10px 0;
     .txts{
         width:90%;
         margin: 20px auto;
         div{
             color:white;
             font-size: 17px;
             margin-bottom: 10px;
         }
         .block{
             width:100%;
             height:20px;
         }
     }
     .pics{
         width:90%;
         margin: 20px auto;
         display: flex;
         justify-content: space-between;
         .item{
             width:48%;
             .t1{
                 color:#C9CACA;
                 font-size: 14px;
                 font-weight: bold;
                 margin: 10px 0;
             }
             img{
                 width:100%;
                 display: block;
                 object-fit: contain;
             }
         }
     }
 }
</style>