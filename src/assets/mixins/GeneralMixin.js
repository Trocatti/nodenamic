const generalMixin = {
    methods: {
        copyObject(object) {
            return JSON.parse(JSON.stringify(object));
        },
        objectEquals(source, target) {
            return (
                JSON.stringify(source, this.replacer) ===
                JSON.stringify(target, this.replacer)
            );
        },
        replacer(key, value) {
            if (typeof value === "number") {
                return value.toString();
            } else {
                return value;
            }
        },        
        compareIgnoreCase(text, other) {
            return text.localeCompare(other, undefined, {sensitivity: "accent"}) == 0;
        }
    }

}

export default generalMixin;
