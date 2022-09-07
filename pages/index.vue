<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Image</th>
          <th>Width</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(res, index) in result" :key="index">
          <td>{{ (index + 1) + ((currentPage - 1) * 10) }}</td>
          <td><img :src="res.url" alt="tes" class="h-[30px]"></td>
          <td>{{ res.width }}</td>
          <td>{{ res.height }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="nextPage">
        Next
      </button>
      <button @click="prevPage">
        Previous
      </button>
    </div>
    <div>Current Page: {{ currentPage }}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      result: [],
      currentPage: 1
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?' +
          new URLSearchParams({
            page: this.currentPage,
            limit: 20
          })
      )

      const data = await response.json()
      this.result = data
    },
    nextPage () {
      this.currentPage++
      this.fetchData()
    },
    prevPage () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.fetchData()
      }
    }
  }
}
</script>
