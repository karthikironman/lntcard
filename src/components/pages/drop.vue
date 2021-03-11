<template>
    <div>
        <floater
      @loader="setNextStatus($event)"
      :type="'completed'"
      :text="'DROPPED SUCCESSFULLY'"
       :redirect="'mainPage'"
    />
        </div>
</template>
<script>
import floater from "../widgets/floater";
import backendService from "../../services/backendService";
const API_BACKEND = new backendService();
export default {
     components: { floater },
    data(){
        return{

        }
    },
    methods:{
        setNextStatus(){

           
            let pickupid = localStorage.getItem('pickupid')
            API_BACKEND.dropPickup(pickupid).then(()=>{console.log('dropped')});
            localStorage.clear();
            localStorage.setItem('status','pickup');
        }
    }
}
</script>