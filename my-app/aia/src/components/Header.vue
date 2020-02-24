<template>
  <header>
    <div class="header-container">
      <router-link :to="`/?id=${this.$route.query.id}`">
        <img :src="require('../assets/img/logo.png')" alt="aia logo">
      </router-link>
      <div class="header-contact">
        <p>
          contact saga <br>
          012345678
        </p>
      </div>
      <div class="header-center-zone" style="">
        <p>ABC</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
