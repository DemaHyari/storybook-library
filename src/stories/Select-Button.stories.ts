import { Meta, Story } from "@storybook/angular/types-6-0";
import { SelectButtonComponent } from "src/app/select-button/select-button.component";

export default{
  title: 'Select Button',
  component: SelectButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<SelectButtonComponent> = (args: SelectButtonComponent) => ({
  component: SelectButtonComponent,
  props: args,
});

export const Label = Template.bind({});
Label.args = {
  label: true,
  labelText: 'Select Label',
  message: true,
  messageText: 'Error Massage'
};
Label.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=685%3A4332"
  }
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: false,
  labelText: 'Select Label',
  message: true,
  messageText: 'Error Massage'
};
NoLabel.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=685%3A4332"
  }
};

export const Message = Template.bind({});
Message.args = {
  label: true,
  labelText: 'Select Label',
  message: false,
};
Message.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=685%3A4332"
  }
};
