import { Meta, StoryObj } from '@storybook/vue3';

import { UiField, UiInput, UiSelect } from '..';

const meta: Meta<typeof UiField> = {
  component: UiField,
  args: {
    label: 'E-mail',
  },
  argTypes: {
    label: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Label: ' },
      },
    },
  },
  render: (args) => ({
    components: { UiField, UiInput },
    setup() {
      return { args };
    },
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="" />
      </UiField>
    `,
  }),
};

type Story = StoryObj<typeof UiField>;

export const Default: Story = {};

export const WithSelect: Story = {
  render: (args) => ({
    components: { UiField, UiSelect },
    setup() {
      return {
        args,
        options: ['Опция 1', 'Опция 2', 'Опция 3'],
      };
    },
    template: `
      <UiField v-bind="args">
        <UiSelect :options="options" />
      </UiField>
    `,
  }),
  args: {
    label: 'Выбрать',
  },
};

export default meta;
