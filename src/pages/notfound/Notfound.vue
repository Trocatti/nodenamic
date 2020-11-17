<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-bg">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>oops!</h1>
      <h2>Error 404 : Page Not Found</h2>
      <router-link :to="{name: 'home'}">Go to home</router-link>
    </div>
  </div>
</template>

<style  lang="scss" scoped>
#notfound {
  position: relative;
  height: 100vh;
  background-color: #fafbfd;
  .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

.notfound {
  max-width: 520px;
  width: 100%;
  text-align: center;
  .notfound-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: -1;
    > div {
      width: 100%;
      background: #fff;
      border-radius: 90px;
      height: 125px;
      &:nth-child(1) {
        -webkit-box-shadow: 5px 5px 0px 0px #e4e4e4;
        box-shadow: 5px 5px 0px 0px #e4e4e4;
      }
      &:nth-child(2) {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        -webkit-box-shadow: 5px 5px 0px 0px #e4e4e4;
        box-shadow: 5px 5px 0px 0px #e4e4e4;
        position: relative;
        z-index: 10;
      }
      &:nth-child(3) {
        -webkit-box-shadow: 5px 5px 0px 0px #e4e4e4;
        box-shadow: 5px 5px 0px 0px #e4e4e4;
        position: relative;
        z-index: 90;
      }
    }
  }
  h1 {
    font-family: 'Quicksand', sans-serif;
    font-size: 86px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 8px;
    color: var(--dark);
  }
  h2 {
    font-family: 'Quicksand', sans-serif;
    font-size: 26px;
    margin: 0;
    font-weight: 700;
    color: var(--dark);
  }
  a {
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    background: var(--orange);
    display: inline-block;
    padding: 15px 30px;
    border-radius: 5px;
    color: var(--white);
    font-weight: 700;
    margin-top: 20px;
  }
}

.notfound-social {
  margin-top: 20px;
  > a {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 40px;
    font-size: 14px;
    color: var(--white);
    background-color: #dedede;
    margin: 3px;
    padding: 0px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }
}

@media only screen and (max-width: 767px) {
  .notfound .notfound-bg {
    width: 287px;
    margin: auto;
    > div {
      height: 85px;
    }
  }
}

@media only screen and (max-width: 480px) {
  .notfound {
    h1 {
      font-size: 68px;
    }
    h2 {
      font-size: 18px;
    }
  }
}
</style>

<script>
export default {
  name: 'notfound'
}
</script>
