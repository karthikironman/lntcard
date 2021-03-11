<template>
  <div class="floater" :class="{ smallFloater: type === 'button' }">
    <!-- dont show image for button only type -->
    <!-- {{ type }} -->
     <img class="imageph" v-if="type !== 'button'" src="@/assets/rfid.png"/>
    <!--start of scan type -->
    <input
      v-model="rfid"
      @blur="bringFocusBack()"
      @input="validateRFID()"
      class="inputhide"
      ref="focusme"
      v-if="type === 'scan'"
    />
    <p v-if="type === 'scan'" class="top-middle-description">{{ text }}</p>
    <button
      v-if="type === 'scan'"
      class="cancel-button"
      @click="failureClick()"
    >
      Cancel
    </button>
    <!-- end of scan type -->
    <!-- start of confirm -->
    <p v-if="type === 'confirm'" class="top-middle-description">{{ text }}</p>
    <button
      v-if="type === 'confirm'"
      class="confirm-button"
      @click="successClick()"
    >
      Confirm
    </button>
    <button
      v-if="type === 'confirm'"
      class="cancel-button"
      @click="failureClick()"
    >
      Cancel
    </button>
    <!-- end of confirm -->
    <!-- start of completed -->
    <p v-if="type === 'completed'" class="top-middle-description">{{ text }}</p>

    <button
      v-if="type === 'completed'"
      class="cancel-button"
      @click="successClick()"
    >
      Completed
    </button>
    <!-- end of completed -->
    <!-- start of button -->
    <button
      v-if="type === 'button'"
      class="confirm-button-type"
      @click="successClick()"
    >
      Confirm
    </button>
    <!-- end of start button -->
  </div>
</template>
<script>
export default {
  props: ["type", "text", "redirect","noRedirect"],
  mounted() {
    this.$refs.focusme.focus();
    console.log("from floater", this.type, this.text.this.redirect);
  },
  data() {
    return {
      loading: false,
      rfid: "",
    };
  },
  methods: {
    bringFocusBack() {
      setTimeout(() => {
        this.$refs.focusme.focus();
      }, 1200);
    },
    validateRFID() {
      console.log("vaidate rfid", this.rfid.length);
      if (this.rfid.length === 10) {
       
        this.loading = true;
        this.successClick();
      }
    },
    successClick() {
      if(this.noRedirect === true){
        this.$emit('rfid',this.rfid);
         this.rfid = "";
      }
     else if (this.redirect !== "secondScreen") {
        this.$emit("loader", true);
        setTimeout(() => {
          this.$emit("loader", false);
          this.$router.push({ name: this.redirect });
        }, 1000);
      } else {
        this.$emit("secondscreen");
      }
    },
    failureClick() {
      this.$emit("cancel");
    },
  },
};
</script>
<style scoped>
.floater {
  background: white;
  height: 85vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 40px;
}
.imageph {
  height: 40%;
  width: 60%;
  /* background: #d1cdcd; */
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
}
.middle-description {
  color: black;
  position: absolute;
  top: 75%;
  left: 50%;
  font-size: 27px;
  transform: translate(-50%, -50%);
}
.top-middle-description {
  color: black;
  position: absolute;
  top: 63%;
  left: 50%;
  font-size: 26px;
  transform: translate(-50%, -50%);
}
.top-description {
  color: black;
  position: absolute;
  top: 58%;
  left: 50%;
  font-size: 26px;
  transform: translate(-50%, -50%);
}
.inputhide {
  outline: 1px solid transparent;
  border: transparent;
  position: absolute;
  top: 2%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.confirm-button {
  background: #2c2c2c;
  color: white;
  border-radius: 35px;
  padding: 15px;
  width: 70vw;
  position: absolute;
  bottom: 7rem;
  font-size: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.confirm-button-type {
  background: #2c2c2c;
  color: white;
  border-radius: 35px;
  padding: 25px;
  width: 70vw;
  position: absolute;
  bottom: 3rem;
  font-size: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cancel-button {
  background: white;
  color: #2c2c2c;
  border-radius: 35px;
  padding: 15px;
  width: 70vw;
  position: absolute;
  bottom: 2rem;
  font-size: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.smallFloater {
  height: 25vh !important;
}
button{
  outline:none;
}
</style>
