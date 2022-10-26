<template>
  <div>{{ numbers }}</div>
</template>
<script>
import { computed } from 'vue'

export default {
  name: 'NumberRenderer',
  props: {
    even: {
      type: Boolean,
      required: true
    }
  },
  setup (props) {
    const numbers = computed(() => {
      const element = []
      const moduloResult = props.even ? 0 : 1
      for (let i = 1; i < 10; i++) {
        if (i % 2 === moduloResult) {
          element.push(i)
        }
      }
      return element.join(', ')
    })

    return { numbers }
  }
}
</script>
