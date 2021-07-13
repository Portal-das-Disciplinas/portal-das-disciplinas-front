<template>
    <div class="d-flex flex-column justify-content-center align-items-center mx-4">
        <img class="fluid clip-path" src="../assets/img/devs/jv.jpg" alt="foto-dev">
        <div class="text-center">
            <h1 style="font-size: 1.4rem" class="mb-0">{{nome}}</h1>
            <p>Desenvolvedor <code>{{devEnd}}</code></p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        nome:{
            type: String,
            required: true
        },

        devEnd:{
            type: String,
            required: true
        }
    },
}
</script>

<style scoped>
.clip-path{
    clip-path: circle(50% at 50% 50%);
    width: 8rem;
}
</style>