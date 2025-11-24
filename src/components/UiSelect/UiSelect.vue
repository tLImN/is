<template>
  <select :class="$style.select" :value="effectiveValue" :disabled="props.isDisabled" @change="handleChange">
    <option v-for="option in props.options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
  modelValue?: string;
  isDisabled?: boolean;
  options?: string[];
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: 'test',
  options: () => [],
});

const emit = defineEmits(['update:modelValue']);

const effectiveValue = computed(() => {
  if (props.modelValue && props.options.includes(props.modelValue)) {
    return props.modelValue;
  }

  return props.options.length > 0 ? props.options[0] : '';
});

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;

  emit('update:modelValue', target.value);
};
</script>

<style module lang="scss">
.select {
  padding: 0 12px;
  min-height: 40px;
  border-radius: 10px;
  border: none;
  outline: 1px solid var(--color-gray);
  background-color: var(--color-gray-light);
}

.select:focus {
  outline: 1px solid var(--color-primary-light-hover);
}
</style>
