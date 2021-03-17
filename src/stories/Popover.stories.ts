import { Meta, Story } from "@storybook/angular/types-6-0";
import { PopoverComponent } from "src/app/popover/popover.component";

export default{
  title: 'Popover',
  component: PopoverComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<PopoverComponent> = (args: PopoverComponent) => ({
  component: PopoverComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
