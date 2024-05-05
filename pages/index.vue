<template>
    <div class="cont">
      <transition name="fade">
        <div class="login-box" v-if="showLogin">
          <form>
            <h2 data-v-inspector="pages/index.vue:4:7" data-v-02281a80="">Login</h2>
            <div class="user-box">
              <input type="password" v-model="password" required>
              <label>Password</label>
            </div>
            <div class="d-flex justify-content-center">
              <a @click="checkPassword()">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </div>
          </form>
        </div>
      </transition>
    </div>
</template>

<style scoped>

@media (max-width: 880px) {
  .login-box::after{
    content: "";
    background-image: url(../assets/6935.gif);
    background-size:contain; 
    position: absolute;
    width: 200px;
    height: 250px; 
    left: 25%;
    top: 250px;
  }
}

*{
  font-family: "Pixelify Sans", sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
html {
  height: 100%;
  width: 100%;
}
body {
  margin:0;
  padding:0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #f44703;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #f44703;
  border: none;
  border-bottom: 1px solid #0280ee;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #0280ee;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #0280ee;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #f44703;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #f44703;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #f44703,
              0 0 25px #f44703,
              0 0 50px #f44703,
              0 0 100px #f44703;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f44703);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #f44703);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #f44703);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #f44703);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

.login-box::after{
  content: "";
  background-image: url(../assets/6935.gif);
  background-size:contain; 
  position: absolute;
  width: 375px;
  height: 500px; 
  left: 400px;
  top: -50px;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
</style>
 

<script>
export default {
  data() {
    return {
      password: '', 
      showLogin: true, 
    }
  },
  methods: {
    checkPassword() {
      if (this.password === 'marts202020') {
        this.showLogin = false; 
        setTimeout(() => {
          this.$router.push('/home');
        }, 1000);
      } else {
        alert('Invalid password!');
      }
    }
  }
}
</script>


 
