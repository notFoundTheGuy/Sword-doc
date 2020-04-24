<template>
    <div class="show-panel imgfill-w">
        <h1>固定容器的图片展示</h1>
        <section>
            <h2>示例：</h2>
            <div>
                <div class="panel">
                    <div style="width: 500px;height: 300px;border: 1px solid red;">
                        <lee-imgcard :imgUrl="imglist[3].url"></lee-imgcard>
                    </div>
                    <div style="width: 500px;height: 300px;border: 1px solid red;">
                        <lee-imgcard :imgUrl="imglist[0].url"></lee-imgcard>
                    </div>
                    <section class="code">code</section>
                </div>
            </div>
        </section>
        <section>
            <h2>基础用法</h2>
            <div>
                参照百度。
                满足以下条件：
                <p>1、图片比例固定</p>
                <p>2、同一行等高</p>
                <p>3、所有行等宽（刚好排满）</p>
            </div>
        </section>
    </div>
</template>

<script>
import imglist from "./mock.js";
export default {
    name: "",
    data() {
        return {
            imglist: imglist.slice(6,18)
        };
    },
    mounted() {
        // console.log(imglist)
    }
};
</script>

<style lang="less" scoped>
.imgfill-w {
    img {
        border: 2px solid #fff;
    }
}
</style>