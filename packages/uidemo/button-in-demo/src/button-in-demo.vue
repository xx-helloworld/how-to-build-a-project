<template>
    <div>
        <input value="data"/>
        <el-button>button</el-button>
    </div>
</template>

<script lang="ts">
import ElButton from "@xx-learning/el-button"

export default {
    name:"ElInput",
    components: {ElButton},
    data(): Object {
        return {
            data: "hello world"
        }
    }
}
</script>
