<template>
    <div class="sticky-top shadow nav">
        <div class="access-bar d-flex align-items-center md-hide-nav">
            <b-container>
                <b-row class="access-bar-row d-flex justify-content-between">
                    <div class="accessibility-menu d-flex justify-content-between access-div align-items-center">
                        <span @click="decreaseFontSize">-</span>
                        <span @click="resetFontSize">A</span>
                        <span @click="increaseFontSize">+</span>
                        <i @click='toggleContrast' class="fas fa-adjust"></i>
                    </div>
                    <span>Instituto Metrópole Digital - IMD</span>
                </b-row>
            </b-container>
        </div>

        <b-container>
            <b-row>
                <div class="main-bar d-flex justify-content-between align-items-center">
                    <div id="imd-logo">
                        <NuxtLink class="NuxtLink" to="/"><b-img class='imd-logo' fluid src="../assets/img/imdlogo.png"></b-img></NuxtLink>
                        <!--
                            
                            
                            PODEMOS RETOMAR ESSA FEATURE NUMA VERSÃO FUTURA!!


                            <NuxtLink v-if='!toggle' class="NuxtLink" to="/"><b-img class='imd-logo' fluid src="../assets/img/imdlogo.png"></b-img></NuxtLink>
                        <NuxtLink v-else class="NuxtLink" to="/"><b-img class='imd-logo' fluid src="../assets/img/imdlogo-alt.png"></b-img></NuxtLink> -->
                    </div>
                    <button id="btn-mobile" @click="toggle = !toggle">
                        <i v-if="!toggle" class="fas fa-bars fa-2x"></i>
                        <i v-else class="fas fa-times fa-2x"></i>
                    </button>
                    <div id="menu-holder" class="d-flex align-items-center" :class="{active: this.toggle}">
                        <ul class="d-flex align-items-center">
                            <li><NuxtLink class="NuxtLink" to="/"> Início</NuxtLink></li>
                            <li><NuxtLink class="NuxtLink" to="/sobrecolabore"> Sobre & Colabore</NuxtLink></li>
                        </ul>
                        <b-button class="access-button" to="/login">Acesso</b-button>
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
            toggle: false
        }
    },
    methods:{
        toggleContrast(){
            document.getElementsByTagName('body')[0].classList.toggle("contrast-A");
            this.toggle = !this.toggle;
        },
         decreaseFontSize(){
            document.getElementsByTagName('html')[0].style.fontSize = '80%'
        },
        increaseFontSize(){
            document.getElementsByTagName('html')[0].style.fontSize = '120%'
        },
        resetFontSize(){
            document.getElementsByTagName('html')[0].style.fontSize = '100%'
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

.accessibility-menu span, i{
    cursor: pointer;
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
    justify-content: center;
    align-items:center;
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
    z-index: 100000;
}

#btn-mobile{
    display: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    color: var(--grey-600);
}

/* Media Queries */

@media screen and (max-width: 720px){
    #btn-mobile{
        display: block;
    }

    #menu-holder{
        display: block !important;
        position: absolute;
        width: 100%;
        top: 80px;
        right: 0;
        background-color: var(--cinza-principal);
        z-index: 1000;
        height: 0px;
        transition: .6s;
        visibility: hidden;
        overflow-y: hidden;
    }

    #menu-holder li, .access-button{
        width: 100%;
        text-align: center;
        font-size: 1.4rem;
        margin: 1rem 0;
        border-bottom: 1px solid rgba(133, 133, 133, 0.5);
    }
    
    #menu-holder.active{
        display: block !important;
        height: calc(100vh - 80px);
        visibility: visible;
        overflow-y: auto;
    }
    #menu-holder ul{
        display: block !important;
    }

    .md-hide-nav{
        display: none !important;
    }
}

@media screen and (max-width: 590px) {
    
    #imd-logo{
        margin: 0 0 0 1rem;
    }
    
    #btn-mobile{
        margin: 0 1rem 0 0;
    }
}
</style>