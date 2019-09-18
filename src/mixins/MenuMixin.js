export const menuMixin = {
    methods: {
        triggerPageSelect: function(event, pageName) {
            this.$emit("select-page", pageName);
        }
    },

    props: {
        currentPage: String
    }
}