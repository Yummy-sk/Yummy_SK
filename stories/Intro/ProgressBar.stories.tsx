import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from '../../components/Intro/ProgressBar';

export default {
  title: 'components/Intro/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = () => <ProgressBar />;

export const Default = Template.bind({});
