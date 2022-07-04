<template>
  <form class="chat-form">
    <textarea
      v-model="message"
      @keyup.enter="handleSubmit"
      placeholder="Type a message and press enter to send ..."
    ></textarea>
    {{ error }}
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { timestamp } from "@/firebase/config";
import getUser from "@/composables/getUser";
import useCollection from "../composables/useCollection";
import { IChatMessage } from "@/types/index";

const message = ref<string>("");
const { user } = getUser();
const { error, sendMessage } = useCollection();

const handleSubmit = async () => {
  const chat: IChatMessage = {
    message: message.value,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    user: user.value!.displayName,
    createdAt: timestamp,
  };

  await sendMessage(chat);
  if (!error.value) {
    message.value = "";
  }
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
