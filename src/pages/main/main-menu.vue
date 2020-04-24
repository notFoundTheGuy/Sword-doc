<template>
    <div class="menu-wrap">
        <!-- header -->
        <section v-for="(item, index) in menuList" :key="index">
            <p>{{item.title}}</p>
            <ul>
                <li
                    :class="{active: item_inter.link === $route.path}"
                    v-for="(item_inter, idx) in item.subMenu"
                    :key="'inner_'+idx"
                    @click="onTabClick(item_inter)"
                >{{item_inter.name}}</li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: "main-menu",
    data() {
        return {
            menuList: [
                {
                    title: "Explain",
                    subMenu: [
                        {
                            name: "指南",
                            link: "/main/explain"
                        }
                    ]
                },
                {
                    title: "Time",
                    subMenu: [
                        {
                            name: "多支线进度条",
                            link: "/main/steps"
                        },
                        {
                            name: "时间拖选",
                            link: "/main/dragSelect"
                        },
                        {
                            name: "日程安排",
                            link: "/main/schedule"
                        }
                    ]
                },
                {
                    title: "Figure / Image",
                    subMenu: [
                        {
                            name: "瀑布流--纵向",
                            link: "/main/imgfill-h"
                        },
                        {
                            name: "瀑布流--横向",
                            link: "/main/imgfill-w"
                        },
                        // {
                        //     name: "固定",
                        //     link: "/main/imgcard"
                        // }
                    ]
                },
                {
                    title: "Layout",
                    subMenu: [
                        {
                            name: "树表格",
                            link: "/main/treeTable"
                        }
                    ]
                },
                {
                    title: "Performance",
                    subMenu: [
                        {
                            name: "CSS特效",
                            link: "/main/magic-css"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        onTabClick(item) {
            if (!item.link || item.link == this.$route.path) return;
            this.$router.push(item.link);
            this.$emit('menuChange')
        }
    }
};
</script>

<style lang="less" scoped>
@itemHeight: 45px;
.menu-wrap {
    > section {
        &:not(:last-child) {
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        &:not(:first-child) {
            padding-top: 10px;
        }
        p,
        li {
            height: @itemHeight;
            line-height: @itemHeight;
            padding: 0px 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        p {
            color: #999;
            line-height: 40px;
            height: 40px;
        }
        li {
            cursor: pointer;
            user-select: none;
            &.active {
                background: @topicColor;
                background-image: @btnLinear;
                border-radius: 3px;
                color: #fff;
            }
        }
    }
}
</style>