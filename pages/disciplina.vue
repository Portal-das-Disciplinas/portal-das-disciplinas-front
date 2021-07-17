<template>
    <div>
        <Navbar/>
        <!-- Provavelmente vamos ter que criar um novo componente de thumbnail para disciplinas por causa da centralização do texto -->
        <Thumbnail type="disciplina" title="Matemática Elementar - IMD0001"/>

        <b-container>
            
            <!-- Left Side of the moon -->
            
            <div class="col-md-8 section-gap">
                <div>
                    <h1>Trailer & Classificação</h1>
                    <Video class="mt-4" link="https://www.youtube.com/embed/fh5QD_4mRQw" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore beatae dolor veritatis."/>
                </div>
                
                <div>
                    <h1>Sinopse</h1>
                    <p class="text-justify" style="line-height: 30px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus saepe qui soluta cum ipsam! Sunt fuga reprehenderit facere magni temporibus, doloremque dolor? Provident nulla possimus, ea maxime reiciendis quae veniam, dolor aperiam quo itaque iste architecto cupiditate laudantium ab tempore, vel fuga? Fugit, quis natus molestias dicta recusandae fuga quas voluptates provident soluta, quisquam ipsam. Dolores cupiditate neque accusantium reiciendis maiores quam modi quae animi, numquam ipsa placeat ex nesciunt rerum tenetur corrupti pariatur quasi molestias velit sint sed eaque repudiandae! Officiis debitis libero cumque, enim illum odit dolorum quo non nesciunt facilis harum reprehenderit possimus impedit ducimus fugiat placeat excepturi amet delectus? Sed, dolore aut? Sapiente fugiat illum ea in a recusandae? Quod quas dolorum, omnis doloremque blanditiis id.</p>
                </div>

                <div>
                    <h1>Vídeo</h1>
                    <Video class="mt-4" link="https://www.youtube.com/embed/fh5QD_4mRQw" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore beatae dolor veritatis."/>
                </div>

                <div class="break-word">
                    <h4>Obstáculos</h4>
                    <ul class="ml-3">
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nobis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>

                    <p><b>Professor:</b> João Ninguém</p>
                    <p><b>Email:</b> joaoninguem@ufrn.edu.br</p>
                </div>

            </div>
        </b-container>
        <Footer/>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

li{
    list-style-type: disc;
}

</style>