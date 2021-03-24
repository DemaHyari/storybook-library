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
TopUpTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

export const TopCenterTip = Template.bind({});
TopCenterTip.args = {
  top: true,
  center: true,
};
TopCenterTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

export const TopDownTip = Template.bind({});
TopDownTip.args = {
  top: true,
  down: true,
};
TopDownTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

//BOTTOM
export const BottomUpTip = Template.bind({});
BottomUpTip.args = {
  bottom: true,
  up: true,
};
BottomUpTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

export const BottomCenterTip = Template.bind({});
BottomCenterTip.args = {
  bottom: true,
  center: true,
};
BottomCenterTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

export const BottomDownTip = Template.bind({});
BottomDownTip.args = {
  bottom: true,
  down: true,
};
BottomDownTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

//LEFT
export const LeftUpTip = Template.bind({});
LeftUpTip.args = {
  left: true,
  up: true,
};
LeftUpTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

export const LeftCenterTip = Template.bind({});
LeftCenterTip.args = {
  left: true,
  center: true,
};
LeftCenterTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

export const LeftDownTip = Template.bind({});
LeftDownTip.args = {
  left: true,
  down: true,
};
LeftDownTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

//RIGHT
export const RightUpTip = Template.bind({});
RightUpTip.args = {
  right: true,
  up: true,
};
RightUpTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

export const RightCenterTip = Template.bind({});
RightCenterTip.args = {
  right: true,
  center: true,
};
RightCenterTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};

export const RightDownTip = Template.bind({});
RightDownTip.args = {
  right: true,
  down: true,
};
RightDownTip.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A31598"
  }
};
