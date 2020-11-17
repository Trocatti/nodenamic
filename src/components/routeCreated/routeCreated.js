import { BModal, BButton } from "bootstrap-vue";

export default {
    name: 'routeCreated',
    components: {
        BModal,
        BButton,
    },
    props: {
        showModal: {
            type: Boolean,
            required: true
        },
        path: {
            type: String,
            required: true,
        }
    },
    computed: {
        internalPath() {
            const bar = this.path.lastIndexOf('/') == -1 ? "/" : "";
            return `${bar + this.path}` 
        },
        showSelf: {
            get() {
                return this.showModal;
            },
            set(visibility) {
                this.$emit("showSelf", visibility);
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit("showSelf", false);
            this.$router.push({ name: 'home' });
        },
    },
    beforeDestroy() {
        this.$store.dispatch('setEndpoints', {});
        this.$store.dispatch('setJsonData', {});
        this.$store.dispatch('setHasRoutesChild', false);
        this.$store.dispatch('resetJsonObjects');
    },
};
