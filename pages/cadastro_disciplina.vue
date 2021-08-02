<template>
    <div>
        <Navbar />

        <div class="container mt-4">
            <h2>Cadastre a sua disciplina</h2>
            <div class="cadastro-form">

                <div class="d-flex w-100 justify-content-between">
                    <div class="p-0 col-md-8">
                        <label for="nome-disciplina">Nome da disciplina</label>
                        <b-form-input
                            id="nome-disciplina"
                            placeholder="Nome da disciplina"
                            required
                            type="text"
                        ></b-form-input>
                    </div>
                    <div class="p-0 col-md-4">
                        <label for="codigo-disciplina">Código Disciplina</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend">#</span>
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
                    <label for="professor">Professor</label>
                    <b-form-input
                        id="professor"
                        placeholder="Nome do professor"
                        required
                        type="text"
                    ></b-form-input>
                </div>

                <div class="mt-2">
                    <div class="d-flex justify-content-between flex-wrap">
                        <div class="col-md-5 p-0">
                            <label for="sinopse">Sinopse</label>
                            <b-form-textarea
                                id="sinopse"
                                placeholder="Digite algo sobre a sua disciplina..."
                                rows="12"
                                max-rows="12"
                            ></b-form-textarea>
                        </div>

                        <div class="col-md-6 p-0">
                            <label for="sinopse" class="text-center w-100">Classificações</label>
                            <input type="range" min="1" max="100" value="50" class="slider">
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
.slider{
    -webkit-appearance: none;
    width: 100%;
    opacity: .7;
    transition: .4s;
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
</style>
