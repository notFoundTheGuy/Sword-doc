<template>
    <div class="show-panel">
        <section>
            <h1>日程安排</h1>
            <div>用于一些需要多方面协调、多因素影响的行程安排方面的场景。能够直观的体现出矛盾和冲突，优化交互。</div>
            <div>角色：操作者和被操作对象。</div>
        </section>

        <section>
            <h2>基础用法</h2>
            <div>
                <p>示例：</p>
                <div class="panel">
                    <div>
                        <section>
                            <p>说明：</p>
                            <div class="ml-20">
                                <p>1、时间段均以 开始时间+持续时间表示：</p>
                                <p>2、本例以面试安排为例，旨在避免邀约时间冲突问题</p>
                            </div>
                        </section>
                        <section>
                            <h3>忙碌时间（淡蓝色表示）：</h3>
                            <div class="ml-20">
                                <p>日视图：</p>
                                <p>面试官1：11:00 + 120min；2:30 + 60min</p>
                                <p>面试官2：4:30 + 35min；19:00 + 60min</p>
                                <p class="mt-10">周视图：</p>
                                <p>忙碌时间：如图，略</p>
                                <p class="mt-10">(提供日期切换事件，可动态更新面试官当天的忙碌时间)</p>
                            </div>
                        </section>
                        <section>
                            <h3>时间安排：</h3>
                            <div
                                v-for="(item, index) in candidates"
                                :key="index"
                                class="candidate"
                                @click="selectItem(item)"
                                :class="{active: item.active}"
                            >
                                <span class="mr-10">候选者{{index + 1}}:</span>
                                <DatePicker
                                    type="date"
                                    :value="item.date"
                                    @on-change="onInterviewDateChange(item, $event)"
                                    placeholder="Select date"
                                    style="width: 150px"
                                ></DatePicker>
                                <TimePicker
                                    v-model="item.start"
                                    format="HH:mm"
                                    placeholder="Select time"
                                    style="width: 100px;margin-right:10px;"
                                ></TimePicker>
                                <Select v-model="item.duration" class="mr-10" style="width:100px">
                                    <Option
                                        v-for="item in durationOptions"
                                        :value="item.value"
                                        :key="item.value"
                                    >{{ item.label }}</Option>
                                </Select>
                            </div>
                        </section>
                        <lee-schedule
                            :collapse="!scheduleOpened"
                            :timeList="candidates"
                            :operators="interviewers"
                            @dateChange="onDateChange($event)"
                            @openStatusChange="isOpen => scheduleOpened = isOpen"
                        ></lee-schedule>
                    </div>
                    <codearea>
                        <script type="text/html" style="display:block">
  <lee-schedule
      :collapse="!scheduleOpened"
      :timeList="candidates"
      :operators="interviewers"
  ></lee-schedule>
                        </script>
                        <pre>

//面试官忙碌时间 -- 日视图
dayInterviewers: [
    {
        name: "面试官1",
        id: 1,
        busyTimesArr: [
            [
                {
                    start: "11:00",
                    duration: 120
                },
                {
                    start: "2:30",
                    duration: 60
                }
            ]
        ]
    },
    {
        name: "面试官2",
        id: 2,
        busyTimesArr: [
            [
                {
                    start: "19:00",
                    duration: 35
                },
                {
                    start: "4:30",
                    duration: 60
                }
            ]
        ]
    }
],

//面试官忙碌时间 -- 周视图
weekInterviewers: [
    {
        name: "面试官1",
        id: 1,
        busyTimesArr: [
            [
                {
                    start: "1:00",
                    duration: 45
                },
                {
                    start: "3:30",
                    duration: 80
                }
            ],
            [
                {
                    start: "14:00",
                    duration: 90
                },
                {
                    start: "2:30",
                    duration: 60
                }
            ],
            [
                {
                    start: "1:30",
                    duration: 90
                }
            ],
            [
                {
                    start: "11:00",
                    duration: 45
                },
                {
                    start: "7:30",
                    duration: 60
                }
            ],
            [
                {
                    start: "15:00",
                    duration: 45
                }
            ],
            [
                {
                    start: "1:00",
                    duration: 45
                },
                {
                    start: "4:30",
                    duration: 60
                }
            ],
            [
                {
                    start: "11:30",
                    duration: 90
                }
            ]
        ]
    },
    {
        name: "面试官2",
        id: 2,
        busyTimesArr: [
            [
                {
                    start: "11:00",
                    duration: 45
                },
                {
                    start: "4:30",
                    duration: 60
                }
            ],
            [
                {
                    start: "15:00",
                    duration: 15
                },
                {
                    start: "4:30",
                    duration: 60
                }
            ],
            [
                {
                    start: "4:30",
                    duration: 90
                }
            ],
            [],
            [
                {
                    start: "11:00",
                    duration: 45
                }
            ],
            [
                {
                    start: "11:00",
                    duration: 45
                },
                {
                    start: "4:30",
                    duration: 60
                }
            ],
            []
        ]
    }
],

//候选者们(或每一场面试)
candidates: [
    {
        start: "4:56",
        duration: 30,
        date: "2019-08-07"
    },
    {
        start: "4:30",
        duration: 60,
        date: "2019-08-07"
    },
    {
        start: "11:20",
        duration: 30,
        date: "2019-08-07",
        active: true
    },
    {
        start: "14:20",
        duration: 30,
        date: "2019-08-08"
    },
    {
        start: "14:20",
        duration: 60,
        date: "2019-08-09"
    }
],
                        </pre>
                    </codearea>
                </div>
            </div>
        </section>

        <!-- 文档 -->
        <section  class="props-panel">
            <h2>说明</h2>
            <div class="explain">
                <p>1. 时间段均以 开始时间+持续时间 表示</p>
                <p>2. 默认配色状态：</p>
                <div class="ml-20">
                    <p>
                        操作者忙碌时间：
                        <span class="status-busy"></span>
                    </p>
                    <p>
                        冲突状态：
                        <span class="status-conflict"></span>
                    </p>
                    <p>
                        有效安排：
                        <span class="status-enable"></span>
                    </p>
                </div>
                <p>3. 支持周视图和日视图</p>
            </div>


            <h2>Props</h2>
            <data-table :titles="propTitles" :items="propItems" />

            <h2>Events</h2>
            <data-table :titles="eventTitles" :items="evnetItems" />

            <h2>TimeList Props</h2>
            <data-table :titles="propTitles" :items="timeListItems" />

            <h2>Operators Props</h2>
            <data-table :titles="propTitles" :items="operatorsItems" />
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            scheduleOpened: true,
            testTextarea: "",
            showScheduleView: true,
            candidates: [
                {
                    start: "4:56",
                    duration: 30,
                    date: "2020-04-23",
                    active: true
                },
                {
                    start: "4:30",
                    duration: 60,
                    date: "2020-04-23"
                },
                {
                    start: "11:20",
                    duration: 30,
                    date: "2020-04-24"
                },
                {
                    start: "13:40",
                    duration: 60,
                    date: "2020-04-24"
                },
                {
                    start: "14:20",
                    duration: 60,
                    date: "2020-04-24"
                }
            ],
            interviewers: [],
            dayInterviewers: [
                {
                    name: "面试官1",
                    id: 1,
                    busyTimesArr: [
                        [
                            {
                                start: "11:00",
                                duration: 120
                            },
                            {
                                start: "2:30",
                                duration: 60
                            }
                        ]
                    ]
                },
                {
                    name: "面试官2",
                    id: 2,
                    busyTimesArr: [
                        [
                            {
                                start: "19:00",
                                duration: 35
                            },
                            {
                                start: "4:30",
                                duration: 60
                            }
                        ]
                    ]
                }
            ],
            weekInterviewers: [
                {
                    name: "面试官1",
                    id: 1,
                    busyTimesArr: [
                        [
                            {
                                start: "1:00",
                                duration: 45
                            },
                            {
                                start: "3:30",
                                duration: 80
                            }
                        ],
                        [
                            {
                                start: "14:00",
                                duration: 90
                            },
                            {
                                start: "2:30",
                                duration: 60
                            }
                        ],
                        [
                            {
                                start: "1:30",
                                duration: 90
                            }
                        ],
                        [
                            {
                                start: "11:00",
                                duration: 45
                            },
                            {
                                start: "7:30",
                                duration: 60
                            }
                        ],
                        [
                            {
                                start: "15:00",
                                duration: 45
                            }
                        ],
                        [
                            {
                                start: "1:00",
                                duration: 45
                            },
                            {
                                start: "4:30",
                                duration: 60
                            }
                        ],
                        [
                            {
                                start: "11:30",
                                duration: 90
                            }
                        ]
                    ]
                },
                {
                    name: "面试官2",
                    id: 2,
                    busyTimesArr: [
                        [
                            {
                                start: "11:00",
                                duration: 45
                            },
                            {
                                start: "4:30",
                                duration: 60
                            }
                        ],
                        [
                            {
                                start: "15:00",
                                duration: 15
                            },
                            {
                                start: "4:30",
                                duration: 60
                            }
                        ],
                        [
                            {
                                start: "4:30",
                                duration: 90
                            }
                        ],
                        [],
                        [
                            {
                                start: "11:00",
                                duration: 45
                            }
                        ],
                        [
                            {
                                start: "11:00",
                                duration: 45
                            },
                            {
                                start: "4:30",
                                duration: 60
                            }
                        ],
                        []
                    ]
                }
            ],
            durationOptions: [
                {
                    label: "15分钟",
                    value: 15
                },
                {
                    label: "30分钟",
                    value: 30
                },
                {
                    label: "45分钟",
                    value: 45
                },
                {
                    label: "1小时",
                    value: 60
                },
                {
                    label: "1小时30分钟",
                    value: 90
                },
                {
                    label: "2小时",
                    value: 120
                },
                {
                    label: "2小时30分钟",
                    value: 150
                },
                {
                    label: "3小时",
                    value: 180
                }
            ],

            propTitles: ["参数", "说明", "类型", "默认值", "是否必传"],
            propItems: [
                ["distance", "侧边时间显示步长", "Number", "60", "否"],
                ["timeList", "被操作对象列表", "Array", "[]", "是"],
                ["operators", "操作者/参照对象集合", "Array", "[]", "是"],
                ["collapse", "是否收起", "Boolean", "true", "否"],
                ["subject", "操作中条目显示事项", "String", "'正在安排事项'", "否"]
            ],
            timeListItems: [
                ["start", "开始时间", "String", "", "是"],
                ["duration", "持续时长", "Number", "", "是"],
                ["date", "日期", "String", "", "是"],
                ["active", "是否为当前操作条目", "Boolean", "false", "否"],
            ],
            operatorsItems: [
                ["name", "名称", "String", "", "是"],
                ["id", "id", "Number", "", "是"],
                ["busyTimesArr", "忙碌时间（内部数组区分日/周视图）", "二维数组", "[[]]", "是"],
            ],
            eventTitles: ["事件名", "说明", "返回值集合"],
            evnetItems: [
                ['dateChange','日期更改事件','当前日期'],
                ['openStatusChange','日程面板关闭/打开','是否收起(Boolean)']
            ],
        };
    },
    created() {
        this.interviewers = this.weekInterviewers;
        // 演示方便，动态修改面试时间为今天
        let year = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let day = new Date().getDate();
        this.candidates.forEach((item, index) => {
            item.date = `${year}-${this.pushZero(month)}-${this.pushZero(day)}`;
            if(index >= 3) {
                item.date = `${year}-${this.pushZero(month)}-${this.pushZero(day + 1)}`;
            }
        });
    },
    methods: {
        pushZero(num) {
            return num < 10 ? "0" + num : num + "";
        },
        selectItem(item) {
            this.candidates.forEach(item => {
                this.$set(item, "active", false);
            });
            item.active = true;
        },
        onStepChange(item) {
            // console.log(item);
        },
        onDateChange(date) {
            if (date.cycle == "day") {
                this.interviewers = this.dayInterviewers;
            } else {
                this.interviewers = this.weekInterviewers;
            }
        },
        onInterviewDateChange(item, date) {
            item.date = date;
        }
    }
};
</script>

<style lang="less" scoped>
.candidate {
    width: 60%;
    min-width: 500px;
    border: 1px solid transparent;
    padding: 20px;
    border-radius: 5px;
    &.active {
        border-color: @topicColor;
    }
}
.panel {
    color: #666;
    p {
        line-height: 1.8;
    }
    h3 {
        font-size: 1.2rem;
        padding: 20px 0 10px 0;
    }
}

.explain {
    margin-bottom: 20px;
    p {
        display: flex;
        align-items: center;
        span {
            display: inline-block;
            width: 30px;
            height: 18px;
            border-radius: 3px;

            &.status-busy {
                background-color: rgba(62, 116, 230, 0.1);
            }
            &.status-conflict {
                background-color: rgba(231, 102, 59, 0.2);
            }
            &.status-enable {
                background-color: rgba(139, 85, 219, 0.15);
            }
        }
    }
}
</style>