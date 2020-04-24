<template>
    <table>
        <thead>
            <tr>
                <th v-for="(th,idx) in titles" :key="idx">{{th}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(itemTr,index) in items" :key="index">
                <td v-for="(itemTd, idx) in itemTr" :key="'td'+idx">{{itemTd}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "datatable",
    props: {
        titles: {
            type: Array,
            default: () => {
                return []
            }
        },
        items: {
            type: Array,
            default: () => {
                return [[]]
            }
        }
    },
    data() {
        return {
            code: ""
        };
    },
    mounted() {
     
    },
    methods: {
        
    }
};
</script>

<style lang="less" scoped>
table {
    width: 100%;
    margin-bottom: 30px;
    color: #666;
    tr {
        border-bottom: 1px solid #dcdfe6;
    }
    th {
        color: #999;
    }
    th,td {
        max-width: 250px;
        height: 3.5rem;
        white-space: nowrap;
        line-height: 3.5rem;
        padding-right: 20px;
        text-align: left;
    }
}
</style>
