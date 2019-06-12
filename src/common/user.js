//该组件主要用于维护个人信息，例如可导入于app.vue中，这样就不会一大串代码，难以维护。
//通过provide 与inject去注入引用。

export default {

    name: 'app',
    data() {
        return {
            userInfo: '我是provide'
        }
    },
    components: {
        HelloWorld,
        Button
    },
    methods: {
        // 通过emit子组件传递过来的
        handleclick2(data) {
            console.log(data);
        }
    },
    mounted() {
        // 对元素或组件的引用
        const btn = this.$refs.BUTTON;
        window.alert(btn.title);

        this.$bus.$on('todo', (data) => {
            console.log(data);
        })
    },
    provide() {    //通过 provide / inject 组件通信
        return {
            app: this
        }
    }

}