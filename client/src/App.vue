<template>
  <div id="app">
    <div id="main-navbar">
      <brand-section/>
      <navbar/>
      <authentication/>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./styles/main.scss";
</style>
