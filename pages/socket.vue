<template>
  <div>
    <div v-for="(message, key) in messages" :key="key">
      message: {{ message }}
    </div>
    <button class="bg-blue-300 p-3" @click="connect">
      connect
    </button>
    <button class="bg-blue-300 p-3" @click="disconnect">
      disconnect
    </button>
    <div>
      <input v-model="message" type="text">
      <button @click="sendMessage">
        send
      </button>
    </div>
  </div>
</template>
<script>
import { io } from 'socket.io-client'
export default {
  data () {
    return {
      messages: [],
      message: '',
      socket: null,
      isConnected: false
    }
  },
  watch: {
    // socket (val) {
    //   console.log('cocket', val._callbacks)
    // }
  },
  mounted () {
    this.socket = io('http://localhost:5000/', {
      autoConnect: false
    })

    this.socket.on('connect', () => console.log('connect coy'))
    this.socket.on('disconnect', () => console.log('disconnect'))
    // console.log(
    //   this.socket
    // )
    this.socket.on('message', function (message) {
      // console.log(message)
    })

    // this.emit('message', 'hallo cuyy')
    // console.log(this.tempMessage)
    this.socket.on('message', this.onMessage)
    // this.socket.on('message', function (coy) {
    // console.log(coy)
    // })

    // new Websock()
  },
  methods: {
    onMessage (val) {
      console.log(val)
      this.messages.push(val)
    },
    connect () {
      if (!this.isConnected) {
        this.socket.connect()
        this.isConnected = true
      }
    },
    disconnect () {
      console.log('disconnect')
      this.isConnected = false
      this.socket.disconnect()
    },
    sendMessage () {
      if (this.message) {
        this.socket.emit('message', this.message)
        this.message = null
      }
    }
  }
}
</script>
