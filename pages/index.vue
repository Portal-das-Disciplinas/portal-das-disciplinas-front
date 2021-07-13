<template>
  <div>
    <Navbar/>
    <!-- TESTANDO -->
    <button @click="increaseFontSize">+</button><button @click="resetFontSize">A</button><button  @click="decreaseFontSize">-</button>
    <!-- FIM TESTANDO -->
    <!-- First section - Navbar + Video + Short description -->
    <section class="mt-5 mb-5" >
      <b-container>
        <b-row>
          <h1 class="display-title display text-center w-100">Portal das Disciplinas LASCOU</h1>
          <p class="text-description grey-500 larger-p text-center mt-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sequi iusto sed possimus quos accusamus necessitatibus expedita excepturi, eius mollitia, dolorum odit quas nemo libero saepe architecto repudiandae sint nostrum? 
          </p>
        </b-row>
        <div class="video-container col-md-8 mt-5">
          <Video class="video-home" link="https://www.youtube.com/embed/fh5QD_4mRQw" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore beatae dolor veritatis."/>        
        </div>
      </b-container>
    </section>

    <!-- Second section - description + Cards + waves -->

    <section class="bg-alt p-relative mt-7">
      <div class="wave-container wave-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--azul-waves-alt)" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,218.7C960,203,1056,181,1152,192C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
		<b-container>
			<b-row class="mb-5">
        <div class="index-100 mt-6 w-100">
          <h1 class="display-title-gallery ">Disciplinas Cadastradas</h1>
          <p class="gallery-description mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati possimus eos expedita eum veritatis quasi quae architecto exercitationem molestiae tempore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>
			</b-row>
      <!--<hr class="index-100 p-relative index-100 hr-cards w-100">-->
			<b-row>
				<b-col v-for="item in items" :key="item" class='d-flex flex-wrap'>

          <Card-alt class="my-3" Professor="Francisco Carlos" Name="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati possimus eos expedita eum veritatis quasi quae architecto exercitationem molestiae tempore! Lorem ipsum dolor sit, amet consectetur adipisicing elit." Synopsis="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati possimus eos expedita eum veritatis quasi quae architecto exercitationem molestiae tempore! Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>
        
        </b-col>
			</b-row>
		</b-container>
    <div class="wave-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--azul-waves)" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,224C384,192,480,96,576,96C672,96,768,192,864,202.7C960,213,1056,139,1152,96C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
export default {

  data(){
    return{
		items: ['A', 'B', 'C', 'D', 'E', 'F']

    }
    
  },
  methods:{
    decreaseFontSize(){
      document.getElementsByTagName('html')[0].style.fontSize = '80%'
    },
    increaseFontSize(){
      document.getElementsByTagName('html')[0].style.fontSize = '120%'
    },
    resetFontSize(){
      document.getElementsByTagName('html')[0].style.fontSize = '100%'
    }
  }
}
</script>

<style>
  @import '../assets/main.css';
</style>

<style scoped>
   
  /* Media Queries */

  /* @media screen and (max-width: 490px){
    
  } */

  @media screen and (max-width: 545px){
    .text-description{
      margin: 1rem;
    }
  }
</style>