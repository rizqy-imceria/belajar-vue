<template>
  <div>
    <p>test</p>
    <Child />
  </div>
</template>
<script>
export default {
  components: {
    Child: () => '@/components/Child.vue'
  }
}
</script>
