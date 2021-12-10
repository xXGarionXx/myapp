<template>
    <router-view />
</template>

<style lang="less">
//@backgroundColor: #fa8072;
@backgroundColor: #c8c8c8;
@backgroundColorAkzent: gray; 

#body {
    background-color: @backgroundColor;
}

#app,*,*::after,*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {
    max-width: 40rem;
    margin: 0 auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
