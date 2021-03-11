<template>
  <div>
    <img src="@/assets/lnt_logo.png" />
    <button class="loginbtn" @click="showFloater()">Login</button>
    <loading
      :active.sync="loading"
      :can-cancel="true"
      :is-full-page="true"
    ></loading>
    <floater
      @loader="loading = $event"
      @rfid="login($event)"
      :noRedirect="true"
      v-if="floater"
      :type="'scan'"
      :redirect="'dashboard'"
      :text="'Scan your RFID Card in the scanner'"
    />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import floater from "@/components/widgets/floater.vue";
import api_backend from "@/services/backendService.js";

export default {
  data() {
    return {
      loading: false,
      floater: false,
    };
  },
  methods: {
    showFloater() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        console.log("from showFloater");
        this.floater = true;
      }, 1000);
    },
    login(event) {
      this.loading = true;
      console.log("login event", event);
      const API_BACKEND = new api_backend();
      let rfid_no = event;
      API_BACKEND.login(rfid_no)
        .then((res) => {
          console.log("login response ", res.data);
          localStorage.setItem("image", res.data.imageUrl);
           localStorage.setItem("name", res.data.name);
            localStorage.setItem("rfid", res.data.rfId);
            this.$router.push({name:'dashboard'})
        })
        .catch((err) => {
          alert("invalid rfid card",err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  watch: {
    loading: function () {
      console.log("loading value", this.loading);
    },
  },
  components: {
    loading: Loading,
    floater: floater,
  },
};
</script>
<style scoped>
img {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}
.loginbtn {
  color: blue;
  width: 331px;
  font-size: 27px;
  padding: 1rem;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%);
}
.loginbtn:hover {
  background-color: blue;
  color: white;
  outline: none;
  border: none;
}
</style>