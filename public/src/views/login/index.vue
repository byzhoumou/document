<script lang="ts" setup>
const nihao = ref(0)
</script>

<template>
  <div class="boby">
    <div class="box-a">
      <div class="login">
        <div class="head">
          <div class="logimag">
            <img src="../../assets/imag/log.phg.png" />
          </div>
        </div>
        <div class="title"><h1>账号密码登录</h1></div>
        <div class="middle">
          <div class="middle-1">
            <el-input class="input-box" placeholder="用户名" clearable></el-input>
            <span><img src="" alt="" /></span>
          </div>
          <div class="middle-2">
            <el-input class="password" type="password" placeholder="请输入密码" show-password>
            </el-input>
          </div>
          <div class="text">
            <div class="text-messaget">验证码登录</div>
            <div class="forgot-password">忘记密码？</div>
          </div>
          <div class="Login-button">
            <el-button><span>立即登录</span></el-button>
          </div>
          <div class="radio">
            <el-radio class="radio-box"> </el-radio>
            <span>请您阅读并同意</span>
            <div class="radio-box-1">
              <span><a href=""> 用户协议 </a></span>
              <span>和</span>
              <span><a href=""> 隐私政策</a></span>
            </div>
          </div>
          <div class="register">
            <span>没有账号？</span>
            <a href=""><span>立即注册</span></a>
          </div>
        </div>
        <div class="third-party">
          <div class="top">
            <el-divider>第三方登录</el-divider>
          </div>
          <div class="bottom">
            <div class="weixin">
              <img src="../../assets/imag/weixin.svg" alt="" />
            </div>
            <div class="qq"><img src="../../assets/imag/qq.svg" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.boby {
  width: 100vw;
  height: 100vh;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-a {
  width: 23.4375rem;
  height: 100%;
  background-color: #fff;
}
.login {
  display: flex;
  flex-direction: column;
  width: 23.4375rem;
  height: 100vh;
}
.head {
  width: 100%;
}
.logimag {
  display: flex;
  margin-top: 3.125rem;
  margin-left: 2.59375rem;
  width: 2.59375rem;
  height: 2.59375rem;
}
.title {
  pointer-events: none;
  padding-left: 2.625rem;
  color: #1e2331;
  font-weight: 600;
  font-size: 1.3125rem;
  margin-top: 1rem;
}
.middle {
  width: 23.4375rem;
  height: 19.6875rem;
  margin-top: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.middle-1 {
  display: flex;

  justify-content: center;

  margin-top: 1.5625rem;
  width: 19.3125rem;
  height: 2.625rem;
}

::v-deep.input-box {
  input {
    border: 0.0625rem solid #d3d6dc;
    border-radius: 1.3125rem;
    width: 19.3125rem;
    height: 2.625rem;
    padding: 0.625rem 1.25rem 0.625rem 1.25rem;
  }
  & > .el-input__wrapper {
    box-shadow: none;
  }
}

.middle-2 {
  display: flex;
  justify-content: center;
  margin-top: 1.5625rem;
  width: 19.3125rem;
  height: 2.625rem;
}
::v-deep.password {
  input {
    border: 0.0625rem solid #d3d6dc;
    border-radius: 1.3125rem;
    width: 19.3125rem;
    height: 2.625rem;
    padding: 0.625rem 1.25rem 0.625rem 1.25rem;
  }
  & > .el-input__wrapper {
    box-shadow: none;
  }
}

.text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.625rem;
  width: 19.3125rem;
  height: 1.1875rem;
  .text-messaget {
    pointer-events: none;

    color: #ff594d;
    font-weight: 400;
    font-size: 0.875rem;
  }
  .forgot-password {
    pointer-events: none;

    color: #ff594d;
    font-weight: 400;
    font-size: 0.875rem;
  }
}
.Login-button {
  margin-top: 2.5625rem;
  width: 19.3125rem;
  height: 2.75rem;
  button {
    height: 2.75rem;
    width: 19.3125rem;
    background: linear-gradient(90deg, #fe8a55 0%, #ff5d4d 100%);
    border-radius: 1.53125rem;
    color: #fff;
  }
}
::v-deep .radio {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 0.625rem;
}
.el-radio {
  margin: 0;
  height: 0.875rem;
  span {
    font-size: 0.75rem;
  }
}
.radio {
  & > span {
    font-size: 0.75rem;
    margin-right: 3px;
    pointer-events: none;
  }
}
.radio-box-1 {
  & > span {
    font-size: 0.75rem;

    & > a {
      color: #ff594d;
      font-size: 0.75rem;
    }
  }
}
.register {
  margin-top: 20px;
  & > span {
    pointer-events: none;

    font-weight: 400;
    color: #9b9fa8;
    font-size: 0.8125rem;
  }

  & > a {
    & > span {
      font-size: 0.8125rem;
      color: #ff594d;
    }
  }
}
.third-party {
  // display: flex;
  pointer-events: none;

  margin-top: 5.625rem;
  width: 100%;
  height: 4.5rem;
  & > .top {
    & > .el-divider {
      width: 15.625rem;
      margin: 0 auto;
      margin-top: 0.5rem;

      .el-divider__text {
        color: #9b9fa8;
      }
    }
  }
}
.bottom {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2.1875rem;
  margin-top: 1.6875rem;
  .weixin {
    width: 2.1875rem;
    height: 2.1875rem;
    margin-right: 1.6875rem;

    img {
      width: 100%; /* 设置图片宽度为父元素宽度的50% */
      height: auto; /* 高度自适应，保持原始宽高比 */
    }
  }
  .qq {
    width: 2.1875rem;
    height: 2.1875rem;
    margin-left: 1.6875rem;
    img {
      width: 100%; /* 设置图片宽度为父元素宽度的50% */
      height: auto; /* 高度自适应，保持原始宽高比 */
    }
  }
}
</style>
