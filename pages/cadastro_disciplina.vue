<template>
    <div>
        <Navbar />

        <div class="container">
            <h2>Cadastre a sua disciplina</h2>
            <div class="cadastro-form">
                <div class="d-flex w-100">
                    <div class="w-70">
                        <label for="nome-disciplina">Nome da disciplina</label>
                        <b-form-input
                            id="nome-disciplina"
                            placeholder="Nome da disciplina"
                            required
                            type="text"
                        ></b-form-input>
                    </div>
                    <div class="w-30">
                        <label for="codigo-disciplina">Código Disciplina</label>
                        <b-form-input
                            id="codigo-disciplina"
                            placeholder="Código da disciplina"
                            required
                            type="text"
                        ></b-form-input>
                    </div>
                </div>

                <label for="professor">Professor</label>
                <b-form-input
                    id="professor"
                    placeholder="Nome do professor"
                    required
                    type="text"
                ></b-form-input>

                <div class="d-flex">
                    <div class="w-50">
                        <label for="sinopse">Sinopse</label>
                        <b-form-textarea
                            id="sinopse"
                            placeholder="Digite algo sobre a sua disciplina..."
                            rows="12"
                            max-rows="12"
                        ></b-form-textarea>
                    </div>

                    <div class="sliders w-50">
                        <label for="sinopse">Classificações</label>
                        <div class="slider-component text-center">
                            <p>slider1</p>
                            <div class="d-flex align-items-center">
                                <p>60%</p>
                                <div class="slider w-100 h-3"></div>
                                <p>30%</p>
                            </div>
                        </div>
                        <div class="slider-component text-center">
                            <p>slider2</p>
                            <div class="d-flex align-items-center">
                                <p>60%</p>
                                <div class="slider w-100 h-3"></div>
                                <p>30%</p>
                            </div>
                        </div>
                        <div class="slider-component text-center">
                            <p>slider3</p>
                            <div class="slider w-100 h-3"></div>
                        </div>
                        <div class="slider-component text-center">
                            <p>slider4</p>
                            <div class="slider w-100 h-3"></div>
                        </div>
                    </div>
                </div>

                <div class="d-flex">
                    <div class="w-50">
                        <label for="sinopse">Obstaculos</label>
                        <b-form-textarea
                            id="sinopse"
                            placeholder="Digite algo sobre a sua disciplina..."
                            rows="12"
                            max-rows="12"
                        ></b-form-textarea>
                    </div>
                    <div class="w-50">
                        <label for="codigo-disciplina">Links</label>
                        <b-form-input
                            id="codigo-disciplina"
                            placeholder="Código da disciplina"
                            required
                            type="text"
                        ></b-form-input>
                        <label for="codigo-disciplina">Código Disciplina</label>
                        <b-form-input
                            id="codigo-disciplina"
                            placeholder="Código da disciplina"
                            required
                            type="text"
                        ></b-form-input>
                        <label for="codigo-disciplina">Código Disciplina</label>
                        <b-form-input
                            id="codigo-disciplina"
                            placeholder="Código da disciplina"
                            required
                            type="text"
                        ></b-form-input>
                        <label for="codigo-disciplina">Código Disciplina</label>
                        <b-form-input
                            id="codigo-disciplina"
                            placeholder="Código da disciplina"
                            required
                            type="text"
                        ></b-form-input>
                    </div>
                </div>

                <label for="info-complementar"
                    >Informações complementares</label
                >
                <b-form-textarea
                    id="sinopse"
                    placeholder="Digite algo sobre a sua disciplina..."
                    rows="12"
                    max-rows="12"
                ></b-form-textarea>

                <b-button class="w-100 login-btn" to="/cadastro_disciplina"
                    >Acessar</b-button
                >
            </div>
        </div>

        <Footer />
    </div>
</template>

<style scoped>
.slider {
    height: 3px;
    background-color: red;
}
</style>
