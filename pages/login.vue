<template>
    <div>
        <Navbar/>
        <div class="bg-login">
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.bg-login{
    width: 100%;
    height: calc(100vh);
    background: linear-gradient(60deg, rgba(1, 75, 140, 0.8), rgba(236, 54, 115, 0.651), rgba(124, 54, 236, 0.75)), url('../assets/img/bg-imd.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>