<template>
    <div>login page
        <div>{{test}}</div>
        <button @click="testAction">test</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    export default {
        name: "login",
        methods:{
            testAction(){
                this.POINT_ACTION();
            },
            ...mapActions('point',[
                'POINT_ACTION'
            ])
        },
        computed:{
            ...mapState('point',[
                'test'
            ])
        },
        mounted() {
            console.log(this.$store.state.test)
        }
    }
</script>

<style scoped>

</style>