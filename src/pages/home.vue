<template>
    <p>{{message}}</p>
    <input v-model="message">
</template>
<script>
    export default {
        ready: function() {
            console.log('home page is ready');
        },
        data: function() {
            return {
                message: 'this home page'
            }
        }
    }
</script>
<style lang="sass">
    @import './home.scss';
</style>