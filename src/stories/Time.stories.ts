import { Meta, Story } from "@storybook/angular/types-6-0";
import { TimeComponent } from "src/app/time/time.component";

export default{
  title: 'Time',
  component: TimeComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TimeComponent> = (args: TimeComponent) => ({
  component: TimeComponent,
  props: args,
});

export const Label = Template.bind({});
Label.args = {
  label: true,
  labelText: 'Label',
  message: true,
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
  message: true,
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
  labelText: 'Label',
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
  labelText: 'Label',
  message: true,
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
  labelText: 'Label',
  message: true,
  messageText: 'ERROR!'
};
InvalidMessage.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1678%3A0"
  }
};

