<template>
    <div class="codearea">
        <div class="code" :class="{'show': showCode}">
            <slot></slot>
        </div>
        <p v-show="!showCode" @click="showCode = true">
            <i class="icon"></i>
            显示代码
        </p>
        <p v-show="showCode" @click="showCode = false">
            <i class="icon close"></i>
        </p>
    </div>
</template>

<script>
export default {
    name: "aaa",
    data() {
        return {
            showCode: false
        };
    },
    mounted() {},
    methods: {}
};
</script>

<style lang="less" scoped>
.codearea {
    line-height: 1;
    .code {
        padding: @padding-l;
        background: #fafafa;
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
        height: 0;
        overflow: hidden;
        transition: height 0.3s;
        padding: 0;
        &.show {
            padding: 20px;
            height: auto;

        }
    }
    p {
        width: 100%;
        border-top: 1px solid #eee;
        text-align: center;
        cursor: pointer;
        color: #ddd;
        height: 3.5rem;
        line-height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            color: @topicColor;
            .icon {
                background-image: url(../assets/down-arrow-active.png);
            }
        }
        .icon {
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 5px;
            background: url(../assets/down-arrow.png);
            background-size: contain;
            &.close {
                transform: rotate(180deg);
            }
        }
    }
}
</style>
