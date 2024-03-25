<template>
   <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe7f1;</span>
      北京理工大学...........北京理工大学...........北京理工大学...........北京理工大学...........
      <span class="iconfont position__notice">&#xe7c4;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe666;</span>
      <input type="text" value="山姆商店会员优惠商品" class="search__find">
    </div>
    <div class="banner">
      <img src="http://www.dell-lee.com/imgs/vue3/banner.jpg" class="banner__img">
    </div>
    <div class="icons">
      <div class="icons__item" v-for="(icon,index) in iconsObj" :key="index">
        <img :src="icon.iconUrl" alt="" class="icons__item__img">
        <p class="incos__item__desc">{{ icon.iconName }}</p>
      </div>
    </div>
    <div class="gap"></div>
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import Nearby from '../home/Nearby.vue'
import Docker from '../home/Docker.vue'
export default {
  name: 'Home',
  components: { Nearby, Docker },
  data () {
    return {
      iconsObj: [
        {
          iconUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          iconName: '超市便利',
          title: '沃尔玛',
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
    refreshPage () {
      window.location.reload()
    }
  },
  mounted: function () {
    if (location.href.indexOf('#reloaded') === -1) {
      location.href = location.href + '#reloaded'
      location.reload()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper{
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .89rem;
  right: 0;
  padding: 0 .18rem;
}
.search{
  line-height: .32rem;
  text-align: center;
  .iconfont{
    position: absolute;
    font-size: .25rem;
    padding: .1rem .12rem 0 .16rem;
  }
  &__find{
    font-size: .14rem;
    color: #b7b7b7;
    background: #f5f5f5;
    border-radius: .10rem;
    width: 5rem;
    height: .4rem;
    text-align: center;
  }
}
.banner{
  height: 0;
  text-align: center;
  overflow: hidden;
  margin-top: .1rem;
  padding-bottom: 25%;
  &__img{
    width: 5.1rem;
  }
}
.icons{
  display: flex;
  flex-wrap: wrap;
  &__item{
    width: 20%;
    &__img{
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    .incos__item__desc{
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.position{
  // text-align: center;
  color: $content-fontcolor;
  position: relative;
  font-size: .2rem;
  padding: .16rem .4rem .16rem 0;
  line-height: .4rem;
  @include ellipsis;
  &__icon{
    position: relative;
    top: .01rem;
    font-size: .2rem;
    margin-left: .2rem;
  }
  &__notice{
    position: absolute;
    font-size: .2rem;
    right: 0;
    top: .17rem;
    margin-right: .2rem;
  }
}
.gap{
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
  position: relative;
}

</style>
