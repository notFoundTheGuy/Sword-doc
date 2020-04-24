<template>
    <div class="show-panel">
        <section>
            <h1>树表格</h1>
            <div>展示信息过多或者具有树形结构时使用。</div>
        </section>

        <section>
            <h2>基础用法</h2>
            <div>
                <p>示例：</p>
                <div class="panel">
                    <div>
                        <lee-tree-table :nodes="treeNodes" :titles="titles"></lee-tree-table>
                    </div>
                    <codearea>
                        <script type="text/html" class="block">
  <lee-tree-table :nodes="treeNodes" :titles="titles"></lee-tree-table>
                        </script>
                        <pre>

titles: [
    [
        {
            text: "表格列1"
        },
        {
            text: "表格列2",
        },
        {
            text: "表格列3",
        },
        {
            text: "跨行表头",
            rows: 2
        }
    ],
    [
        {
            text: "表格列1"
        },
        {
            text: "跨列表头",
            cols: 2
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
    },
    {
        id: 2,
        pid: 1,
        row: {
            列1: {
                text: "子行2"
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

            <h2>imglist Props</h2>
            <data-table :titles="propTitles" :items="treeNodeItems" />

            <h2>table-cell Props</h2>
            <data-table :titles="tablecellTitles" :items="tableCellItems" />
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            titles: [
                [
                    {
                        text: "表格列1"
                    },
                    {
                        text: "表格列2",
                    },
                    {
                        text: "表格列3",
                    },
                    {
                        text: "跨行表头",
                        rows: 2
                    }
                ],
                [
                    {
                        text: "表格列1"
                    },
                    {
                        text: "跨列表头",
                        cols: 2
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
                        },
                        列4: {
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
                        },
                        列4: {
                            text: "content"
                        }
                    }
                },
                {
                    id: 2,
                    pid: 1,
                    row: {
                        列1: {
                            text: "子行2"
                        },
                        列2: {
                            text: "content"
                        },
                        列3: {
                            text: "content"
                        },
                        列4: {
                            text: "content"
                        }
                    }
                },
                {
                    id: 2,
                    row: {
                        列1: {
                            text: "父级"
                        },
                        列2: {
                            text: "content"
                        },
                        列3: {
                            text: "content"
                        },
                        列4: {
                            text: "content"
                        }
                    }
                }
            ],

            propTitles: ["参数", "说明", "类型", "默认值", "是否必传","备注"],
            propItems: [
                ["titles", "表头", "Array", "[[]]", "否",'支持多行表头'],
                ["treeNodes", "表格数据", "Array", "[]", "是",'每一项为一行数据']
            ],
            treeNodeItems: [
                ["id", "表格行id", "String", "", "是","用于链接父子关系"],
                ["row", "当前行的数据项", "Array", "", "是",""]
            ],
            tablecellTitles: ["参数", "说明", "类型", "默认值", "是否必传"],
            tableCellItems: [
                ["text", "显示文本", "String", "", "是"],
                ["cols", "跨列", "Number", "1", "否"],
                ["rows", "跨行", "Number", "1", "否"]
            ]
        };
    }
};
</script>

<style lang="less" scoped>
</style>