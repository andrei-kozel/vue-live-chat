<template>
  <nav class="navigation">
    <div>
      <p>Hey there ... display name here</p>
      <p class="email">Currently logged in as ... email</p>
    </div>
    <button class="button" @click="handleLogout">Logout</button>
  </nav>
</template>

<script setup lang="ts">
import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";
import { defineEmits } from "vue";

const { error, logout } = useLogout();
const router = useRouter();
const emit = defineEmits(["error"]);

const handleLogout = async () => {
  if (error.value.length > 0) {
    emit("error", error.value);
  } else {
    await logout();
    router.push("/");
  }
};
</script>

<style scoped lang="scss">
.navigation {
  @apply flex justify-between items-center mb-4;

  p {
    @apply text-gray-900 text-base;
  }

  .email {
    @apply text-sm text-gray-500;
  }

  .button {
    @apply bg-teal-300 rounded-full px-4 py-2 font-bold text-white hover:bg-teal-500;
  }
}
</style>
