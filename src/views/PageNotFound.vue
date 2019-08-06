<template>
    <h1>{{msg}}</h1>
</template>

<script lang="ts">
    import {createComponent, value} from 'vue-function-api';

    const pageNotFoundComponent = createComponent({
        setup() {
            const msg = value('找不到页面好吧');
            return {msg};
        }
    });

    export default pageNotFoundComponent;
</script>

<style scoped>

</style>
