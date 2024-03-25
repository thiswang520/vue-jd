<template>
   <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item" v-for="(item,index) in iconsObj" :key="index"
      @click="shopDetails(item)">
        <img :src="item.iconUrl" alt="" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">{{ item.title }}</div>
            <div class="nearby__content__tags" v-for="(tag,index) in item.tags" :key="index">
              <span class="nearby__content__tag">{{ tag.tag }}</span>
          </div>
          <p class="nearby__content__high">VIP.........</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nearby',
  data () {
    return {
      iconsObj: [
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '1',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        },
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '2',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        },
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '3',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        },
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '4',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        },
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '5',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        },
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '6',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        },
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '7',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        },
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '8',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        },
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '9',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        },
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
          id: '10',
          tags: [
            {
              tag: '月售1w+ 月售1w+ 月售1w+'
            }
          ]
        }
      ]
    }
  },
  methods: {
    shopDetails (item) {
      this.$router.push({ name: 'Shop', query: { pid: item.id, lid: item.id } })
    }
  }
}
</script>
<style lang="scss">
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.nearby{
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
