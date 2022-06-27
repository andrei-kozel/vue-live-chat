<template>
  <div class="welcome">
    <SignupForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignupForm from "@/components/SignupForm.vue";

export default defineComponent({
  name: "WelcomeView",
  components: { SignupForm },
});
</script>

<style lang="scss">
.welcome {
  @apply bg-white p-8 rounded-xl shadow-xl;
}
</style>
