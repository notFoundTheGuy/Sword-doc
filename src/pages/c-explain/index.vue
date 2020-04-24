<template>
    <div class="show-panel explain">
        <section>
            <div>
                <h1>安装</h1>
                <div class="code mt-10">npm install the-sword --save-dev</div>
            </div>

            <div>
                <h1>使用</h1>
                <div>
                    <h3>全局引入</h3>
                    <div class="code">
                        <p>import sword from 'the-sword'</p>
                        <p>vue.use(sword)</p>
                    </div>

                    <h3 class="mt-10">按需引入</h3>
                    <div class="code">开发中。。。</div>
                </div>
            </div>
        </section>

        <!-- <section>
            <h2>安装</h2>
            <div>
                <p>示例：</p>
            </div>
        </section>-->
    </div>
</template>

<style lang="less" scoped>
.explain {
    >section>div {
        padding-bottom: 20px;
        h1 {
            color: #333;
        }
        h3 {
            font-size: 1.25rem;
            padding: 10px;
        }
    }
    .code {
        background: #eee;
        padding: 10px 20px;
        border-radius: 3px;
        line-height: 1.8;
        color: #333;
    }
}
</style>