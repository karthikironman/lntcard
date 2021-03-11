<template>
  <div class="serveFood" :class="{'scanning':colorChange}">
    <p class="heading">pickup Food</p>
    <button class="endBtn" @click="endServe()">End</button>

    <input
      @blur="bringFocusBack()"
      @input="increaseCount()"
      class="inputhide"
      ref="focusme1"
      v-model="rfid"
    />
  <div class="status-card">
      <p class="status-number">{{getNumber()}}</p>
      <p class="status-text">Food Served</p>
  </div>
  <div class="rfid_image">

  </div>
  <p class="rfid_description"> Place your rfid card in the scanner</p>
    <floater
      v-if="floater"
      @loader="setNextStatus($event)"
      :text="floaterText"
      :type="floaterType"
      :redirect="floaterRedirect"
       @secondscreen="showCompletedScreen()"
       @cancel="handleCancel()"
    />
  </div>
</template>
<script>
import floater from "../widgets/floater";
import backendService from "../../services/backendService";
const API_BACKEND = new backendService();
export default {
  components: { floater },
  data() {
    return {
    floaterType:'confirm',
     floaterRedirect:"secondScreen",
     floaterText:'Are you sure you wanted to End the Serving? ',
      floater: false,
      count: 0,
      colorChange: false,
      rfid:""
    };
  },
   mounted() {
    this.$refs.focusme1.focus();
    console.log('from floater',this.type,this.text.this.redirect)
  },
  methods: {
      getNumber(){
if(this.count < 10) return "0"+ this.count;
else return this.count
      },
      handleCancel(){
this.floater = false;
      },
       showCompletedScreen() {
  this.floaterType = 'completed';
     this.floaterRedirect = 'dashboard';
     this.floaterText = "ENDED THE SERVING"
    },
    setNextStatus() {
      console.log("go to dashboard page");
      // setLoading here
      localStorage.setItem("status", "drop");
    },
    bringFocusBack() {
      if (this.floater === false) {
        setTimeout(() => {
          this.$refs.focusme1.focus();
        }, 1200);
      }
    },
    endServe() {
      this.floater = true;
    },
    increaseCount() {
        if(this.rfid.length === 10 && this.colorChange === false){
      // this.count+=1;
      
         let data = {
        pickupId: localStorage.getItem('pickupid'),
        employeeRFID:this.rfid
      }
      API_BACKEND.countPickup(data).then((res)=>{
        this.count = res.data.countOfMenuConsumed
        })
      this.rfid = "";
      this.colorChange = true;
      setTimeout(() => {
        this.colorChange = false;
         this.rfid = "";
      }, 300);
        }
     
    },
  },
};
</script>
<style scoped>
.scanning{
     background: green !important;
}
.serveFood {
  color: white;
   background: transparent; 
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100vw;
}
.rfid_image{
    width:50vw;
    height:20vh;
    background: #E0E0E0;
    position:absolute;
    top:70%;
    left:50%;
    transform: translate(-50%,-50%);
}
.endBtn{
    font-size:27px;
    position:absolute;
    top:1.4rem;
    right:2rem;
    background: white;
    color:red;
    border-radius:28px;
    padding:.5rem 1rem;
}
.heading {
  font-size: 27px;
  text-transform: capitalize;
  font-weight: 800;
}
.inputhide {
  outline: 1px solid transparent;
  border: transparent;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.status-card{
    background: white;
    border-radius:8px;
    color:black;
    width:90vw;
    position:absolute;
    top:30%;
    left:50%;
    transform: translate(-50%,-50%);
}
.status-number{
font-size:80px;
font-weight: 500;
line-height: 0;
}
.status-text{
font-size:35px;
}
.rfid_description{
    font-size:30px;
    position:absolute;
    bottom:1rem;
    text-align:center;
    width:100vw;
}
</style>