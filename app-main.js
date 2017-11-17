Vue.component('app-main', {
    template: `
    <div v-on:click="textClick">
        <app-header></app-header>
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