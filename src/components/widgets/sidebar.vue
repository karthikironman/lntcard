<template>
    <div class="sidebar">
        <h2></h2>
        <button class="logout-btn" @click="goToDashboard()">LOGOUT</button>
       <div class="line"></div>
       <img class="profilePic" :src="getProfilePic()" />
       <p class="profileName">{{getName()}}</p>
        </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goToDashboard(){
            localStorage.clear();
            this.$router.push({path:"/"});
            this.$emit('closeme')
        },
        getName(){
           return localStorage.getItem('name')
        },
        getProfilePic(){
            return localStorage.getItem('image')
        }
    }
}
</script>
<style scoped>
.sidebar{
    color:black;
}
.logout-btn{
    padding:1rem;
    background:red;
    color:white;
    border:none;
    outline:none;
    border-radius: 35px;
    font-size:25px;
}
.line{
    width:100%;
    border-top:1px solid grey;
    margin-top:2rem;
    height:0;
}
.profilePic{
    margin-top:2rem;
    width:20vh;
    height:20vh;
    border-radius: 50%;
}
.profileName{
    font-size:29px;
    text-transform: capitalize;
}
</style>
