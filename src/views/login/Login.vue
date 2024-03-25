<template>
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper__img">
        <div class="wrapper__input">
            <input class="wrapper__input__content" v-model="username" placeholder="请输入账户">
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" type="password" v-model="password" placeholder="请输入密码">
        </div>
        <div class="wrapper__login-button" @click="Login">登录</div>
        <div class="wrapper__login-link" @click="register">立即注册</div>
        <Toase v-if="showToase" :message="mes"/>
    </div>
</template>
<script>
import { reactive } from 'vue'
// import { post } from '../../utils/request'
import Toase from '../../components/Toast.vue'
export default {
  name: 'Login',
  components: { Toase },
  data () {
    return {
      loginData: reactive({ username: '', password: '' }),
      showToase: false,
      mes: ''
    }
  },
  methods: {
    async Login () {
      localStorage.isLogin = true
      this.$router.push({ name: 'Home' })
      try {
        // const data = await post('/login', {
        //   username: this.username,
        //   password: this.password
        // })
        // data判断数据是否正确
        this.$router.push({ name: 'Home' })
      } catch (e) {
        this.showToase = true
        this.mes = '请求失败'
        setTimeout(() => {
          this.showToase = false
          this.mes = ''
        }, 2000)
      }

    //   localStorage.isLogin = true
    //   this.$router.push({ path: '/', replace: true })
    },
    register () {
      this.$router.push({ path: '/register' })
    }
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
