<template>
  <div class="welcome">
    <div v-if="showLogin">
      <LoginForm @login="enterChat" />
      <p class="welcome-hint">
        No account yet? <span @click="showLogin = false">Signup</span> instead.
      </p>
    </div>
    <div v-else>
      <SignupForm @signup="enterChat" />
      <p class="welcome-hint">
        Already registered?
        <span @click="showLogin = true">Login</span> instead.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { useRouter } from "vue-router";

const showLogin = ref<boolean>(true);
const router = useRouter();

const enterChat = () => {
  router.push("/chat");
};
</script>

<style lang="scss">
.welcome {
  @apply bg-white p-8 rounded-xl shadow-xl;

  &-hint {
    @apply text-center mt-5 text-gray-500;

    span {
      @apply font-bold hover:text-teal-500 cursor-pointer;
    }
  }
}
</style>
