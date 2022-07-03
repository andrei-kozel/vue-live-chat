<template>
  <div class="chat">
    <NavBar />
    <div>Chatroom</div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped lang="scss">
.chat {
  @apply flex flex-col bg-white p-8 rounded-xl shadow-xl w-full;
}
</style>
