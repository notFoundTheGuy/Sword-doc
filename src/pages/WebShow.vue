<template>
    <div>
        <div>
            树表格测试：
            <lee-tree-table :nodes="treeNodes" :titles="titles"></lee-tree-table>
            <br>
            月份拖选组件：
            <mouth-pick-demo></mouth-pick-demo>
            <br>
            可编辑的下拉选择框: value: {{selectVal}}
            <p></p>
            <lee-edit-select
                v-model="selectVal"
                :listData="selectList"
                @search="onSelectSearch"
            ></lee-edit-select>
            <br>
            银行卡号输入（传入regexp对象）：
            <lee-format-input v-model="formatValue"/>
            <br>
            <lee-multi-steps :steps="steps"/>

            <br>
            展示面试安排表:
            <schedule-view-demo></schedule-view-demo>
        </div>
    </div>
</template>

<script>
import mouthPickerDemo from './mouth-pick-demo'
import scheduleViewDemo from './schedule-view-demo'
export default {
    name: "web",
    components: {
        'mouth-pick-demo': mouthPickerDemo,
        'schedule-view-demo': scheduleViewDemo,
    },
    data() {
        return {
            titles: [
                [
                    {
                        text: "表格列1"
                    },
                    {
                        text: "表格列1"
                    },
                    {
                        text: "表格列1"
                    }
                ]
            ],
            //此处row中的健key只起标识作用
            treeNodes: [
                {
                    id: 1,
                    row: {
                        列1: {
                            text: "父级"
                        },
                        列2: {
                            text: "content"
                        },
                        列3: {
                            text: "content"
                        }
                    }
                },
                {
                    id: 2,
                    pid: 1,
                    row: {
                        列1: {
                            text: "子行"
                        },
                        列2: {
                            text: "content"
                        },
                        列3: {
                            text: "content"
                        }
                    }
                }
            ],

            selectVal: '',
            selectList: [],

            formatValue: '',

            steps: {
                current: "5",
                name: "申请进度",
                data: [
                    {
                        title: "申请人提交",
                        notes: [""],
                        icon: "i-write"
                    },
                    {
                        title: "直属领导审批",
                        icon: "i-stamp"
                    },
                    {
                        title: "部门政委审批",
                        icon: "i-sign"
                    },
                    {
                        title: "准备电脑，提交配置",
                        icon: "i-wait"
                    },
                    {
                        children: [
                            {
                                title: "IT确认",
                                icon: "i-it"
                            },
                            {
                                title: "资产回收",
                                icon: "i-recovery"
                            }
                        ]
                    },
                    {
                        title: "完成",
                        icon: "i-done"
                    }
                ]
            }

        };
    },
    methods: {
        onSelectSearch(value) {
            if(value.length > 3) {
                value = value.slice(0,2)
            }
            this.selectList = []
            for(let i = 0;i<5;i++) {
                let indexVal = value + ''
                for(let j = 0;j < i;j++) {
                    indexVal += value
                }
                this.selectList.push(indexVal)
            }
        }
    }
};
</script>