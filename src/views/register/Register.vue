<template>
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper__img">
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入手机">
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="password" placeholder="请输入密码">
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="password" placeholder="确认密码">
        </div>
        <div class="wrapper__login-button" @click="Register">注册</div>
        <div class="wrapper__login-link" @click="Login">已有账户登录</div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup () {
    const router = useRouter()
    const Register = () => {
      console.log(router)
    }
    const Login = () => {
      router.push('/login')
    }
    return { Register, Login }
  }
}

</script>

<style lang="scss">
.wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img{
        display: block;
        margin: 0 auto 2rem auto;
        transform: translateY(70%);
    }
    &__input {
        font-size: .2rem;
        margin: 0 .4rem .2rem .4rem;
        border-radius: .1rem;
        &__content{
            box-shadow: 0 0.1rem .1rem 0 rgba(105, 105, 105, 0.32);
            border-radius: .1rem;
            line-height: .5rem;
            border: none;
            width: 100%;
            background: none;
            &::placeholder{
                color: #777
            }
        }
    }
    &__login-button{
        background: #0091ff;
        margin: 0 .4rem .2rem .4rem;
        line-height: .48rem;
        text-align: center;
        border-radius: .1rem;
        font-size: .2rem;
        color: #fff;
        box-shadow: 0 0.16rem .1rem 0 rgba(0,145,255,0.32)
    }
    &__login-link{
        text-align: center;
        font-size: .2rem;
        color: #777
    }
}
</style>
