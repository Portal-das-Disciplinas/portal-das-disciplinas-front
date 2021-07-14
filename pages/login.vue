<template>
    <div>
        <Navbar/>
        <div class="bg-login">
            <div class="teste">
                <form action="" class="d-flex">
                    <div>
                        <label for=""></label>
                        <input type="text">
                    </div>
                    <div>
                        <label for=""></label>
                        <input type="password">
                    </div>
                </form>
                <button type="submit">Submit</button>
            </div>
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

.teste{
    width: 400px;
    height: 400px;
    background: red;
    margin: 0 auto;
}
</style>