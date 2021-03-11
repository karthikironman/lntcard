<template>
  <div class="mainbtns" @click="emitClickEvent()" :class="{ active: active }">
    <div class="textWrapper">
      <p class="mainTxt">{{ activename }}<p>
      <p class="desc" v-if="!active">{{ activedesc }}</p>
    </div>

    <div class="imgWrapper"></div>
  </div>
</template>
<script>
export default {
  props: ["name", "active", "activename", "activedesc"],
  data() {
    return {};
  },
  methods: {
    emitClickEvent() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
.mainbtns {
  /* padding: 1rem; */
  /* padding-left:3rem; */
  border-radius: 80px;
  background: transparent;
  color: white;
  margin: 1rem;
  border: 1px solid white;
  padding: 3rem 1rem;
  font-size: 24px;
  position: relative;
  cursor: pointer;
  margin-bottom: 5rem;
}
.active .mainTxt{
  color:#535355;
  position:relative;
  top:15px;
}
.active {
  background: white;
  color: #504e4e;
  font-size: 29px;
  text-transform: capitalize;
  line-height: 1rem;
}
.desc {
  position:absolute;
 left:50%;
 bottom:10px;
 transform:translate(-23%,0);
  font-size: 19px;
  
}
.imgWrapper {
  position: absolute;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  background: #8b89a1;
  top: 0.6rem;
}
.textWrapper{
  margin-left:3rem;
}
.mainTxt{
  margin:0;
}
</style>
