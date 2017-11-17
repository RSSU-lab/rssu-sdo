Vue.component('main-app', {
    template: `
    <div v-on:click="textClick">
        {{ message }}
    </div>
    `,

    data: function () {
        return {
            message: 'Hello Vue!'
        }
    },

    methods: {
        textClick: function () {
            this.message = 'Hello RSSU!'
        }
    }
})