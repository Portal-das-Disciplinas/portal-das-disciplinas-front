<template>
    <div class="mt-2 embed-responsive embed-responsive-21by9">
        <iframe class="embed-responsive-item" :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="text-center video-description mt-2">{{description}}</p>
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
    font-size: .95rem;
    color: var(--grey-500);
}
</style>