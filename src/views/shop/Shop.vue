<template>
    <div class="wrapper">
        <div class="search">
            <div class="search__back iconfont" @click="backClick">&#xe6db;</div>
            <div class="search__content">
                <span class="search__content__icon iconfont"> &#xe666;</span>
                <input class="search__content__input" placeholder="请输入商品名称"/>
            </div>
        </div>
        <ShopInfo :id=" this.$route.query.pid" />
        <Content :id=" this.$route.query.lid"/>
    </div>
 </template>
<script>
import ShopInfo from '../../components/ShopInfo.vue'
import Content from '../../views/shop/Content.vue'
export default {
  components: { ShopInfo, Content },
  props: ['id'],
  name: 'Shop',
  methods: {
    backClick () {
      this.$router.back()
    }
  }
}
</script>
 <style lang="scss" scoped>
 @import '../../style/viriables.scss';
 @import '../../style/mixins.scss';
.wrapper {
    padding:  0 .18rem;
}
.search {
    display: flex;
    margin: .3rem 0 .2rem 0;
    &__back {
        height: .4rem;
        width: .3rem;
        margin-top: .2rem;
        font-size: .3rem;
    }
    &__content {
        display: flex;
        flex: 1;
        line-height: .4rem;
        border-radius: .2rem;
        &__icon {
            margin: .2rem  0  0 .3rem;
            width: .3rem;
            height: .4rem;
        }
        &__input {
            margin: .1rem 0;
            width: 100%;
            height: .5rem;
            border: none;
            display: block;
            outline: none;
            font-size: .2rem;
            padding-right: .2rem;
            background: #f5f5f5;
            border-radius: .2rem;
            &::placeholder {
                color: #333;
                font-size: .2rem;
            }
        }
    }
}
 </style>
