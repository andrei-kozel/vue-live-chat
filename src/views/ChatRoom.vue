<template>
  <div class="chat">
    <NavBar @error="toggleError" />
    <div class="chat-feed" ref="chat">
      <div v-for="msg in messages" :key="msg.id" class="chat-message">
        <div class="chat-message__user">
          <span class="chat-message__user__avatar">{{
            msg.user[0].toUpperCase()
          }}</span>
          <p class="chat-message__user__name">{{ msg.user }}</p>
        </div>
        <p class="chat-message__message">{{ msg.message }}</p>
      </div>
    </div>
    <p>{{ error }}</p>
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
import getCollection from "@/composables/getCollection";
import { onUpdated, ref } from "vue";

const showError = ref<boolean>(false);
const errorMessage = ref<string>("");
const { error, messages } = getCollection("messages");
const chat = ref<HTMLElement | null>(null);

onUpdated(() => {
  if (chat.value) {
    chat.value.scrollTop = chat.value.scrollHeight;
  }
});

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

  &-feed {
    @apply flex flex-col gap-2 bg-gray-100 p-4 mb-4 max-h-[400px] overflow-scroll rounded-xl overflow-x-hidden;
  }

  &-message {
    @apply bg-white py-2 px-4 w-fit rounded-md shadow-md;

    &__user {
      @apply flex flex-row items-center;

      &__avatar {
        @apply bg-teal-200 rounded-full w-4 h-4 mr-1 flex justify-center items-center p-4;
      }

      &__name {
        @apply text-sm font-semibold;
      }
    }
  }
}
</style>
