<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>

<style>
.main {
  margin-left: 160px;
  font-size: 28px;
  padding: 0px 10px;
}
</style>