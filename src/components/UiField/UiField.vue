<template>
  <label :class="$style.label">
    {{ props.label }}
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
interface IProps {
  label?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  label: 'Label: ',
});
</script>

<style module lang="scss">
.label::selection {
  background-color: var(--color-primary);
}

.label {
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: fit-content;
  font-size: 0.9em;
}
</style>
