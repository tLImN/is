<template>
  <input
    :class="$style.input"
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder"
    @input="onInput"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: string;
  isDisabled?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: 'Введите текст',
});

const emit = defineEmits<(e: 'update:modelValue', value: string) => void>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;

  emit('update:modelValue', target.value);
}
</script>

<style module lang="scss">
.input {
  padding: 0 12px;
  min-height: 40px;
  border-radius: 10px;
  border: none;
  outline: 1px solid var(--color-gray);
  background-color: var(--color-gray-light);
}

.input:focus {
  outline: 1px solid var(--color-primary-light-hover);
}
</style>
