<template>
  <form class="form" @submit.prevent="handleSubmit">
    <p class="text-3xl mb-10 text-gray-900">Sign Up!</p>

    <div class="form-field mb-8">
      <label class="form-label">Display name:</label>
      <input
        class="form-input focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="display name"
        v-model="displayName"
      />
    </div>
    <div class="form-field mb-8">
      <label class="form-label">Email:</label>
      <input
        class="form-input focus:outline-none focus:shadow-outline"
        type="email"
        placeholder="Email"
        v-model="email"
      />
    </div>
    <div class="form-field mb-8">
      <label class="form-label">Password:</label>
      <input
        class="form-input focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button class="form-button">Sign up</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const displayName = ref<string>();
const email = ref<string>();
const password = ref<string>();

const handleSubmit = () => {
  console.log(displayName.value, email.value, password.value);
};
</script>

<style lang="scss">
.form {
  @apply max-w-[400px] m-auto w-full text-center;

  .form-field {
    @apply w-full text-left;
  }
  &-label {
    @apply uppercase text-sm text-gray-500 font-bold;
  }
  &-input {
    @apply w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg;
  }
  &-button {
    @apply bg-teal-500 text-white px-7 py-3 rounded-lg uppercase text-lg font-bold hover:bg-teal-600;
  }
}
</style>
