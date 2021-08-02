<template>
    <div>
        <Navbar />

        <div class="container mt-4">
            <h2>Cadastro de disciplinas</h2>
            <form class="cadastro-form">

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
                                <span class="input-group-text" id="inputGroupPrepend">#</span>
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
                    <div class="d-flex justify-content-between flex-wrap align-items-center">
                        <div class="col-md-5 p-0">
                            <label for="sinopse">Sinopse</label>
                            <b-form-textarea
                                id="sinopse"
                                placeholder="Digite algo sobre a sua disciplina..."
                                rows="12"
                                max-rows="12"
                            ></b-form-textarea>
                        </div>
                        <div class="col-md-6 p-0 d-flex flex-column justify-content-around h-75">

                            <div>
                                <label for="sinopse">Classificações</label>
                                <input type="range" min="1" max="100" value="50" class="slider">
                            </div>

                            <div>
                                <label for="sinopse">Classificações</label>
                                <input type="range" min="1" max="100" value="50" class="slider">
                            </div>

                            <div>
                                <label for="sinopse">Classificações</label>
                                <input type="range" min="1" max="100" value="50" class="slider">
                            </div>

                            <div>
                                <label for="sinopse">Classificações</label>
                                <input type="range" min="1" max="100" value="50" class="slider">
                            </div>

                            <div>
                                <label for="sinopse">Classificações</label>
                                <input type="range" min="1" max="100" value="50" class="slider">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-2 d-flex flex-wrap justify-content-between align-items-center">

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
                                <span class="input-group-text" id="inputGroupPrepend"><i class="fas fa-link"></i></span>
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
                                <span class="input-group-text" id="inputGroupPrepend"><i class="fas fa-link"></i></span>
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
                                <span class="input-group-text" id="inputGroupPrepend"><i class="fas fa-link"></i></span>
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
                                <span class="input-group-text" id="inputGroupPrepend"><i class="fas fa-link"></i></span>
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
                        <b-button type="submit" class="mt-2 btn-danger transition-2" to="/cadastro_disciplina">Cancelar</b-button>
                        <b-button type="submit" class="mt-2 btn-success transition-2" to="/cadastro_disciplina">Salvar</b-button>
                    </div>
                </div>
            </form>
        </div>

        <Footer class="footer-gap"/>
    </div>
</template>

<style scoped>

/* Slider */
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

/* Sinopse */

#sinopse{
    border-radius: 10px;
}

/* footer */
.footer-gap{
    margin-top: 5.2rem;
}
</style>
