<template>
    <div class="layout">
        <section>
            <div class="main-menu">
                <main-menu></main-menu>
            </div>
            <div class="main-content">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import mainMenu from "./main-menu";
export default {
    name: "layout",
    components: { mainMenu },
    data() {
        return {};
    }
};
</script>

<style lang="less" scoped>
.layout {
    position: relative;
    z-index: 99;
    > section {
        position: fixed;
        height: calc(100vh - @headerHeight - 20px);
        height: calc(100% - @headerHeight - 20px);
        top: @headerHeight;
        left: 50%;
        margin-top: @padding-m;
        margin-left: -@mainWidth / 2;
        // transform: translateX(-50%);
        width: @mainWidth;
        min-width: @minMainWidth;
        display: flex;
        .main-menu {
            width: @menuWidth;
            padding: @padding-m;
            margin-right: @padding-m;
            background: #fff;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
        }
        .main-content {
            flex: 1;
            height: 100%;
            background: #fff;
            padding: @padding-m @padding-l;
            overflow-x: hidden;
            overflow-y: auto;
        }
    }
}
</style>

<style lang="less">
.show-panel {
    h1 {
        font-size: 24px;
        padding: 3px 0;
    }
    h2 {
        font-size: 20px;
        padding: 3px 0;
    }
    > section {
        > div {
            color: #666;
            > p {
                padding: 5px 0;
            }
        }
        margin-bottom: 30px;
        .panel {
            > div:first-child {
                padding: @padding-l;
            }
            border: 1px solid #eee;
        }
    }
    .props-panel {
        h2:not(:first-child) {
            margin-top: 10px;
        }
    }
    .code {
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }
}
</style>