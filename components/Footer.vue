<template>
    <div class="footer">
        <b-container class="h-100 d-flex flex-column justify-content-around">
            <b-row class="d-flex justify-content-between align-items-center">
                <div id="section1">
                    <div class="d-flex align-items-center">
                        <b-img fluid id="imd-footer" src="../assets/img/imd-footer 2.png"></b-img>
                        <p class="ml-3 footer-title">Portal das Disciplinas - IMD/UFRN</p>
                    </div>
                    <p class="mt-3 footer-sub">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus culpa est recusandae.</p>
                </div>
                <div>
                    <b-img id="ufrn-logo" fluid src="../assets/img/ufrnlogo.png"></b-img>
                </div>
            </b-row>
            <b-row>
                <hr>
                <div class="d-flex justify-content-between w-100 mt-2 info-imd">
                    <div>&copy; Instituto Metrópole Digital. Natal, 2021. Todos os direitos reservados.</div>
                    <div>Desenvolvido por: Equipe do <NuxtLink class="eqp-link" to="/">Portal das Disciplinas</NuxtLink></div>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>

#ufrn-logo{
    width: 175px;
}

#imd-footer{
    width: 44px;
}

.footer{
    height: 200px;
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

</style>