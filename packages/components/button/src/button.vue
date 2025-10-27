<template>
  <button
    class="tiny-button"
    :class="[
      type ? `tiny-button-${type}` : '',
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
    ]"
    :disabled="disabled"
    @click="clickHandle"
  >
    <i v-if="icon" :class="[`tiny-icon-${icon}`]"></i>
    <span v-if="$slots.default"> <slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { buttonProps } from "./button";
export default defineComponent({
  name: "TinyButton",
  props: buttonProps,
  emits: ["click"],
  setup(_, { emit }) {
    const clickHandle = (event: MouseEvent) => {
      if (_.disabled) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };
    return {
      clickHandle,
    };
  },
});
</script>

<style scoped></style>
