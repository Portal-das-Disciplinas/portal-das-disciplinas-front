<template>
    <div>
        <Navbar/>

        <b-container class="mt-5">
            <b-row>
                <div class="col-md-6">
                    <div>
                        <h1>Nossa equipe</h1>
                        <p class="text-justify mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet temporibus dolorum facere ullam repellat doloribus architecto tempore unde quae? Tempore cumque dolor velit enim aliquam laboriosam, dignissimos doloremque odio? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <h1>Colabore</h1>
                        <p class="text-justify mt-3">Caso tenha interesse em colaborar na adição de novas funcionalidades do site como sistema de classificações dinâmicos, refinamento de mecanismos de busca, interação com o portal de dados abertos da UFRN para recuperação de índices de aprovação de disciplinas, implementação de fóruns no portal, entre outros, por favor, entre em contato conosco.</p>
                    </div>
                    <div>
                        <b>Lista de emails para contato</b>
                        <ul class="ml-3">
                            <li>eugenio@imd.ufrn.br</li>
                            <li>pedrogab96@gmail.com</li>
                            <li>victor_brandao@outlook.com</li>
                        </ul>
                    </div>
                </div>

                <!-- Prof + Devs grid -->

                <!-- Conversar com Henry sobre links para Github/Linkedin/Ig -->
                <div id="devsGrid" class="col-md-6 d-flex flex-column align-items-center">
                    <Professor nome="Eugênio Paccelli" role="orientador"/>
                    <div class="d-flex flex-wrap justify-content-center">
                        <Dev nome="IMD Dev" devEnd="back-end"/>
                        <Dev nome="IMD Dev" devEnd="back-end"/>
                        <Dev nome="IMD Dev" devEnd="back-end"/>
                        <Dev nome="IMD Dev" devEnd="back-end"/>
                        <Dev nome="IMD Dev" devEnd="font-end"/>
                        <Dev nome="IMD Dev" devEnd="font-end"/>
                    </div>
                </div>



            </b-row>

            <b-row id="acc-row">
                <div class="accordion w-100" role="tablist">
                    <b-card no-body class="mb-1 br-20px">

                        <b-card-header header-tag="header" class="p-2" role="tab">
                            <b-button block v-b-toggle.accordion-1 @click="visible = !visible" class="accordion-colab-btn transition-4 br-30px d-flex justify-content-between align-items-center px-4">
                                <div>Colaboradores anteriores</div>
                                <i v-if="visible" class="fas fa-caret-down fa-lg"></i>
                                <i v-else class="fas fa-caret-up fa-lg"></i>
                            </b-button>
                        </b-card-header>


                        <!-- COLABORADORES ANTERIORES -->

                        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium minima voluptates hic ipsa nobis odio culpa corporis aliquam laborum.</b-card-text>
                              <b-card-text>Algo a mais</b-card-text>
                            </b-card-body>
                            <hr>
                        </b-collapse>

                        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                              <b-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium minima voluptates hic ipsa nobis odio culpa corporis aliquam laborum.</b-card-text>
                              <b-card-text>Algo a mais</b-card-text>
                            </b-card-body>
                        </b-collapse>

                        <!-- -------------- -->
                        
                    </b-card>
                </div>
            </b-row>
        </b-container>

        <Footer/>
    </div>
</template>

<script>
export default {

    data(){
        return{
            visible: true
        }
    }
    
}
</script>

<style scoped>
    li{
        list-style-type: disc;
    }

    .accordion-colab-btn{
        background-color: var(--cinza-bg);
        color: var(--azul-primario);
        outline: none;
        border: none;

        /* font config */
        font-family: 'Hind';
        font-style: normal;
        font-size: 18px;
        line-height: 32px;
    }

    .accordion-colab-btn:hover{
        background-color: var(--azul-primario);
        color: var(--cinza-bg);
    }

    p{
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        color: var(--grey-900);
    }

    h1{
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
    }

    #devsGrid{
        margin-bottom:2rem;
    }

    #acc-row{
        margin-bottom: 3rem;
    }

    /* Media Queries */

    @media screen and (max-width: 768px){
        #devsGrid{
            margin: 1.8rem 0;
        }
    }
</style>