<template>
  <div>
    <p>
      {{ coy }}
    </p>
    <p>
      test {{ count }}
    </p>
    <button class="bg-blue-400" @click="movePage()">
      move page
    </button>
  </div>
</template>
<script>
import { ref, useStore, useRouter } from '@nuxtjs/composition-api'
export default {
  setup () {
    const coy = ref('coy')
    const store = useStore()
    const router = useRouter()

    const count = store.state.counter.counter

    const movePage = () => {
      router.push('/')
    }

    return { coy, count, movePage }
  }
}
</script>
