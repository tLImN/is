import { Meta, StoryObj } from '@storybook/vue3';

import { UiInput } from '..';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  args: {},
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),

    template: `<UiInput v-bind="args" />`,
  }),
};
