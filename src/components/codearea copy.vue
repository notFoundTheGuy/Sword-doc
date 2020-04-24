<template>
    <!-- <script type="text/html" style="display:block">
        <slot>
    </script>-->
    <div>
        <pre>
            <code class="hljs" ref="hlDiv" id="aaa">
                ```html
                <button>aa</button>
                    <span>aaaaaa</span>
                <slot></slot>
                ```
            </code>
        </pre>
        <div></div>---------------
        <div v-if="code" v-html="code"></div>
    </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai-sublime.css";

export default {
    name: "aaa",
    data() {
        return {
            code: ""
        };
    },
    mounted() {
        // hljs.initHighlightingOnLoad();
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        this.code = marked(this.formate(this.$refs.hlDiv.innerHTML.replace('<textarea>','').replace('</textarea>','')));
    },
    methods: {
        formate(html) {
            console.log(html)
            var htmlArr = html.split("\n").slice(1, -1);
            var min = htmlArr.reduce(function(x, item) {
                var length = /^( *)/.exec(item)[0].length;
                return length < x ? length : x;
            }, Infinity);
            return htmlArr
                .map(function(item) {
                    return item.replace(
                        new RegExp(
                            "^" +
                                Array(min)
                                    .fill(" ")
                                    .join("")
                        ),
                        ""
                    );
                })
                .join("\n");
        }
    }
};
</script>
