<template>
    <div>
        <div v-for="item in estatisticas" :key="item" class="classification">
            <p class='text-center larger-p font-weight-bold'>{{item.name}}</p>
            <div class="bar-info d-flex align-items-center">
                <p class='m-0 pb-0 pr-3' :style="setHighlight(item.porcentagens[0].porcentagem, '#77C159')">{{item.porcentagens[0].porcentagem}}%</p>
                <div class="right-bar w-100">
                    <div class="left-bar" :style="'width: ' + item.porcentagens[0].porcentagem + '%'"></div>
                </div>
                <p class='m-0 pb-0 pl-3' :style="setHighlight(100-item.porcentagens[0].porcentagem, '#1155CC')">{{item.porcentagens[1].porcentagem}}%</p>
            </div>                    
            <div class="classification-text d-flex justify-content-between">
                <p v-for="porcentagem in item.porcentagens" :key="porcentagem">{{porcentagem.name}}</p>
            </div>                                
        </div>
    </div>
</template>

<script>
export default {
    name: 'Analytics',

    data(){
        return{
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

}
</script>

<style scoped>

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

</style>

