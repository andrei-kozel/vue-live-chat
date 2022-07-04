<template>
  <form class="chat-form">
    <textarea
      v-model="message"
      @keyup.enter="sendMessage"
      placeholder="Type a message and press enter to send ..."
    ></textarea>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IChatMessage } from "@/types/index";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";

const message = ref<string>("");
const { user } = getUser();

const sendMessage = async () => {
  const chat: IChatMessage = {
    message: message.value,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    user: user.value!.displayName,
    createdAt: timestamp,
  };

  console.log(chat);
  message.value = "";
};
</script>

<style scoped lang="scss">
.chat-form {
  @apply w-full;
  textarea {
    @apply bg-white border-2 border-gray-300 rounded-xl p-2 w-full;
  }
}
</style>
