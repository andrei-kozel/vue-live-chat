<template>
  <div class="alert" role="alert">
    <span class="alert-text">{{ props.message }}</span>
    <span class="icon" @click="handleCloseAlert">
      <svg
        class="fill-current h-6 w-6 text-red-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { defineEmits } from "vue";

const props = defineProps({ message: { type: String, required: true } });
const emit = defineEmits(["closeAlert"]);

const handleCloseAlert = () => {
  emit("closeAlert");
};
</script>

<style scoped lang="scss">
.alert {
  @apply bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute bottom-4 right-4 flex items-center;

  &-text {
    @apply block sm:inline mr-2;
  }

  &-icon {
    @apply relative top-0 bottom-0 right-0;
  }
}
</style>
