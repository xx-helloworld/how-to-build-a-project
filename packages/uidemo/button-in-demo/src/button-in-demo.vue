<template>
    <div>
        <input class="input-default" value="data"/>
        <el-button>button</el-button>
    </div>
</template>

<script>
import ElButton from "@xx-learning/el-button"

export default {
    name:"button-in-demo",
    components: {ElButton},
    data() {
        return {
            data: "hello world"
        }
    }
}
</script>
