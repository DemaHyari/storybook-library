import { Meta, Story } from "@storybook/angular/dist/client/preview/types-6-0";
import { MessageComponent } from "src/app/message/message.component";

export default{
  title: 'Message',
  component: MessageComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<MessageComponent> = (args: MessageComponent) => ({
  component: MessageComponent,
  props: args,
});

export const Success = Template.bind({});
Success.args = {
  success: true,
  label: 'This is Success Message'
};
Success.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A351"
  }
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  label: 'This is Warning Message'
};
Warning.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A351"
  }
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  label: 'This is Erorr Message'
};
Error.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A351"
  }
};

export const Info = Template.bind({});
Info.args = {
  info: true,
  label: 'This is Info Message'
};
Info.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A351"
  }
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  label: 'This is Loading Message'
};
Loading.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A351"
  }
};






