<template>
    <div class="sticky-top shadow nav">
        <div class="access-bar d-flex align-items-center">
            <b-container>
                <b-row class="d-flex justify-content-between">
                    <div class="d-flex justify-content-between access-div align-items-center">
                        <div>-</div>
                        <div>A</div>
                        <div>+</div>
                        <b-icon icon="brightness-high-fill"></b-icon>
                    </div>
                    <div>Instituto Metropole Digital - IMD</div>
                </b-row>
            </b-container>
        </div>

        <b-container>
            <b-row>
                <div class="main-bar d-flex justify-content-between align-items-center">
                    <div>
                        <NuxtLink class="NuxtLink" to="/"><b-img fluid src="../assets/img/imdlogo.png"></b-img></NuxtLink>
                    </div>

                    <div class="d-flex align-items-center">
                        <ul class="d-flex align-items-center">
                            <li><NuxtLink class="NuxtLink" to="/AAAAAAAAAAAAAAAAAAAAAAAAA"> Início</NuxtLink></li>
                            <li><NuxtLink class="NuxtLink" to="/"> Sobre & Colabore</NuxtLink></li>
                        </ul>
                        <b-button class="access-button">Acesso</b-button>
                    </div>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

    data(){
        return{
        }
    }
    
}
</script>

<style scoped>
.access-bar{
    width: 100%;
    height: 32px;
    color: var(--branco);
    background-color: var(--azul-primario);
}

.main-bar{
    width: 100%;
    height: 80px;
    background-color: var(--branco);
    /* offset-x | offset-y | blur-radius | color */
    /* box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.15); */
}

ul{
    margin: 0;
}

ul li{
    margin-right: 40px;
    font-size: 1rem;
}

.access-button{
    background-color: var(--azul-primario);
    border: none;
    width: 100px;
    height: 40px;
    margin: 0;
    transition: .6s;
}

.access-button:hover{
    background-color: var(--azul-links);
}

.access-div{
    width: 120px;
}

.shadow{
    box-shadow: 1px 1px 1px var(--grey-900);
}

.nav{
    width: 100%;
    background-color: var(--branco);
}

</style>