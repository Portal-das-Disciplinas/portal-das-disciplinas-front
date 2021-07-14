<template>
<div class="thumb-imd">
    <div class="text-center h-100 d-flex flex-column justify-content-center align-items-center text-white" id="thumb-text-div">
        <h1 style="font-size: 57px;">{{title}}</h1>
        <p class="w-50 text-white">{{description}}</p>
    </div>
</div>
</template>

<script>
export default {
    props:{
        title:{
            required: true,
            type: String
        },
        description:{
            required: true,
            type: String
        }
    }
    
}
</script>

<style scoped>

.thumb-imd{
    width: 100%;
    height: 20rem;
    background: linear-gradient(30deg, rgba(1, 75, 140, 0.8), rgba(124, 54, 236, 0.75)), url('../assets/img/bg-imd.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

@media screen and (max-width: 441px){

    .thumb-imd{
        height: auto;
    }

    #thumb-text-div{
        padding: 1.2rem 0;
    }

    #thumb-text-div > p{
        width: 75% !important;
        margin-top: 15px;
    }
}

</style>