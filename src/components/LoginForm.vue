<template>
  <form class="form" @submit.prevent="handleSubmit">
    <p class="text-3xl mb-10 text-gray-900">Login</p>

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
    <div v-if="error" class="form-error">{{ error }}</div>
    <button class="form-button">Log in</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import useLogin from "@/composables/useLogin";

const email = ref<string>("");
const password = ref<string>("");
const emit = defineEmits(["login"]);

const { login, error } = useLogin();

const handleSubmit = () => {
  login({
    email: email.value,
    password: password.value,
  });
  if (!error.value) {
    emit("login");
  }
};
</script>
