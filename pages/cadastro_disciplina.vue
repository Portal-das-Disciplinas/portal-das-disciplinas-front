<template>
    <div>
        <Navbar />

        <div class="container mt-4">
            <h2 id="main-title" class="mb-4">Cadastro de disciplinas</h2>
            <form class="cadastro-form" action="/">
                <div class="d-flex w-100 justify-content-between">
                    <div class="p-0 col-md-8">
                        <label for="nome-disciplina">Nome da disciplina</label>
                        <b-form-input
                            id="nome-disciplina"
                            placeholder="Programação com Banco de Dados"
                            required
                            type="text"
                        ></b-form-input>
                    </div>
                    <div class="p-0 col-md-4">
                        <label for="codigo-disciplina">Código Disciplina</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span
                                    class="input-group-text"
                                    id="inputGroupPrepend"
                                    >#</span
                                >
                            </div>

                            <b-form-input
                                id="codigo-disciplina"
                                placeholder="IMD0403"
                                required
                                type="text"
                            ></b-form-input>
                        </div>
                    </div>
                </div>

                <div class="mt-2">
                    <label for="professor">Professor</label>
                    <b-form-input
                        id="professor"
                        placeholder="José Israel Soares dos Santos"
                        required
                        type="text"
                    ></b-form-input>
                </div>

                <div class="mt-2">
                    <div
                        class="d-flex justify-content-between flex-wrap align-items-center"
                    >
                        <div class="col-md-5 p-0">
                            <label for="sinopse">Sinopse</label>
                            <b-form-textarea
                                id="sinopse"
                                placeholder="Digite algo sobre a sua disciplina..."
                                rows="12"
                                max-rows="12"
                            ></b-form-textarea>
                        </div>
                        <div
                            class="col-md-6 p-0 d-flex flex-column justify-content-around h-75"
                        >
                            <div>
                                <label for="sinopse">Classificações</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="50"
                                    class="slider"
                                />
                            </div>

                            <div>
                                <label for="sinopse">Classificações</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="50"
                                    class="slider"
                                />
                            </div>

                            <div>
                                <label for="sinopse">Classificações</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="50"
                                    class="slider"
                                />
                            </div>

                            <div>
                                <label for="sinopse">Classificações</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="50"
                                    class="slider"
                                />
                            </div>

                            <div>
                                <label for="sinopse">Classificações</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value="50"
                                    class="slider"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="mt-2 d-flex flex-wrap justify-content-between align-items-center"
                >
                    <div class="col-md-5 p-0">
                        <label for="sinopse">Obstáculos</label>
                        <b-form-textarea
                            id="sinopse"
                            placeholder="Digite algo sobre a sua disciplina..."
                            rows="12"
                            max-rows="12"
                        ></b-form-textarea>
                    </div>
                    <div class="col-md-6 p-0">
                        <label for="codigo-disciplina">Links</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span
                                    class="input-group-text"
                                    id="inputGroupPrepend"
                                    ><i class="fas fa-link"></i
                                ></span>
                            </div>
                            <b-form-input
                                id="codigo-disciplina"
                                placeholder="Código da disciplina"
                                required
                                type="text"
                            ></b-form-input>
                        </div>

                        <label for="codigo-disciplina">Links</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span
                                    class="input-group-text"
                                    id="inputGroupPrepend"
                                    ><i class="fas fa-link"></i
                                ></span>
                            </div>
                            <b-form-input
                                id="codigo-disciplina"
                                placeholder="Código da disciplina"
                                required
                                type="text"
                            ></b-form-input>
                        </div>

                        <label for="codigo-disciplina">Links</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span
                                    class="input-group-text"
                                    id="inputGroupPrepend"
                                    ><i class="fas fa-link"></i
                                ></span>
                            </div>
                            <b-form-input
                                id="codigo-disciplina"
                                placeholder="Código da disciplina"
                                required
                                type="text"
                            ></b-form-input>
                        </div>

                        <label for="codigo-disciplina">Links</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span
                                    class="input-group-text"
                                    id="inputGroupPrepend"
                                    ><i class="fas fa-link"></i
                                ></span>
                            </div>
                            <b-form-input
                                id="codigo-disciplina"
                                placeholder="Código da disciplina"
                                required
                                type="text"
                            ></b-form-input>
                        </div>
                    </div>
                </div>

                <div class="mt-2">
                    <label for="info-complementar"
                        >Informações complementares</label
                    >
                    <b-form-textarea
                        id="sinopse"
                        placeholder="Digite algo sobre a sua disciplina..."
                        rows="12"
                        max-rows="12"
                    ></b-form-textarea>

                    <div class="float-right">
                        <b-button
                            type="submit"
                            class="mt-2 btn-danger transition-2"
                            >Cancelar</b-button
                        >
                        <b-button
                            type="submit"
                            class="mt-2 btn-success transition-2"
                            @click="callApi"
                            >Salvar</b-button
                        >
                    </div>
                </div>
            </form>
        </div>

        <Footer class="footer-gap" />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        callApi() {
            //token = 5|Y48kCaXfSvNaJIW1WpxXCQzd3Hag0EwQnW859VwQ
            const url = new URL(
                "https://portal-das-disciplinas.herokuapp.com/api/v1/disciplines"
            );

            let headers = {
                Authorization:
                    "Bearer 20|GMpmc62y8JwkPLknDbDBxzPPS077E9BSufaYE1Nt",
                "Content-Type": "application/json",
                Accept: "application/json"
            };

            let body = {
                name: "Exemplo II",
                code: "EXII",
                synopsis: "Esta disciplina \u00e9 um exemplo",
                difficulties: "mudar@123",
                "media-trailer":
                    "https:\/\/www.youtube.com\/watch?v=dQw4w9WgXcQ",
                "media-video": "https:\/\/www.youtube.com\/watch?v=dQw4w9WgXcQ",
                "media-podcast":
                    "https:\/\/www.youtube.com\/watch?v=dQw4w9WgXcQ",
                "media-material":
                    "https:\/\/drive.google.com\/file\/d\/1Xaeu31fSQY3bNmg38uM3P9fRl8ml3zes\/view?usp=sharing",
                professor_id: 1,
                "classificacao-metodologias-classicas": 1,
                "classificacao-metodologias-ativas": 1,
                "classificacao-discussao-social": 1,
                "classificacao-discussao-tecnica": 1,
                "classificacao-abordagem-teorica": 1,
                "classificacao-abordagem-pratica": 1,
                "classificacao-av-provas": 1,
                "classificacao-av-atividades": 1
            };

            fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            }).then(response => console.log(response.json()));

            // 3|xBYPj5w5qKBKsopBXWdWVgmIYmYz4phhV8jgNYyC
        }
    }
};
</script>

<style scoped>
/* Slider */
.slider {
    -webkit-appearance: none;
    width: 100%;
    opacity: 0.7;
    transition: 0.4s;
    height: 15px !important;
    border-radius: 10px !important;
    background: #d3d3d3;
    outline: none;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 22px; /* Set a specific slider handle width */
    height: 22px; /* Slider handle height */
    background: var(--azul-primario); /* Green background */
    cursor: pointer; /* Cursor on hover */
    border-radius: 100%;
}

.slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background-color: var(--azul-primario); /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider:hover {
    opacity: 1;
}

/* Sinopse */

#sinopse {
    border-radius: 10px;
}

/* footer */
.footer-gap {
    margin-top: 5.2rem;
}

/* Media Queries */

@media screen and (max-width: 255px) {
    #main-title {
        word-break: break-all;
    }
}
</style>
