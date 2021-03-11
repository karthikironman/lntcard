<template>
    <div class="foodCard">
        <img class="foodImage" :src="image" />
    <div class="namQuan">
        <p>{{name}}</p>
        
        <pre>Quantity   {{quantity}}</pre>
    </div>
    </div>
</template>
<script>
export default {
props:["name","image","quantity"],
data(){
    return{

    }
}
}

</script>
<style scoped>
.foodCard{
    background: white;
    border-radius: 10px;
    margin:20px;
    display:flex;
    color:black;
    padding:10px;
}
.foodImage{
    width:10rem;
    height:10rem;
    border-radius: 10px;;
}
.namQuan{
    padding-left:23px;
}
.namQuan p {
    font-size:24px;
    text-align:left;
    font-weight: 600;;

}
.namQuan pre {
    font-size:23px;
    color:#6192B1;
}
</style>