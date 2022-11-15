<template>
  <div>{{ coy }}</div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  setup () {
    const coy = ref('coy')

    return { coy }
  }
}
</script>
