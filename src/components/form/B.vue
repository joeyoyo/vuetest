<template>
    <div id="B">HELLO</div>
</template>

<script>
    export default {
        name: "componentB",
        mounted() {
            this.$on('on-message', (text) =>{
                console.log(text);
            });
        },
        // methods: {
        //     showMessage(text) {
        //         window.alert(text);
        //
        //     }
        // }
    }
</script>

<style scoped>

</style>