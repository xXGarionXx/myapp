<template>
    <section>
        {{ currentDate.getFullYear() }}
    </section>
</template>

<script>
export default {
    data() {
        return {
            
            DateAusgabe: ''
        }
    },

    computed: {
        currentDate() {
            return new Date;
        }
    },

    methods: {

    }
}
</script>

<style lang="less" scoped>

</style>