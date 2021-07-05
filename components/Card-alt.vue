<template>
    <div>
        <b-card
            :footer="Professor"
            footer-tag="footer"
            :title="Name"
            style="max-width: 15rem;"
            img-src="https://placekitten.com/1280/720"
            img-alt="Image"
            img-top
            >
            <b-card-text>{{Synopsis}}</b-card-text>
            <b-button class="w-100 transition-4" variant="dark">Acessar</b-button>
        </b-card>
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