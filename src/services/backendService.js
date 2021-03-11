import a from "./apihelper"
const apihelper = new a();
const base_address = process.env.VUE_APP_SERVER_ADDRESS;
class backend {
    login(rfid_no){
        const url = base_address+ `/users/search/findByRfId?name=${rfid_no}`;
        return apihelper.get(url)
    }
    startPickup(rfid_no){
        const url = base_address+ `/api/service/rfId/${rfid_no}`;
        return apihelper.get(url);
    }
    confirmPickup(data){
        const url = base_address + `/api/service/id/${data.pickupId}/status/${data.status}`;
        return apihelper.post(url);
    }
    countPickup(data){
        const url = base_address + `/api/service/id/${data.pickupId}/employee/${data.employeeRFID}`;
        return apihelper.post(url);
    }
    dropPickup(pickupId){
        const url =  base_address + `/api/service/id/${pickupId}/status/DROPPED`;
        return apihelper.post(url);
    }
}
export default backend;

//0005814491  -> KARTHIK
//0001848643  -> ASIF