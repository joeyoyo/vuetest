<template>
    <div id="A">
        <Button disabled class="btn-sumit" id="1111">1</Button>
        <Button size="large" @on-click="handleclick2" ref="BUTTON">
            <i-icon slot="icon" type="checkmark"></i-icon>
            hello
        </Button>
        <Button disabled></Button>

        <button @click="handleClick">触发B事件</button>

        <router-link to="/form">具有数据校验功能的表单组件 —— Form</router-link>
    </div>
</template>


<script>
    // 引入组件button
    import Button from '../button.vue'
    // 引入自定义的 dispatch 和 broadcast 方法
    import Emitter from '../../mixins/emitter.js';

    export default {
        name: 'componentA',
        mixins:[Emitter],
        data() {
            return {
                userInfo: '我是provide'
            }
        },
        components: {
            Button
        },
        methods: {
            // 通过emit子组件传递过来的
            handleclick2(data) {
                console.log(data);
            },
            handleClick () {
                //向B组件广播
                this.$router.push({path:'/B'});
                this.broadcast('componentB', 'on-message', 'Hello ，我是A组件');
            }

        },
        mounted: function () {
            // 对元素或组件的引用
            const btn = this.$refs.BUTTON;
            window.alert(btn.title);

            this.$bus.$on('todo', (data) => {
                console.log(data);
            })
        },
        provide() {
            //通过 provide / inject通信，向下所有的组件都可以拿到，缺点不是可响应的。
            //优点：可以通过把app,vue作为最外层的组件，然后每个页面都可以拿到app.vue的数据，做到类似vueX的效果。
            //但某个子页面需要修改资料时，即时请求，通知，再次修改。
            return {
                app: this
            }
        }

    }
</script>

<style scoped>

</style>