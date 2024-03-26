<template>
    <div class="cart">
        <div class="check">
            <div class="check__icon">
                <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
                <div class="check__icon__tag">0</div>
            </div>
            <div class="check__info">
                总计: <span class="check__info__price">&yen;127</span>
            </div>
            <div class="check__btn">去结算</div>
        </div>
    </div>
</template>

<script>

</script>
<style lang="scss" scoped>
.cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .6rem;
    background-color: #fff;
}
.check{
    display: flex;
    border-top: .01rem solid #333;
    &__icon{
        width: .9rem;
        &__img {
            display: block;
            margin: 0 auto;
            width: .5rem;
            height: .5rem;
        }
        &__tag {
            position: absolute;
            width: .2rem;
            height: .2rem;
            background-color: red;
            border-radius: 50%;
            right: 0;
            top: 0;
            left: .55rem;
            line-height: .2rem;
            text-align: center;
        }

    }
    &__info {
            margin-top: .2rem;
            margin-left: .2rem;
            font-size: .18rem;
            flex: 1;
            &__price {
                font-size: .2rem;
                color: red;
            }
        }
    &__btn {
        width: 1rem;
        background-color: #4fb0f9;
        text-align: center;
        color:#fff;
        line-height: .6rem;
        font-size: .2rem;
    }
}
</style>>
