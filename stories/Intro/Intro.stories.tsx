import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Intro } from '../../components/Intro';

export default {
  title: 'Components/Intro',
  component: Intro,
} as ComponentMeta<typeof Intro>;

const Template: ComponentStory<typeof Intro> = () => <Intro />;

export const Default = Template.bind({});
