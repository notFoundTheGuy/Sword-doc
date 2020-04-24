<template>
    <div class="show-panel">
        <section>
            <h1>月份拖选</h1>
            <div>用于一些需要时间拖拽选择的场景，可以更直观、准确的进行选择和展示。如会议预定、限定期限设置等。暂以月份选择为案例。</div>
            <div>todo:</div>
            <div>1、抽象成通用的拖选组件。</div>
            <div>2、支持多行多列。</div>
            <div>3、数据交互格式优化和拓展。</div>
        </section>

        <section>
            <h2>基础用法</h2>
            <div>
                <p>示例：</p>
                <div class="panel">
                    <div>
                        <lee-month-picker
                            :monthRange="['2018-01', '2021-12']"
                            :disabledMonths="['2018-1']"
                            :onceSelectedMonths="['2018-11','2018-12','2019-1','2019-2']"
                            @change="getSelectMonth"
                        />
                        <div class="result">
                            <p>已选月份:</p>
                            <span v-for="(item, index) in resultStrArray" :key="index">
                                {{item}}
                                <template v-if="index !== resultStrArray.length-1">,</template>
                            </span>
                        </div>
                    </div>
                    <codearea>
                        //所有数据交互格式 yyyy-mm
                        <script type="text/html" style="display:block">
                            <lee-month-picker
                                :monthRange="['2018-01', '2021-12']"
                                :disabledMonths="['2018-1']"
                            />
                        </script>
                    </codearea>
                </div>
            </div>
        </section>

        <section class="props-panel">
            <h2>Props</h2>
            <data-table :titles="propTitles" :items="propItems" />

            <h2>Events</h2>
            <data-table :titles="eventTitles" :items="eventItems" />
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            resultObjArray: [],
            resultStrArray: [],

            propTitles: ["参数", "说明", "类型", "默认值", "是否必传"],
            propItems: [
                ["mouthRange", "选择范围", "[start, end]", "[]", "是"],
                ["disabledMonths", "禁用部分", "Boolean", "", "否"],
                ["onceSelectedMonths", "已选部分", "Array", "[]", "否"],
                ["width", "宽度", "String,Number", "100%", "否"]
                ["hasReset", "是否显示重置按钮", "Boolean", "false", "否"],
            ],
            eventTitles: ["事件名", "说明", "返回值集合"],
            eventItems: [
                ["change", "数据更改触发", "{选择对线集合,格式化后的结果}"]
            ]
        };
    },
    methods: {
        getSelectMonth() {
            this.resultObjArray = arguments[0];
            this.resultStrArray = arguments[1];
        }
    }
};
</script>

<style lang="less" scoped>
.result {
    padding-top: 10px;
    p {
        padding: 5px 0;
    }
    span {
        color: #999;
    }
}
</style>