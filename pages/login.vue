<template>
    <div>
        <Navbar />
        <div class="bg-login d-flex align-items-center justify-content-center">
            <div class="login-box">
                <h3 class='mb-4'>Realizar login</h3>
                <div class="login-form">
                    <label for="email">Email</label>
                    <b-form-input
                        id="email"
                        placeholder="Email"
                        required
                        type="email"
                    ></b-form-input>
                    <label for="email">Senha</label>
                    <b-form-input
                        id="senha"
                        placeholder="Senha"
                        required
                        type="password"
                    ></b-form-input>
                    <p class="text-right">
                        Esqueceu sua senha? <a href="">Clique aqui!</a>
                    </p>
                    <b-button class="w-100 login-btn">Acessar</b-button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
    text-align: center;
}
.login-box {
    width: 30%;
    height: 60%;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(7px);
    border-radius: 0.6rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.login-box > div > label {
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.login-box > div > input {
    margin-bottom: 1rem;
}

.login-box > div > button {
    background-color: var(--azul-primario);
    border: transparent;
}

.bg-login {
    width: 100%;
    height: calc(100vh - 112px);
    background: linear-gradient(
            60deg,
            rgba(1, 75, 140, 0.8),
            rgba(236, 54, 115, 0.651),
            rgba(124, 54, 236, 0.75)
        ),
        url("../assets/img/bg-imd.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.login-box{
    max-height: 430px;
    min-height: 360px;
}

.login-btn{
    transition: .4s !important;
    background-color: var(--azul-primario);
}

.login-btn:hover{
    background-color: var(--azul-links);
}

@media screen and (max-width: 1200px) {
    .login-box {
        width: 50%;
        height: 80%;
    }
}

@media screen and (max-width: 768px) {
    .login-box {
        width: 80%;
        height: 80%;
    }
}


@media screen and (max-width: 548px) {
    .login-box {
        width: 80%;
        height: 80%;
    }
    h3{
        font-size:1.6rem;
    }

}

</style>
