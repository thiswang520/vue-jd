<template>
    <div class="shop" >
       <div class="shop__item" v-for="(itemDetails,index) in iconsObj" :key="index"
        >
         <img :src="itemDetails.iconUrl" alt="" class="nearby__item__img">
         <div class="shop__content">
           <div class="shop__content__title">{{ itemDetails.title }}</div>
             <div class="shop__content__tags" v-for="(tag,index) in itemDetails.tags" :key="index">
               <span class="shop__content__tag">{{ tag.tag }}</span>
           </div>
           <p class="shop__content__high">VIP尊享888.........</p>
       </div>
     </div>
   </div>
 </template>
<script>
export default {
  name: 'ShopiInfo',
  props: ['id'],
  data () {
    return {
      iconsObj: [
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          pid: '1',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        }
      ]
    }
  }
}
</script>
 <style lang="scss" scoped>
 @import '../style/viriables.scss';
 @import '../style/mixins.scss';
 .shop{
   margin-left: .2rem;
   &__title{
     margin: .16rem 0 .04rem 0;
     font-size: .3rem;
     font-weight: normal;
     color: $content-fontcolor;
   }
   &__item {
     display: flex;
     padding: .2rem 0;
     &__img{
       width: .7rem;
       height: .75rem;
     }
   }
   &__content{
       border-bottom: 2px solid $content-bgColor;
       flex: 1;
       margin: 0 .4rem;
       &__title {
         line-height: .22rem;
         font-size: .2rem;
         color: $content-fontcolor;
       }
       &__tags{
         margin-top: .1rem;
         line-height: .2rem;
         font-size: .13rem;
       }
       &__tag{
         margin-right: .2rem;
       }
       &__high{
         color: red;
       }
     }
 }
 </style>
