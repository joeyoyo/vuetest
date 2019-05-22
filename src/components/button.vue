<template>
    <button :class="'i-button-size' + size" :disabled="disabled" @click="handleclick2(val)" >
        <slot name="icon"></slot>
        <slot>{{app.userInfo}}</slot>
    </button>
</template>
<script>
    // 判断参数是否是其中之一
    function oneOf (value, validList) {
        for (let i = 0; i < validList.length; i++) {
            if (value === validList[i]) {
                return true;
            }
        }
        return false;
    }

    export default {
        inject:['app'],
        props: {
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                val:'你好',
                title:'我是button组件'
            }
        },
        methods:{
            handleclick2(val){
                // 父与子组件通信
                this.$emit('on-click',val);
                // 通过bus总件通信
                this.$bus.$emit('todo',val)
            }
        }

    }
</script>
<style scoped>
    .i-button-sizesmall{
        width: 20px;
        height: 20px;
    }
   .i-button-sizedefault{
       width: 50px;
       height: 50px;
   }
   .i-button-sizelarge{
       width: 100px;
       height: 100px;
       background: red;
   }

</style>