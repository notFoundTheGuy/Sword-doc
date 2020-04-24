<template>
    <div class="show-panel">
        <section>
            <h1>多支线进度条</h1>
            <div>如题。</div>
        </section>

        <section>
            <h2>基础用法</h2>
            <div>
                <p>示例：</p>
                <div class="panel">
                    <div>
                        <lee-multi-steps :steps="steps" :current="3" name="申请进度" />
                    </div>
                    <codearea>
                        <script type="text/html" style="display:block;">
  <lee-multi-steps :steps="steps" :current='3' name="申请进度"/>
                        </script>
                        <br />
                        <pre>
steps: [
    {
        title: "申请人提交",
        notes: ["申请人已经申请完毕"],
        icon: "i-write"
    },
    {
        children: [
            {
                title: "直属领导审批",
                icon: "i-it",
                notes: ["这是一条备注信息展示"]
            },
            {
                title: "二级领导审批",
                icon: "i-it"
            },
            {
                title: "终审确定",
                icon: "i-it"
            }
        ]
    },
    {
        title: "申请人提交",
        icon: "i-write"
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
                        </pre>
                    </codearea>
                </div>
            </div>
        </section>

        <section class="props-panel">
            <h2>Props</h2>
            <data-table :titles="propTitles" :items="propItems" />

            <h2>StepItem Props</h2>
            <data-table :titles="propTitles" :items="stepsItems" />
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            steps: [
                {
                    title: "申请人提交",
                    notes: ["申请人已经申请完毕"],
                    icon: "i-write"
                },
                {
                    children: [
                        {
                            title: "直属领导审批",
                            icon: "i-it",
                            notes: ["这是一条备注信息展示"]
                        },
                        {
                            title: "二级领导审批",
                            icon: "i-it",
                            status: "done"
                        },
                        {
                            title: "终审确定",
                            icon: "i-it"
                        }
                    ]
                },
                {
                    title: "申请人提交",
                    icon: "i-write"
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
            ],
            propTitles: ["参数", "说明", "类型", "默认值", "是否必传"],
            propItems: [
                ["current", "当前步骤", "Number", "0", "否"],
                ["name", "步骤条名称", "String", "", "否"],
                ["steps", "数据数据项", "Array", "[]", "是"],
                ["width", "宽度", "String,Number", "100%", "否"]
            ],
            stepsItems: [
                ["title", "当前步骤描述", "String", "", "是"],
                ["notes", "当前步骤备注", "Array", "[]", "否"],
                ["icon", "当前步骤图标(优先级低于状态)", "String", "", "否"]
            ]
        };
    }
};
</script>