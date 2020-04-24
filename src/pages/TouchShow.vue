<template>
    <div>
        <div class="wrapper">
            <div class="music-wrap">
                <lee-mplayer></lee-mplayer>
            </div>

            <article>
                <div class="banner">banner头图</div>
                <lee-sticky height="33" offset="0">
                    <div class="nav">这是一个sticky组件,吸附在顶部</div>
                </lee-sticky>
                <section class="content">
                    内容区域:
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi rerum ut soluta commodi nesciunt doloremque ad delectus, veritatis aliquam id dolor, impedit incidunt voluptates, assumenda quidem ab voluptatem maiores?
                    <lee-slide-operator>aaaa</lee-slide-operator>
                </section>
            </article>
        </div>
    </div>
</template>

<style lang="less" scoped>
.wrapper {
    border: 2px solid gray;
    width: 375px;
    height: 667px;
    position: relative;
    .music-wrap {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 30px;
        height: 30px;
        line-height: 1;
        margin: 0;
        padding: 0;
        font-size: 0;
        cursor: pointer;
        z-index: 999;
    }
    article {
        width: 375px;
        height: 667px;
        overflow-y: scroll;
        overflow-x: hidden;

        .banner {
            border: 1px solid blue;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .nav {
            background: cornflowerblue;
            color: #fff;
        }
        &> section.content {
            height: 800px;
        }
    }
}
</style>