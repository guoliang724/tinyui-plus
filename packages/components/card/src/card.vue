<template>
  <!-- card outer container -->
  <div class="tiny-card" :style="width ? { width: width + 'px' } : {}">
    <!-- card image -->
    <div class="tiny-card-img" :style="imgHeight ? {height : imgHeight + 'px'} : {}">
        <img :src="imgSrc" alt="img">
    </div>
    <!-- card description -->
    <!-- card description has two cases: -->
    <!-- 1. pass props  -->
    <!-- 2. pass slot -->
    <div v-if="summary" class="tiny-card-summary">
        {{ summary }}
    </div>
    <div v-else class="tiny-card-summary">
        <slot></slot>
    </div>
    <!-- card footer -->
    <div class="tiny-card-footer">
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cardProps } from "./card";
export default defineComponent({
  name: "TinyCard",
  props: cardProps,
  setup() {
    return {};
  },
});
</script>

<style scoped></style>