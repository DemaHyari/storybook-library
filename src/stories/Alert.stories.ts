import { Meta, Story } from "@storybook/angular/types-6-0";
import { AlertComponent } from "src/app/alert/alert.component";

export default{
  title: 'Alert',
  component: AlertComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  component: AlertComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  outline: true
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A38723"
  }
};

export const Info = Template.bind({});
Info.args = {
  outline: true,
  info: true,
};
Info.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A1"
  }
};

export const Warning = Template.bind({});
Warning.args = {
  outline: true,
  warning: true,
};
Warning.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A1"
  }
};

export const Error = Template.bind({});
Error.args = {
  outline: true,
  error: true,
};
Error.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A1"
  }
};

export const Success = Template.bind({});
Success.args = {
  outline: true,
  success: true,
};
Success.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A1"
  }
};

export const Banner = Template.bind({});
Banner.args = {
  outline: false
};
Banner.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A1"
  }
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  rightIcon: true
};
RightIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A1"
  }
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  leftIcon: true
};
LeftIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A1"
  }
};

export const DoubleIcon = Template.bind({});
DoubleIcon.args = {
  rightIcon: true,
  leftIcon: true,
  error: true,
};
DoubleIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A1"
  }
};

export const CloseText = Template.bind({});
CloseText.args = {
  rightIcon: false,
  leftIcon: false,
  closeText: true,
  warning: true,
};
CloseText.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A1"
  }
};
