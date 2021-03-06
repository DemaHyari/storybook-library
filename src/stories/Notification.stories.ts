import { Meta, Story } from "@storybook/angular/types-6-0";
import { NotificationComponent } from "src/app/notification/notification.component";

export default{
  title: 'Notification',
  component: NotificationComponent,
} as Meta

const Template: Story<NotificationComponent> = (args: NotificationComponent) => ({
  component: NotificationComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  title: 'Basic Notification Title'
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A693"
  }
};

export const Button = Template.bind({});
Button.args = {
  title: 'Button Notification Title',
  button: true
};
Button.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A693"
  }
};

export const InfoIcon = Template.bind({});
InfoIcon.args = {
  info: true,
  icon: true
};
InfoIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A693"
  }
};

export const WarningIcon = Template.bind({});
WarningIcon.args = {
  warning: true,
  icon: true
};
WarningIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A693"
  }
};

export const ErrorIcon = Template.bind({});
ErrorIcon.args = {
  error: true,
  icon: true
};
ErrorIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A693"
  }
};

export const SuccessIcon = Template.bind({});
SuccessIcon.args = {
  success: true,
  icon: true
};
SuccessIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A693"
  }
};
