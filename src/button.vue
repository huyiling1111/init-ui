<template>
<div>
  <button class="g-button">按钮</button>
  <AA></AA>
</div>
</template>
<script>
import AA from './aa.vue'
export default {
  name: "Button",
  components:{
    AA
  }
};
</script>
<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>