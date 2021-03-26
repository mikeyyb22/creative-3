<template>
<div id="app">
  <div class="align">
    <font size="10" style="color:white"><strong>MWM Graded Cards</strong></font><br><br>
  </div>
  <div id="menu" class="div-1">
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png" width="auto" height="auto">
      </router-link>
    </div>
  </div>

  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #808080;
}

.div-1 {
  background-color: #000;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #CC0000;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.align {
  text-align: center;
  color: 000;
}
</style>
