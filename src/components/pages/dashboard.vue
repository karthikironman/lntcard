<template>
  <div class="dashboard">
    <h1 class="heading">Dashboard</h1>
    <!-- <p>{{ getStatus("name") }}</p> -->
    <div class="btnwrapper">
      <mainBtns
      class="choosebtns"
      @clicked="showFloater()"
        v-for="i in item"
        :key="i"
        :name="i.name"
        :active="i.active"
        :activename="i.activename"
        :activedesc="i.activedesc"
      />
    </div>

    <floater
      @loader="loading = $event"
      :redirect="active"
      v-if="floater"
      :type="activeFloater"
      :text="activeFloaterText"
      @cancel="handleCancel()"
    />
  </div>
</template>
<script>
import mainBtns from "@/components/widgets/mainBtns";
import floater from "@/components/widgets/floater";
export default {
  components: { mainBtns, floater },
  data() {
    return {
      item: [
        {
          name: "pickup",
          active: true,
          floater: "scan",
          floaterText: "'Scan your RFID Card in the scanner to pick the item'",
          activename: "Food Pickup",
          activedesc: "Samosa, Sweet",
        },
        {
          name: "serve",
          active: false,
          floater: "confirm",
          floaterText: "Confirm serving food",
          activename: "Serving",
          activedesc: "Completed",
        },
        {
          name: "drop",
          active: false,
          floater: "scan",
          floaterText: "Scan your RFID card in the cafeteria to drop the Food",
          activename: "Dropping",
          activedesc: "Completed",
        },
      ],
      status: "",
      floater: false,
      activeName: "",
      activeFloater: "",
      activeFloaterText: "",
    };
  },
  computed: {},
  mounted() {
    console.log("from mounted ", localStorage.getItem("status"));
    if (localStorage.getItem("status") === null) {
      localStorage.setItem("status", "pickup");
    }
    this.makeActive(localStorage.getItem("status"));
  },
  methods: {
    makeActive(name) {
      this.active = name;
      for (let a = 0; a < this.item.length; a++) {
        if (this.item[a].name === name) {
          this.item[a].active = true;
          this.activeName = this.item[a].name;
          this.activeFloater = this.item[a].floater;
          this.activeFloaterText = this.item[a].floaterText;
        } else {
          this.item[a].active = false;
        }
      }
    },
    showFloater() {
      console.log("from show floater");
      this.floater = true;
    },
    getStatus(field) {
      for (let a = 0; a < this.item.length; a++) {
        if (this.item[a].name === this.active) {
          console.log("getStatus", field, this.item[a][field]);
          return this.item[a][field];
        }
        return "";
      }
    },
    handleCancel(){
      console.log('from handle cancel')
      this.floater = false;
    }
  },
};
</script>
<style scoped>
.dashboard{
  overflow:hidden;
  height:100vh;
}
.heading {
  font-size: 27px;
  text-transform: capitalize;
  font-weight: 800;
  color: white;
}
p {
  font-size: 27px;
  color: white;
}
.btnwrapper{
    margin-top:6rem;
   
    overflow:hidden;
}

</style>
