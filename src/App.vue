<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <el-button>aaa</el-button>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  const locale = zhCn
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  console.log(import.meta.env.VITE_APP_WEB_URL)
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
