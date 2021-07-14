<template>
    <div>
        <b-card
            :footer="Professor"
            footer-tag="footer"
            :title="truncText(Name, 55)"
            img-src="https://placekitten.com/1280/720"
            img-alt="Image"
            img-top
            class="card-alt"
            title-tag='h6'
            >
            <b-card-text class="text-justify">{{truncText(Synopsis, 126)}}</b-card-text>
            <b-button class="w-100 transition-4" variant="dark" to="/disciplina">Acessar</b-button>
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
    },
    methods: {
        truncText(text, maxLength){
            if(text.length>=maxLength){
                return text.substring(0, maxLength)+'...';
            }
            return text
            
        }
    }

}
</script>

<style scoped>
img{
    max-width: 100%;
    min-height: 45%;
    border-radius: 0.5rem 0.5rem 0 0;
}

.btn{
    background-color: var(--azul-primario);
    
}

.card{
    border: 0;
    border-radius: 0.5rem;
    min-height: 32rem;
    max-height: 32rem;
    width: 20rem;
}

.card-body{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    
}

div{
    /* responsividade dos cards */
    margin: 0 auto;
}

button:hover{
    background-color: var(--azul-links);
}

/* .card-title{
    
} */

@media screen and (max-width: 345px)  {
    .card{
        width: auto;
    }
}



</style>