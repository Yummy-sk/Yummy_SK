import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FadeInOut } from '../../components/Intro/FadeInOut';

export default {
  title: 'Components/Intro/FadeInOut',
  component: FadeInOut,
  argTypes: {
    font: {
      control: {
        type: 'select',
        options: ['Sang Kwon Yeum', 'Yeummy-sk', 'Front End'],
      },
    },
  },
} as ComponentMeta<typeof FadeInOut>;

const Template: ComponentStory<typeof FadeInOut> = args => <FadeInOut {...args} />;

export const Default = Template.bind({});
