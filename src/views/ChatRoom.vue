<template>
  <div class="chat">
    <NavBar @error="toggleError" />
    <ChatForm />
  </div>
  <AlertComponent
    v-if="showError"
    :message="errorMessage"
    @closeAlert="closeAlert"
  />
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import AlertComponent from "@/components/AlertComponent.vue";
import ChatForm from "@/components/ChatForm.vue";
import { ref } from "vue";

const showError = ref<boolean>(false);
const errorMessage = ref<string>("");

const toggleError = (error: string) => {
  errorMessage.value = error;
  showError.value = true;

  setTimeout(() => {
    showError.value = false;
  }, 3000);
};

const closeAlert = () => {
  showError.value = false;
};
</script>

<style scoped lang="scss">
.chat {
  @apply flex flex-col bg-white p-8 rounded-xl shadow-xl w-full;
}
</style>
