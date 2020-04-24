<template>
    <div class="home-wrap">
        <section>
            <h1>Sword 组件库</h1>
            <div>Sword组件库用于个人工作积累和学习总结、对新特性的运用和尝试。同时抽象出一部分具有通用属性和场景的组件进行分享交流。</div>

            <div class="operates">
                <p class="btn" @click="$router.push('/main')">
                    查看详情
                    <img src="@/assets/arrow-r.png" alt="arrow-r" />
                </p>

                <p class="btn secondary" @click="toGithub">
                    <img src="@/assets/github1.png" alt="arrow-r" />
                    GITHUB
                </p>
            </div>
        </section>

        <img class="main-pic" src="@/assets/main-pic.png" alt="main-pic" />
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg3"></div>
    </div>
</template>

<script>
export default {
    name: 'home',
    methods: {
        toGithub() {
            window.open('')
        }
    }
}
</script>

<style lang="less" scoped>
.home-wrap {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #fff;
    z-index: 1;
    > section {
        color: @topicColor;
        width: 33rem;
        font-size: 1.2rem;
        position: absolute;
        top: 17%;
        left: 20%;
        z-index: 10;
        h1 {
            font-weight: bold;
            font-size: 3.25rem;
            margin-bottom: 15px;
        }
        div {
            line-height: 1.8;
        }
        .operates {
            display: flex;
            p.btn {
                width: 11rem;
                padding: 0.8rem 2rem;
                line-height: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 100px;
                font-size: 1.2rem;
                margin-top: 30px;
                background: @topicColor;
                margin-right: 20px;
                background-image: @btnLinear;
                color: #fff;
                cursor: pointer;
                user-select: none;
                img {
                    width: 1.5rem;
                }

                &.secondary {
                    background: #f6f6f6;
                    color: #333;
                    width: 8.5rem;
                    padding: 0.8rem 1rem;
                    img {
                        width: 1em;
                    }
                }
            }
        }
    }
    .main-pic {
        width: 44%;
        position: absolute;
        left: 45%;
        bottom: 15%;
        z-index: 5;
        user-select: none;
    }
    .bg1,
    .bg2,
    .bg3 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-size: 100%;
    }
    .bg1 {
        background-image: url(../../assets/home-bg1.png);
    }
    .bg2 {
        background-image: url(../../assets/home-bg2.png);
    }
    .bg3 {
        background-image: url(../../assets/home-bg3.png);
    }
}
</style>