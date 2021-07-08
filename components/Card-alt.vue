<template>
    <div class="mx-1">
        <b-card
            :footer="Professor"
            footer-tag="footer"
            :title="Name"
            style="max-width: 15rem;"
            img-src="https://hongkong.imd.ufrn.br/filemanagerportal/source/2018/Novembro/Residência%20em%20TI_aula%20inaugural/Residência%20em%20TI_Aula%20inaugural_resuzida.jpg"
            img-alt="Image"
            img-top
            >
            <b-card-text class="text-justify">{{Synopsis}}</b-card-text>
            <b-button class="w-100 transition-4" variant="dark">Acessar</b-button>
        </b-card>
        <hr class="hr-cards">
    </div>
</template>

<script>
export default {
    props: {
        Synopsis: {
            type: String,
            require: true
        },

        Professor: {
            type: String,
            require: false
        },

        Name: {
            type: String,
            require: true
        }
    }

}
</script>

<style scoped>
img{
    max-width: 100%;
    max-height: 150px;
}
</style>