<template>
    <div>
        <Navbar />
        <!-- Provavelmente vamos ter que criar um novo componente de thumbnail para disciplinas por causa da centralização do texto -->
        <Thumbnail type="disciplina" title="Matemática Elementar - IMD0001" />
        <section>
            <b-container>
                <!-- Left Side of the moon -->
                <b-row id="teste">
                    <div class="col-md-8 section-gap">
                        <div>
                            <h3>Trailer & Classificação</h3>
                            <Video
                                class="mt-4"
                                link="https://www.youtube.com/embed/fh5QD_4mRQw"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore beatae dolor veritatis."
                            />
                        </div>

                        <div class="mt-5">
                            <h3>Sinopse</h3>
                            <p class="text-justify" style="line-height: 30px;">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Possimus saepe qui soluta cum
                                ipsam! Sunt fuga reprehenderit facere magni
                                temporibus, doloremque dolor? Provident nulla
                                possimus, ea maxime reiciendis quae veniam,
                                dolor aperiam quo itaque iste architecto
                                cupiditate laudantium ab tempore, vel fuga?
                                Fugit, quis natus molestias dicta recusandae
                                fuga quas voluptates provident soluta, quisquam
                                ipsam. Dolores cupiditate neque accusantium
                                reiciendis maiores quam modi quae animi, numquam
                                ipsa placeat ex nesciunt rerum tenetur corrupti
                                pariatur quasi molestias velit sint sed eaque
                                repudiandae! Officiis debitis libero cumque,
                                enim illum odit dolorum quo non nesciunt facilis
                                harum reprehenderit possimus impedit ducimus
                                fugiat placeat excepturi amet delectus? Sed,
                                dolore aut? Sapiente fugiat illum ea in a
                                recusandae? Quod quas dolorum, omnis doloremque
                                blanditiis id.
                            </p>
                        </div>

                        <div class="mt-5">
                            <h3>Vídeo</h3>
                            <Video
                                class="mt-4"
                                link="https://www.youtube.com/embed/fh5QD_4mRQw"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore beatae dolor veritatis."
                            />
                        </div>

                        <div class="break-word mt-5">
                            <h3>Obstáculos</h3>
                            <ul class="ml-3">
                                <li>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nostrum, nobis!
                                </li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>

                            <p><b>Professor:</b> João Ninguém</p>
                            <p><b>Email:</b> joaoninguem@ufrn.edu.br</p>
                        </div>
                    </div>

                    <!-- Right Side of the moon -->

                    <div class="col-md-3 section-gap ml-5" id="second-section">
                        <div>
                            <h3 class="title">Estatística</h3>

                             <!-- COMPONETIZAR BARRA? -->

                            <div v-for="item in estatisticas" :key="item" class="classification">
                                <p class='text-center larger-p font-weight-bold'>{{item.name}}</p>

                                <div class="bar-info d-flex align-items-center">
                                    <p class='m-0 pb-0 pr-3' :style="setHighlight(item.porcentagens[0].porcentagem, '#77C159')">{{item.porcentagens[0].porcentagem}}%</p>
                                    <div class="right-bar w-100">
                                        <div
                                            class="left-bar"
                                            :style="
                                                'width: ' + item.porcentagens[0].porcentagem + '%'
                                            "
                                        ></div>
                                    </div>
                                    <p class='m-0 pb-0 pl-3' :style="setHighlight(100-item.porcentagens[0].porcentagem, '#1155CC')">{{item.porcentagens[1].porcentagem}}%</p>
                                </div>
                                
                                <div class="classification-text d-flex justify-content-between">
                                    <p v-for="porcentagem in item.porcentagens" :key="porcentagem">{{porcentagem.name}}</p>
                                </div>
                                
                                
                            </div>


                            <hr />
                        </div>

                        <div>
                            <h3 class="title">Recursos</h3>
                            <div
                                id="recursos"
                                style="height: 200px"
                                class="d-flex flex-column justify-content-around"
                            >
                                <div>
                                    <div
                                        class="d-flex justify-content-start align-items-center"
                                    >
                                        <img
                                            class="img-fluid"
                                            src="../assets/img/pdcIcon.png"
                                            alt="icone podcast"
                                        />
                                        <div class="ml-2 py-2">
                                            <h6 class="no-margin">Podcast</h6>
                                            <p class="no-margin">
                                                Escute aos podcasts exclusivos
                                                do portal
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        class="d-flex justify-content-start align-items-center"
                                    >
                                        <img
                                            src="../assets/img/bookIcon.png"
                                            alt="icone podcast"
                                        />
                                        <div class="ml-2 py-3">
                                            <h6 class="no-margin">
                                                Demo da disciplina
                                            </h6>
                                            <p class="no-margin">
                                                Tenha acesso aos conteúdos
                                                iniciais
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                        </div>
                        <div>
                            <h3 class="title">Tags</h3>
                            <!-- Essa parte é só para exemplificação -->

                            <div
                                class="d-flex flex-wrap justify-content-start align-items-center"
                            >
                                <button
                                    class="btn btn-danger mr-2 mt-2 transition-2"
                                >
                                    #Tag
                                </button>
                                <button
                                    class="btn btn-danger mr-2 mt-2 transition-2"
                                >
                                    #Tag
                                </button>
                                <button
                                    class="btn btn-danger mr-2 mt-2 transition-2"
                                >
                                    #Tag
                                </button>
                                <button
                                    class="btn btn-danger mr-2 mt-2 transition-2"
                                >
                                    #Tag
                                </button>
                                <button
                                    class="btn btn-danger mr-2 mt-2 transition-2"
                                >
                                    #Tag
                                </button>
                                <button
                                    class="btn btn-danger mr-2 mt-2 transition-2"
                                >
                                    #Tag
                                </button>
                            </div>
                            <hr />
                        </div>
                    </div>
                </b-row>
            </b-container>
        </section>
        <section class="faq-section pt-5">
            <b-container>
                <h1 class="w-100 text-center faq-title">
                    Perguntas Frequentes
                </h1>

                <b-row class="w-100 m-auto">
                    <!-- TESTE COM ACCORDION - BOOTSTRAP (COMPONENTIZAR DEPOIS [LIGAR COM API]) -->

                    <div class="accordion w-100" role="tablist">
                        <b-card no-body class="mb-2">
                            <b-card-header
                                header-tag="header"
                                class="p-1 card-header"
                                role="tab"
                            >
                                <b-button
                                    v-b-toggle:my-collapse
                                    block
                                    v-b-toggle.accordion-1
                                    variant="white"
                                    class="btn-acc text-left p-3 d-flex justify-content-between"
                                >
                                    <div>Lorem ipsum dolor sit amet?</div>
                                    <span class="when-open"
                                        ><i class="fas fa-caret-up fa-lg"></i
                                    ></span>
                                    <span class="when-closed"
                                        ><i class="fas fa-caret-down fa-lg"></i
                                    ></span>
                                </b-button>
                            </b-card-header>
                            <b-collapse
                                id="accordion-1"
                                accordion="my-accordion"
                                role="tabpanel"
                            >
                                <b-card-body class="pt-0">
                                    <b-card-text class="text-justify answer"
                                        >Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Minima veniam ex sequi
                                        quae assumenda? Repellat labore aliquam
                                        autem obcaecati aspernatur sequi
                                        accusamus vel, repudiandae, qui, ipsam
                                        nostrum officiis dolore at. Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Reiciendis maiores culpa molestias
                                        odio illum suscipit vero ad nisi eum
                                        reprehenderit animi, hic repellat
                                        deserunt natus architecto qui. Est,
                                        impedit doloribus!</b-card-text
                                    >
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-2">
                            <b-card-header
                                header-tag="header"
                                class="p-1 card-header"
                                role="tab"
                            >
                                <b-button
                                    v-b-toggle:my-collapse
                                    block
                                    v-b-toggle.accordion-2
                                    variant="white"
                                    class="btn-acc text-left p-3 d-flex justify-content-between"
                                >
                                    <div>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit?
                                    </div>
                                    <span class="when-open"
                                        ><i class="fas fa-caret-up fa-lg"></i
                                    ></span>
                                    <span class="when-closed"
                                        ><i class="fas fa-caret-down fa-lg"></i
                                    ></span>
                                </b-button>
                            </b-card-header>
                            <b-collapse
                                id="accordion-2"
                                accordion="my-accordion"
                                role="tabpanel"
                            >
                                <b-card-body class="pt-0">
                                    <b-card-text class="text-justify answer"
                                        >Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Minima veniam ex sequi
                                        quae assumenda? Repellat labore aliquam
                                        autem obcaecati aspernatur sequi
                                        accusamus vel, repudiandae, qui, ipsam
                                        nostrum officiis dolore at. Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Reiciendis maiores culpa molestias
                                        odio illum suscipit vero ad nisi eum
                                        reprehenderit animi, hic repellat
                                        deserunt natus architecto qui. Est,
                                        impedit doloribus!</b-card-text
                                    >
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-2">
                            <b-card-header
                                header-tag="header"
                                class="p-1 card-header"
                                role="tab"
                            >
                                <b-button
                                    v-b-toggle:my-collapse
                                    block
                                    v-b-toggle.accordion-3
                                    variant="white"
                                    class="btn-acc text-left p-3 d-flex justify-content-between"
                                >
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur?
                                    </div>
                                    <span class="when-open"
                                        ><i class="fas fa-caret-up fa-lg"></i
                                    ></span>
                                    <span class="when-closed"
                                        ><i class="fas fa-caret-down fa-lg"></i
                                    ></span>
                                </b-button>
                            </b-card-header>
                            <b-collapse
                                id="accordion-3"
                                accordion="my-accordion"
                                role="tabpanel"
                            >
                                <b-card-body class="pt-0">
                                    <b-card-text class="text-justify answer"
                                        >Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Minima veniam ex sequi
                                        quae assumenda? Repellat labore aliquam
                                        autem obcaecati aspernatur sequi
                                        accusamus vel, repudiandae, qui, ipsam
                                        nostrum officiis dolore at. Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Reiciendis maiores culpa molestias
                                        odio illum suscipit vero ad nisi eum
                                        reprehenderit animi, hic repellat
                                        deserunt natus architecto qui. Est,
                                        impedit doloribus!</b-card-text
                                    >
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-2">
                            <b-card-header
                                header-tag="header"
                                class="p-1 card-header"
                                role="tab"
                            >
                                <b-button
                                    v-b-toggle:my-collapse
                                    block
                                    v-b-toggle.accordion-4
                                    variant="white"
                                    class="btn-acc text-left p-3 d-flex justify-content-between"
                                >
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Amet dolor?
                                    </div>
                                    <span class="when-open"
                                        ><i class="fas fa-caret-up fa-lg"></i
                                    ></span>
                                    <span class="when-closed"
                                        ><i class="fas fa-caret-down fa-lg"></i
                                    ></span>
                                </b-button>
                            </b-card-header>
                            <b-collapse
                                id="accordion-4"
                                accordion="my-accordion"
                                role="tabpanel"
                            >
                                <b-card-body class="pt-0">
                                    <b-card-text class="text-justify answer"
                                        >Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Minima veniam ex sequi
                                        quae assumenda? Repellat labore aliquam
                                        autem obcaecati aspernatur sequi
                                        accusamus vel, repudiandae, qui, ipsam
                                        nostrum officiis dolore at. Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Reiciendis maiores culpa molestias
                                        odio illum suscipit vero ad nisi eum
                                        reprehenderit animi, hic repellat
                                        deserunt natus architecto qui. Est,
                                        impedit doloribus!</b-card-text
                                    >
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-row>
            </b-container>

            <div class="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="var(--azul-links)"
                        fill-opacity="1"
                        d="M0,128L480,96L960,160L1440,128L1440,320L960,320L480,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            estatisticas: [
                {name: "Metodologia", porcentagens: [{name: "Ativa", porcentagem: 70}, {name: "Passiva", porcentagem: 30}]},
                {name: "Discussão", porcentagens: [{name: "Social", porcentagem: 40}, {name: "Técnica", porcentagem: 60}]},
                {name: "Abordagem", porcentagens: [{name: "Teórica", porcentagem: 50}, {name: "Prática", porcentagem: 50}]},
                {name: "Avaliações", porcentagens: [{name: "Provas", porcentagem: 45}, {name: "Atividades", porcentagem: 55}]}
            ]
            
        }
    },
    methods: {
        setHighlight(porcentagem,color){
            if(porcentagem>50){
                return { color: color, fontWeight: 'bold' }
            }
            return { color: 'black', fontWeight: 'inherit' }
        }
    }
};
</script>

<style scoped>
li {
    list-style-type: disc;
    font-weight: bold;
}

h3 {
    margin-bottom: 1.5rem;
}

/* ESTÁTISTICAS SECTION */



.right-bar, .left-bar{
    border-radius: 100px;
}

.right-bar {
    background-color: #1155CC;
    height: 16px;
    
}

.left-bar {
    background-color: #77C159;
    height: 100%;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important; 
}

.classification-text{
    text-transform: uppercase;
}

/* FAQ SECTION */

.faq-section {
    background-color: var(--azul-primario);
}

/* Question config */

.card-header {
    background-color: transparent;
    border: none;
}

.btn-acc {
    background-color: var(--white);
    color: var(--azul-primario);
    border: none;
    outline: none !important;
    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    transition: 0.4s;
}

.btn-acc:hover {
    background-color: var(--cinza-principal);
}

.answer {
    color: var(--grey-500);
}

.faq-title {
    color: var(--white);
    font-family: "Nunito Sans";
    font-size: 39px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    word-break: normal;
    margin-bottom: 2rem;
}

/* Event holder - Button toggler */

.collapsed > .when-open,
.not-collapsed > .when-closed {
    display: none;
}

/* Media Queries */

@media screen and (max-width: 995px) {
    #recursos {
        height: auto !important;
    }

    .title {
        word-break: break-all;
    }
}

@media screen and (max-width: 766px) {
    #recursos {
        min-height: 200px !important;
    }

    #second-section {
        margin: 0 !important;
        padding-top: 0 !important;
    }
}

@media screen and (max-width: 576px) {
    #teste {
        margin: 0 1rem;
    }
}

@media screen and (max-width: 335px) {
    h1 {
        word-break: break-all;
    }
}
</style>
