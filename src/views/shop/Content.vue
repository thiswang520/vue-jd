<template>
    <div class="content">
        <div class="category">
            <div :class="{'category__item' : true, 'category__item--active': item.currentTag}" v-for="(item,id) in categoryList"
            :key="id"
            @click="() => handlerClick(item)"
            >{{ item.name }}</div>
        </div>
        <div class="product">
            <div class="product__item" v-for="(item,index) in contentList" :key="index">
                <img src="http://www.dell-lee.com/imgs/vue3/超市.png"  class="product__item__img">
                <div class="product__item__detail">
                    <h4 class="product__item__title">{{ item.name }}</h4>
                    <p class="product__item__sales">{{ item.stales }}</p>
                    <p class="product__item__price">
                        <span class="product__item__yen">&yen;{{ item.price }}</span>
                        <span class="product__item__origin">&yen;{{ item.old }}</span>
                    </p>
                </div>
                <div class="product__number">
                    <span class="product__number__minus">-</span>
                    <span>0</span>
                    <span @click="addShop(item)" class="product__number__add">+</span>
                </div>
            </div>
        </div>
    </div>
    <Cart />
 </template>
<script>
import { reactive } from 'vue'

import Cart from '../shop/Cart.vue'

export default {
  name: 'Content',
  components: { Cart },
  props: ['id'],
  data () {
    return {
      categoryList: reactive([{
        name: '商品',
        tag: 'all',
        currentTag: reactive(true)
      },
      {
        name: '秒杀',
        tag: 'kill',
        currentTag: reactive(false)
      },
      {
        name: '水果',
        tag: 'apple',
        currentTag: reactive(false)
      }
      ]),
      contentList: [
        {
          pid: '1',
          lid: '1',
          name: '番茄',
          stales: '月售1万',
          price: '33',
          old: '66',
          count: 2
        },
        {
          pid: '2',
          lid: '2',
          name: '番茄',
          stales: '月售1万',
          price: '33',
          old: '66',
          count: 2
        }
      ]
    }
  },
  methods: {
    handlerClick (item) {
      console.log(this.$route.params)
      this.categoryList.forEach(elem => {
        elem.currentTag = false
      })
      item.currentTag = true
    },
    addShop (item) {
      // 提交数据到vuex
      console.log(this.$store.commit('addShop', item))
      // 获取vuex里面的数据
      console.log(this.$store.state.cartList)
    }
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
    width: 1rem;
    &__item {
        line-height: .4rem;
        text-align: center;
        margin: .2rem 0;
        font-size: .2rem;
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
