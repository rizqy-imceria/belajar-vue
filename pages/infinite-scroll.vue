<template>
  <div>
    <table class="table-auto leading-normal w-full">
      <thead class="sticky top-0">
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
        <template v-if="$fetchState.pending">
          <tr v-for="i in limit" :key="'coy' + i">
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500 animate-pulse">
              <div class="h-6 bg-gray-200 rounded" />
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              <div class="h-6 bg-gray-200 rounded" />
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              <div class="h-6 bg-gray-200 rounded" />
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              <div class="h-6 bg-gray-200 rounded" />
            </td>
          </tr>
        </template>
        <tr v-if="$fetchState.error">
          <td colspan="4">
            error
          </td>
        </tr>
        <template v-else>
          <tr v-for="(res, index) in result" :key="index">
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              {{ (index + 1) + ((currentPage - 1) * limit) }}
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
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      result: [],
      currentPage: 1,
      limit: 20
    }
  },
  async fetch () {
    this.result = []
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?' +
          new URLSearchParams({
            page: this.currentPage,
            limit: this.limit
          }),
      {
        headers: {
          'x-api-key': 'live_Ovw9MbZYlcqysjzYxmU1xS0SivF8ZRu7fR2J8whG36CyLRCkgif4wfSVXABFCVC5'
        }
      }
    )

    const data = await response.json()
    this.result = data
  }
}
</script>
