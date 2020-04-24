<template>
    <div class="show-panel imgfill-w">
        <h1>瀑布流-横向排列方式</h1>
        <section>
            <h2>示例：</h2>
            <div>
                <div class="panel">
                    <div>
                        <lee-imgfill-w :imglist="imglist" :standardHeight="150"></lee-imgfill-w>
                    </div>
                    <codearea>
                        <script type="text/html" class="block">
  <lee-imgfill-w :imglist="imglist" :standardHeight="150"></lee-imgfill-w>
                        </script>
                        <pre>

imglist: [
    {
        url: 'xxx',
        width: 500,
        height: 300
    },
    ...
]
                        </pre>
                    </codearea>
                </div>
            </div>
        </section>
        <section class="props-panel">
            <h2>基础用法</h2>
            <div>
                参照百度。
                满足以下条件：
                <p>1、图片比例固定</p>
                <p>2、同一行等高</p>
                <p>3、所有行等宽（刚好排满）</p>
            </div>

            <h2>Props</h2>
            <data-table :titles="propTitles" :items="propItems" />

            <h2>imglist Props</h2>
            <data-table :titles="propTitles" :items="imglistItems" />
        </section>
    </div>
</template>

<script>
import imglist from "./mock.js";
export default {
    name: "",
    data() {
        return {
            imglist: imglist.slice(6, 18),

            propTitles: ["参数", "说明", "类型", "默认值", "是否必传"],
            propItems: [
                ["standardHeight", "每一行基准高度", "Number", "200", "否"],
                ["imglist", "图片集合", "Array", "[]", "是"]
            ],
            imglistItems: [
                ["url", "图片地址", "String", "", "是"],
                ["width", "图片宽度（px）", "Number,String", "", "是"]
            ]
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