<template>
    <div class="mt-2">
        <iframe width="725" height="408" :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p class="text-center video-description mt-2">{{description}}</p>
    </div>
</template>

// lembrar de por a legenda

<script>
export default {
    name: 'Video',
    props: {
        link: {
            type: String,
            require: true
        },

        description: {
            type: String,
            require: true
        }
    }
}
</script>

<style scoped>

div{
    width: 725px;
    margin: auto;
}

.video-description{
    font-size: .95rem;
    color: var(--grey-500);
}

</style>