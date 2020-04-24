<template>
    <div class="show-panel imgfill-w">
        <h1>瀑布流-横向排列方式</h1>
        <section>
            <h2>示例：</h2>
            <Select v-model="column" style="width:200px" class="mv-10">
                <Option v-for="item in [2,3,4,5,6]" :value="item" :key="item">{{ item }} 列</Option>
            </Select>

            <div>
                <div class="panel">
                    <div>
                        <lee-imgfill-h :imglist="imglist" :column="column"></lee-imgfill-h>
                    </div>
                    <codearea>
                        <script type="text/html" class="block">
                            <lee-imgfill-h :imglist="imglist" :column="4"></lee-imgfill-h>
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
            <h2>说明</h2>
            <div class="mb-10">
                参照花瓣网。
                满足以下条件：
                <p>1、图片比例固定（不变形）</p>
                <p>2、插空排列</p>
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
            imglist: imglist.slice(6,30),
            column: 4,

            propTitles: ["参数", "说明", "类型", "默认值", "是否必传"],
            propItems: [
                ["column", "显示列数", "Number", "4", "否"],
                ["imglist", "图片集合", "Array", "[]", "是"]
            ],
            imglistItems: [
                ["url", "图片地址", "String", "", "是"],
                ["width", "图片宽度（px）", "Number,String", "", "是"],
                ["height", "图片高度（px）", "Number,String", "", "是"]
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