<style lang="less" rel="stylesheet/less">
    @import "../global";
    @h:40px;
    .taskbar-section{
        width:100%;
        height:@h;
        background:#BBB;

        position:absolute;
        bottom:0;
        top:auto !important;
        left:0;
        opacity: 0.8;
    }
    .app-list{
        overflow:hidden;
        height:@h;
        cursor: default;
        .app-item{
            float:left;
            height:@h;
            min-width:100px;
            padding:0 20px 0 15px;
            text-align:center;
            line-height:@h;
            font-size:14px;
            border-right:1px solid #e9e9e9;

            /*color:#fff;*/
            /*background:#ccc;*/
            color:#888;
            .Filter(saturate(0.2));

            &.actived{
                /*background:#4b8de4;*/
                /*color:#fff;*/
                color:#111;
                background:#bbbbbb;
                .Filter(saturate(1));
            }
            .icon{
                display:inline-block;
                width:25px;
                height:25px;
                margin-right:5px;
                background-size:cover;
                vertical-align: top;
                position:relative;
                top:7px;
            }
        }
    }
</style>
<template>
    <div class="taskbar-section" @mousedown="mousedown($event);">
        <div class="app-list">
            <div
                    class="app-item"
                    :class="{actived:app._focus}"
                    v-for="app in sortedApps"
                    @click="click(app)"
            >
                <span class="icon {{app.icon}}"></span>{{app.title}}
            </div>
        </div>
    </div>
</template>
<script>
    var util = require('service/util');
    var appController = require('service/app-controller');

    function getNewArray(arr) {
        var _arr=[];
        arr.forEach(function (a) {
            _arr.push(a);
        });
        return _arr;
    }

    module.exports = {
        props:{
            apps:Array
        },
        computed:{
            sortedApps:function () {
                var apps = getNewArray(this.apps);
                apps.sort(function (a,b) {
                    return a.sortKey > b.sortKey ? 1 : a.sortKey < b.sortKey ? -1 : 0;
                });
                return apps;
            }
        },
        data: function () {
            return {}
        },
        methods: {
            mousedown:function (e) {
                $event.emit('mousedown:taskbar',{x:e.clientX,y:e.clientY});
            },
            click:function (app) {
                if(app._focus){
                    app.hide();
                }else{
                    app.show();
                }
            }
        },
        components: {},
        ready: function () {

        }
    }
</script>