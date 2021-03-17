import { Meta, Story } from "@storybook/angular/types-6-0";
import { TooltipComponent } from "src/app/tooltip/tooltip.component";

export default{
  title: 'Tooltip',
  component: TooltipComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TooltipComponent> = (args: TooltipComponent) => ({
  component: TooltipComponent,
  props: args,
});

//TOP
export const TopUpTip = Template.bind({});
TopUpTip.args = {
  top: true,
  up: true,
};

export const TopCenterTip = Template.bind({});
TopCenterTip.args = {
  top: true,
  center: true,
};

export const TopDownTip = Template.bind({});
TopDownTip.args = {
  top: true,
  down: true,
};

//BOTTOM
export const BottomUpTip = Template.bind({});
BottomUpTip.args = {
  bottom: true,
  up: true,
};

export const BottomCenterTip = Template.bind({});
BottomCenterTip.args = {
  bottom: true,
  center: true,
};

export const BottomDownTip = Template.bind({});
BottomDownTip.args = {
  bottom: true,
  down: true,
};

//LEFT
export const LeftUpTip = Template.bind({});
LeftUpTip.args = {
  left: true,
  up: true,
};

export const LeftCenterTip = Template.bind({});
LeftCenterTip.args = {
  left: true,
  center: true,
};

export const LeftDownTip = Template.bind({});
LeftDownTip.args = {
  left: true,
  down: true,
};

//RIGHT
export const RightUpTip = Template.bind({});
RightUpTip.args = {
  right: true,
  up: true,
};

export const RightCenterTip = Template.bind({});
RightCenterTip.args = {
  right: true,
  center: true,
};

export const RightDownTip = Template.bind({});
RightDownTip.args = {
  right: true,
  down: true,
};
