<template>
  <div class="docker">
    <span class="docker__item "   v-for="(item,index) in dockerList" :key="index">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title" :class="{'active':item.active}"> {{ item.text }}</div>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe858;', text: '首页', active: true },
      { icon: '&#xe6af;', text: '购物车', active: true },
      { icon: '&#xe713;', text: '订单', active: false },
      { icon: '&#xe78b;', text: '我的', active: false }
    ]

    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.active{
  color: #1fa4fc;
}
.docker{
  display: flex;
  padding: 0 ;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: .01rem  $content-fontcolor;
  &__active{
    color: #1fa4fc;
  }
  &__item{
    flex: 1;
    text-align: center;
    font-size: .2rem;
    color: black;
  .iconfont{
    font-size: .4rem;
      margin: .1rem 0 .1rem 0;
  }
  &__title{
    font-size: .2rem;
      transform: scale(0.7 ,0.7);
      transform-origin: center top;
  }
  }

}
</style>
