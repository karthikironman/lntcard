import a from "./apihelper"
const apihelper = new a();
const base_address = process.env.VUE_APP_RPI_ADDRESS;
class rpi {
    ringAlarm(){
        const url = base_address+ "/alarm";
        return apihelper.post(url)
    }
}
export default rpi;