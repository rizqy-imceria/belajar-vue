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
        <tr v-if="isError">
          <td colspan="4">
            error
          </td>
        </tr>
        <template v-else>
          <tr v-for="(res, index) in result" :key="index">
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              {{ (index + 1) }}
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
        <tr v-if="isLoading">
          <td class="text-center" colspan="4">
            Loading
          </td>
        </tr>
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
      scrollPosition: 0,
      wrapperHeight: 0,
      isLoading: true,
      isError: false
    }
  },
  watch: {
    scrollPosition (value, oldValue) {
      const pixelFromBottom = this.wrapperHeight - value
      if (value > oldValue && pixelFromBottom < this.wrapperHeight * 0.5) {
        if (!this.isLoading) {
          this.isLoading = true

          this.currentPage += 1
          this.getData().then((result) => {
            this.result = this.result.concat(result)
            this.isLoading = false
          })
        }
      } else {
        this.isLoading = false
      }
    }
  },
  async mounted () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.addEventListener('scroll', this.throttleOnScrollPage)

    this.result = await this.getData()
    this.isLoading = false
  },
  created () {
    this.throttleOnScrollPage = this.throttle(this.setScrollPosition, 300)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.throttleOnScrollPage)
  },
  methods: {
    async getData () {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?' +
          new URLSearchParams({
            page: this.currentPage,
            limit: 40
          }),
        {
          headers: {
            'x-api-key': 'live_Ovw9MbZYlcqysjzYxmU1xS0SivF8ZRu7fR2J8whG36CyLRCkgif4wfSVXABFCVC5'
          }
        }
      )

      const data = await response.json()

      return data
    },
    setScrollPosition (event) {
      this.scrollPosition = document.documentElement.scrollTop + window.innerHeight
      this.wrapperHeight = document.documentElement.offsetHeight
    },
    throttle (callback, limit) {
      let waiting = false
      return function () {
        if (!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(function () {
            waiting = false
          }, limit)
        }
      }
    }
  }
}
</script>
