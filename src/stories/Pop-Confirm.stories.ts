import { Meta, Story } from "@storybook/angular/types-6-0";
import { PopConfirmComponent } from "src/app/pop-confirm/pop-confirm.component";

export default {
  title: 'PopConfirm',
  component: PopConfirmComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<PopConfirmComponent> = (args: PopConfirmComponent) => ({
  component: PopConfirmComponent,
  props: args,
});

export const Label = Template.bind({});
Label.args = {
 
};
