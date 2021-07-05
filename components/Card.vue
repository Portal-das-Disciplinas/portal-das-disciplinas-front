<template>
    <div class="main-card-div">
        <div class="img-card-div">
            <img class="img-fluid img-card" src="../assets/img/default.jpg" alt="">
        </div>
        <div class="sub-div">
            <h1 class="card-title mt-2">Lorem ipsum dolor sit amet</h1>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos modi eius recusandae magnam odio vitae iure accusantium officiis!</p>
            <b-button class="transition-4 w-100" variant="outline-danger">Lorem Ipsum</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',

    props: {
        name: {
            type: String,
            require: true
        },

        synopsis: {
            type: String,
            require: true
        },
        media: {
            type: String,
            require: true
        }
    }
}
</script>

<style scoped>

.main-card-div{
    margin: 0 auto;
    border-radius: 12px 12px 5px 5px;
    width: 250px;
    min-height: 420px;
    background-color: var(--cinza-principal);
}

.img-card{
    border-radius: 12px 12px 0 0;
}

.img-card-div{
    max-height: 165px;
}

.card-title{
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: var(--preto-secundario);
    text-align: start;
}

.description{
    color: var(--cinza-secundario);
}

.sub-div{
    width: 90%;
    margin: 10px auto;
}

</style>