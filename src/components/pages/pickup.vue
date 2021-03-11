<template>
  <div class="pickupFood">
    <p class="heading">pickup Food</p>
    <div class="locItem">
      <p class="value-pair"><span class="key">Location:</span> {{location}}</p>
      <p class="value-pair"><span  class="key">Items picked:</span> {{itemPicked}}</p>
    </div>
    <div>
      <foodcard
        v-for="(item, index) in items"
        :key="index"
        :name="item.name"
        :image="item.image"
        :quantity="item.quantity"
      />
    </div>
    <floater
      @loader="setNextStatus($event)"
      :type="floaterType"
      :redirect="floaterRedirect"
      :text="floaterText"
      @secondscreen="showCompletedScreen()"
    />
  </div>
</template>
<script>
import foodcard from "../widgets/foodCard";
import floater from "../widgets/floater";
import api_backend from "../../services/backendService";
const API_BACKEND = new api_backend();
export default {
  components: { foodcard, floater },
  data() {
    return {
      location:"___",
      itemPicked:"",      
      floaterType: "button",
      floaterRedirect: "secondScreen",
      floaterText: "Are you sure you wanted to End Pick up? ",
      items: [
        {
          name: "Samosa",
          image: require("@/assets/samosa.jpg"),
          quantity: 100,
        },
        {
          name: "Sweet",
          image: require("@/assets/sweet.jpg"),
          quantity: 100,
        },
      ],
    };
  },
  mounted() {
    this.getPickupDetails();
  },
  methods: {
    setNextStatus() {
      // confirm the pickup 
      let data = {
        pickupId: localStorage.getItem('pickupid'),
        status:'PICKEDUP'
      }
      API_BACKEND.confirmPickup(data).then(()=>{console.log('pickup confirmed')})
      console.log("go to dashboard page");
      localStorage.setItem("status", "serve");
    },
    getPickupDetails() {
      let rfid_no = localStorage.getItem("rfid");
      API_BACKEND.startPickup(rfid_no).then((res) => {
     
        if(res.data !== null){
               console.log("from get pickup screen", res.data);
               localStorage.setItem('pickupid',res.data.id);
               localStorage.setItem('pickedItemNo',res.data.countOfMenusAssigned);
               this.location = res.data.menuLocationName;
               this.itemPicked = res.data.countOfMenusAssigned;
               this.items = res.data.items.map((x)=>{ return {name:x.itemName,image:x.itemImageUrl,quantity:this.itemPicked}})
        }
      });
    },

    showCompletedScreen() {
      this.floaterType = "completed";
      this.floaterRedirect = "dashboard";
      this.floaterText = "SUCCESS! Redirecting back to home screen";
    },
  },
};
</script>
<style scoped>
.pickupFood {
  color: white;
  overflow: hidden;
}
.heading {
  font-size: 27px;
  text-transform: capitalize;
  font-weight: 800;
}
.locItem {
  border: 1px solid white;
  margin: 10px;
  margin-top: 5rem;
  border-radius: 9px;
  text-align: left;
  padding: 10px 20px;
  font-size: 20px;
  position:relative;
}
.value-pair{
display:block
}
.key{
  width: 30%;
    display: inline-block;
}
</style>