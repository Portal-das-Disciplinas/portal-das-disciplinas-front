<template>

    <div>
        <Navbar/>
        <b-container>
            <b-row>
                <div>
                    <div>
                        <h1>Nossa equipe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet temporibus dolorum facere ullam repellat doloribus architecto tempore unde quae? Tempore cumque dolor velit enim aliquam laboriosam, dignissimos doloremque odio? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <h1>Colabore</h1>
                        <p>Caso tenha interesse em colaborar na adição de novas funcionalidades do site como sistema de classificações dinâmicos, refinamento de mecanismos de busca, interação com o portal de dados abertos da UFRN para recuperação de índices de aprovação de disciplinas, implementação de fóruns no portal, entre outros, por favor, entre em contato conosco.</p>
                    </div>

                    <ul>
                        Lista de emails para contato
                        <li>eugenio@imd.ufrn.br</li>
                        <li>pedrogab96@gmail.com</li>
                        <li>victor_brandao@outlook.com</li>
                    </ul>
                </div>
            </b-row>

            <b-row>
                <div class="accordion w-100" role="tablist">
                    <b-card no-body class="mb-1 br-20px">

                        <b-card-header header-tag="header" class="p-2" role="tab">
                            <b-button block v-b-toggle.accordion-1 @click="visible = !visible" class="accordion-colab-btn transition-4 br-30px d-flex justify-content-between align-items-center px-4">
                                <div>Colaboradores anteriores</div>
                                <i v-if="visible" class="fas fa-caret-down"></i>
                                <i v-else class="fas fa-caret-up"></i>
                            </b-button>
                        </b-card-header>

                        
                        <!-- COLABORADORES -->

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
        background-color: var(--grey-900);
        color: var(--branco);
    }

</style>