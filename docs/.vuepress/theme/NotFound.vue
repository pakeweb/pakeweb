<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link :to="$withBase('/')">Kembali.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `Tidak ada apa-apa disini.`,
  `Kenapa kita bisa ada disini?`,
  `Ini Empat-Nol-Empat.`,
  `Sepertinya link kita salah.`,
]

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
  },
}
</script>
