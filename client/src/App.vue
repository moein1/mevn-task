<template>
  <div id="app">
    <div id="main-navbar">
      <brand-section/>
      <navbar/>
      <authentication/>
    </div>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/main.scss";
</style>
