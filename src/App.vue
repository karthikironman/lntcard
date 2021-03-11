<template>
  <div id="app">
   <button v-if="!open" class="menuToggle" @click="toggle"><img class="menuIcon" src="@/assets/hamburger.png"/></button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">
        <sidebar @closeme="toggle"/>
        </div>
    </Drawer>
    <div class="pages">
      <router-view />
    </div>
     


  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
import sidebar from "@/components/widgets/sidebar.vue"

export default {
  name: "App",
    components: {
    Drawer,
    sidebar
  },
  data() {
    return {
     open:false
    };
  },

  methods: {
  toggle() {
      this.open = !this.open
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: red;
  height: 100vh;
  overflow: auto;
  background: url("./assets/background.png");
  overflow:hidden;
}
.pages {
  height: 100vh;
}
.vue-simple-drawer.left {
    left: 0;
    top: 0;
    bottom: 0;
    width: 66vw;
    background:white;
    color:black;
}
.menuToggle{
 background: transparent;
 border:none;
 outline:none;

}
.menuIcon{
  width:3rem;
  position:absolute;
  left:10px;
  top:2.5rem;
  z-index:9999999
}
</style>
