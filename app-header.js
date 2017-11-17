Vue.component('app-header', {
    template: `
    <div>
        {{ message }}
    </div>
    `,

    data: function () {
        return {
            message: 'Hello header!'
        }
    },

    methods: {
    }
})