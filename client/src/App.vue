<template>
  <div id="app">
    <div id="top-section">
      <brand-section/>

      <authentication/>
    </div>
    <div id="main-section">
      <div id="main-navbar">
        <navbar/>
      </div>
      <div class="main-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/main.scss";
</style>
