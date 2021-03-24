import { Meta, Story } from "@storybook/angular/types-6-0";
import { TextareaComponent } from "src/app/textarea/textarea.component";

export default{
  title: 'Textarea',
  component: TextareaComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
  component: TextareaComponent,
  props: args,
});

export const Label = Template.bind({});
Label.args = {
  label: true,
  labelText: 'Textarea Label',
  message: false,
};
Label.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1678%3A0"
  }
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: false,
  message: false,
};
NoLabel.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1678%3A0"
  }
};

export const Message = Template.bind({});
Message.args = {
  label: true,
  labelText: 'Textarea Label',
  message: true,
};
Message.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1678%3A0"
  }
};

export const ValidMessage = Template.bind({});
ValidMessage.args = {
  label: true,
  labelText: 'Textarea Label',
  message: true,
  valid: true
};
ValidMessage.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1678%3A0"
  }
};

export const InvalidMessage = Template.bind({});
InvalidMessage.args = {
  label: true,
  labelText: 'Textarea Label',
  message: true,
  valid: false,
  messageText: 'ERROR!'
};
InvalidMessage.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1678%3A0"
  }
};
