<template>
    <div>
        <div class="mt-2 embed-responsive embed-responsive-21by9">
            <iframe class="embed-responsive-item" :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p class="video-description smaller-p text-center mt-5">Olá, você encontrou o nosso ponto secreto aqui desse site! Se você está lendo isso, já sei que é bastante curioso e veio procurar saber como essa página funciona. Bom, boa sorte na sua jornada pelo conhecimento. "Que a força esteja com você".</p>
        </div>
        <div class="mt-4">
            <p class="video-description  smaller-p text-center mt-5">{{description}}</p>
        </div>
    </div>
</template>

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
.video-description{
    color: var(--grey-500);
}
</style>