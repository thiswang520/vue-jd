<template>
    <div class="content">
        <div class="category" >
            <div class="category__item category__item--active">商品秒杀</div>
            <div class="category__item">商品秒杀</div>
            <div class="category__item">商品秒杀</div>
            <div class="category__item">商品秒杀</div>
            <div class="category__item">商品秒杀</div>
            <div class="category__item">商品秒杀</div>
        </div>
        <div class="product">
            <div class="product__item">
                <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="product__item__img">
                <div class="product__item__detail">
                    <h4 class="product__item__title">番茄</h4>
                    <p class="product__item__sales">月售</p>
                    <p class="product__item__price">
                        <span class="product__item__yen">&yen;</span>33.6
                        <span class="product__item__origin">&yen;66.6</span>
                    </p>
                </div>
                <div class="product__number">
                    <span class="product__number__minus">-</span>
                    <span>0</span>
                    <span class="product__number__add">+</span>
                </div>
            </div>
        </div>
    </div>
 </template>
<script>
export default {
  name: 'Content',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
 <style lang="scss" scoped>
.content{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 2.5rem;
    bottom: .5rem;
}
.category {
    overflow-y: scroll;
    background: #f5f5f5;
    height: 100%;
    width: .8rem;
    &__item {
        line-height: .4rem;
        text-align: center;
        &--active {
            background: #fff;
        }
    }
}
.product {
    flex: 1;
    overflow-y: scroll;
    &__item{
        position: relative;
        display: flex;
        padding: .2rem 0;
        margin: 0 .7rem;
        border-bottom: .02rem solid #f1f1f1;
        &__img{
            width: .8rem;
            height: .8rem;
            margin-right: .2rem;
        }
        &__detail{
            overflow: hidden;
        }
        &__title{
            margin: 0;
            line-height: .2rem;
            font-size: .2rem;
            color:#333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        &__sales{
            line-height: .2rem;
            font-size: .15rem;
            color: #333;
        }
        &__price {
            margin: 0;
            line-height: .1rem;
            font-size: .17rem;
            color:#e93b3b;
        }
        &__yen {
            font-size: .15rem;
        }
        &__origin{
            margin-left: .12rem;
            font-size: .14rem;
            text-decoration: line-through;
            color: #999
        }

    }
    &__number{
        position: absolute;
        right: .2rem;
        bottom: .2rem;
        &__minus, &__add{
            display: inline-block;
            width: .3rem;
            height: .3rem;
            font-size: .3rem;
            border-radius: 50%;
            line-height: .2rem;
            text-align: center;
        }
        &__minus{
            border: .001rem solid #666;
            margin-right: .1rem;
        }
        &__add{
            background: #0091ff;
            margin-left: .1rem;
            color:#fff
        }
    }

}
 </style>
