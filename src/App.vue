<template>
    <div id="app">
        <div>
            <!-- header -->
            <div class="header">
                <top-bar
                    :theme="$route.path == '/home' ? 'glass' : 'fill'"
                    :showSearch="$route.path != '/home'"
                ></top-bar>
            </div>
            <router-view></router-view>
        </div>
        <Cat></Cat>
    </div>
</template>
<script>
import topBar from "./pages/top-bar";
import Cat from "_c/cat/cat.vue";
export default {
    components: { topBar, Cat },
    name: "app",
    data() {
        return {};
    }
};
</script>
<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
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
