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