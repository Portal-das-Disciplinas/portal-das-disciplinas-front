<template>
    <div class="footer">
        <b-container class="h-100 d-flex flex-column justify-content-around">
            <b-row id="info-div" class="d-flex justify-content-between align-items-center">
                <div id="section1">
                    <div class="d-flex align-items-center">
                        <b-img fluid id="imd-footer" src="../assets/img/imd-footer 2.png"></b-img>
                        <p id="pdd-title" class="ml-3 footer-title">Portal das Disciplinas - IMD/UFRN</p>
                    </div>
                    <p id="pdd-sub" class="mt-3 footer-sub">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus culpa est recusandae.</p>
                </div>
                <div>
                    <b-img id="ufrn-logo" class='blackImg' fluid src="../assets/img/ufrnlogo-alt.png"></b-img>
                </div>
            </b-row>
            <b-row>
                <hr>
                <div id="eqp-div" class="d-flex justify-content-between w-100 mt-2 pb-3 info-imd">
                    <div class="mt-1">&copy; Instituto Metrópole Digital. Natal, 2021. Todos os direitos reservados.</div>
                    <div id="eqp-link">Desenvolvido por: <NuxtLink class="eqp-link" to="/sobrecolabore">Equipe do Portal das Disciplinas</NuxtLink></div>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>

#ufrn-logo{
    width: 150px;
    opacity: .6;
}

#imd-footer{
    width: 44px;
}

.footer{
    height: auto;
    background-color: var(--branco);
}

p{
    margin: 0;
}

.footer-title{
    color: var(--grey-900);
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 24px;
}

.footer-sub{
    color: var(--grey-500);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
}

#section1{
    max-width: 440px;
}

hr{
    margin: 0;
    padding: 0;
    width: 100%;
    position: relative;
    z-index: 1000;
}

.info-imd, .eqp-link{
    color: var(--grey-500);
}

.eqp-link{
    text-decoration: underline;
    transition: .4s;
}

.eqp-link:hover{
    color: var(--azul-links);
}

.info-imd{
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
}

#eqp-link{
    text-align: right;
}

/* Media Queries */

@media screen and (max-width:770px){
    #info-div{
        flex-direction: column;
        text-align: center;
        margin-top: 2rem;
    }

    #ufrn-logo{
        display: none;
    }
    .footer{
        background-image: url('../assets/img/ufrnlogo-alt-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 140px;
    }

    #eqp-div, #pdd-sub{
        color: var(--grey-900);
    }
}

@media screen and (max-width:576px){
    #eqp-div{
        flex-direction: column;
        text-align: center;
    }

    #eqp-link{
        text-align: center;
    }

    .footer{
        height: auto;
        padding: 15px;
    }

    .eqp-link{
        color: var(--azul-primario) !important;
    }

    .eqp-link:hover{
        color: var(--azul-waves-alt) !important;
    }

    #info-div{
        margin-top: 1rem !important;
    }
}

@media screen and (max-width:446px){
    #imd-footer{
        display: none;
    }
    #pdd-title{
        width: 100%;
        margin: 0 !important;
        text-align: center !important;
    }
}

</style>