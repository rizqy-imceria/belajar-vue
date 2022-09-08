<template>
  <div class="px-[200px] pt-8 bg-gray-200 h-screen">
    <div class="mb-4">
      <h2 class="text-2xl font-semibold leading-tight">
        Data Kucing
      </h2>
    </div>
    <div>
      <table class="table-auto leading-normal w-full">
        <thead>
          <tr>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase w-5">
              No
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Image
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Width
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Height
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(res, index) in result" :key="index">
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              {{ (index + 1) + ((currentPage - 1) * 10) }}
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white">
              <img :src="res.url" alt="tes" class="h-[30px]">
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white">
              {{ res.width }}
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white">
              {{ res.height }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-end">
        <div>
          <input v-model="currentPage" type="number">
        </div>
        <button @click="prevPage">
          Previous
        </button>
        <button @click="nextPage">
          Next
        </button>
      </div>
    </div>
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
