<template>
  <div class="bg-gray-300 min-h-screen flex justify-center items-center">
    <!-- button -->
    <button class="py-2 px-4 bg-blue-600 text-white rounded-sm text-sm" @click="showModal = !showModal">
      Open Modal
    </button>

    <!-- modal overlay -->
    <transition name="fade">
      <div v-if="showModal" class="absolute inset-0 bg-gray-100 top-0 flex items-center justify-center" @click="showModal = !showModal">
        <!-- modal -->
        <div class="bg-white p-8 rounded w-[300px]">
          <p class="mb-3 leading-6 text-center text-gray-500">
            Apakah Anda yakin Logout?
          </p>
          <div class="grid grid-cols-2 gap-2">
            <button class="bg-blue-700 text-white p-2 rounded text-sm">
              Ya
            </button>
            <button class="bg-gray-300 text-white p-2 rounded text-sm" @click="showModal = !showModal">
              Tidak
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
