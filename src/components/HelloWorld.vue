<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{title}}</h2>
    <input type="number" v-model="inputValue">
    <span>{{computedInputValue}}</span>
    <button @click="changeTitle">change</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      title:"kskskskttttt",
      inputValue:null
    }
  },
  props: {
    msg: String
  },
  methods:{
    changeTitle(){
      this.title = "123321123";
      console.log(this.inputValue)
    }
  },
  computed:{
    computedInputValue(){
      let inputValue = this.inputValue;
      inputValue = parseInt(inputValue);
      return inputValue * inputValue;
    }
  },
  created: function () {
    console.log(1);
  },
  mounted() {
    console.log(this.$store.state.isStore);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
