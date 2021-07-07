<template>
  <div>
    <Navbar/>
    <section class="mt-4 mb-5" >
      <b-container>
        <b-row>
          <h1 class="display-title text-center w-100">Portal das Disciplinas</h1>
          <p class="text-center mt-3 text-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sequi iusto sed possimus quos accusamus necessitatibus expedita excepturi, eius mollitia, dolorum odit quas nemo libero saepe architecto repudiandae sint nostrum?
          </p>
        </b-row>
        <Video link="https://www.youtube.com/embed/fh5QD_4mRQw" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore beatae dolor veritatis."/>
      </b-container>
    </section>

    <section class="bg-alt section-gap">
		<b-container>
			<b-row class="mb-5">
				<h1 class="w-100 display-title-gallery">Disciplinas Cadastradas</h1>
				<p class="gallery-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati possimus eos expedita eum veritatis quasi quae architecto exercitationem molestiae tempore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
			</b-row>
			<b-row>
				<div class="d-flex align-items-center justify-content-between flex-wrap align-content-lg-center">
					<li v-for="item in items" :key="item"><Card-alt class="my-3" Professor="Francisco Carlos" Name="TI e Sociedade" Synopsis="Lorem ipsum dolor sit, amet tetur adipisicing elit. Amet dis cap diem"/><hr></li>
				</div>
			</b-row>
		</b-container>
    </section>
    <Footer/>
  </div>
</template>

<script>
export default {

  data(){
    return{
		items: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    }
  }
}
</script>

<style>
  @import '../assets/main.css';
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>