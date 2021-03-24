import { Meta, Story } from "@storybook/angular/types-6-0";
import { InputComponent } from "src/app/input/input.component";

export default{
  title: 'Input',
  component: InputComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<InputComponent> = (args: InputComponent) => ({
  component: InputComponent,
  props: args,
});

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: false,
  leftIcon: false,
  rightIcon: false
};
WithoutLabel.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=688%3A30165"
  }
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: true,
  leftIcon: false,
  rightIcon: false
};
WithLabel.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=688%3A30165"
  }
};

export const DoubleIcon = Template.bind({});
DoubleIcon.args = {
  label: true,
  leftIcon: true,
  rightIcon: true
};
DoubleIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=688%3A30165"
  }
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: true,
  leftIcon: false,
  rightIcon: true
};
RightIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=688%3A30165"
  }
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: true,
  leftIcon:  true,
  rightIcon: false
};
LeftIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=688%3A30165"
  }
};
