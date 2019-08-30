<template>
    <div>
        second page
        <div>{{dubbleNumber}}</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "second",
        computed:{
            ...mapGetters('module2',[
               'dubbleNumber'
            ])
        },
        mounted() {
            console.log(this.$store.state.test)
        }
    }
</script>

<style scoped>

</style>