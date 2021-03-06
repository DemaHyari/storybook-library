import { Meta, Story } from "@storybook/angular/types-6-0";
import { StepperComponent } from "src/app/stepper/stepper.component";

export default{
  title: 'Stepper',
  component: StepperComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  component: StepperComponent,
  props: args,
});

export const Arrow = Template.bind({});
Arrow.args = {
  icon: false,
  arrow: true
};
Arrow.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1086%3A37290"
  }
};

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
  arrow: false
};
Icon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1086%3A37290"
  }
};

export const VerticalIcon = Template.bind({});
VerticalIcon.args = {
  icon: true,
  arrow: false,
  vertical: true
};
VerticalIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1086%3A37290"
  }
};

export const VerticalArrow = Template.bind({});
VerticalArrow.args = {
  icon: false,
  arrow: false,
  verticalArrow: true,
  vertical: true
};
VerticalArrow.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1086%3A37290"
  }
};
