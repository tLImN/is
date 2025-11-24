import { Meta, StoryObj } from '@storybook/vue3';

import { UiSelect } from '..';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  title: 'Components/UiSelect',
  args: {
    modelValue: '',
    isDisabled: false,
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
  argTypes: {
    options: {
      control: 'object',
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof UiSelect> = {
  render: (args) => ({
    components: { UiSelect },
    setup() {
      return { args };
    },

    template: `<UiSelect v-bind="args" />`,
  }),
};
