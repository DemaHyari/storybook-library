import { Meta, Story } from "@storybook/angular/types-6-0";
import { CheckboxComponent } from "src/app/checkbox/checkbox.component";

export default {
  title: 'Check Box',
  component: CheckboxComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: args,
});

export const Label = Template.bind({});
Label.args = {
  label: true,
  labelText: 'Checkbox'
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
};
NoLabel.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1678%3A0"
  }
};
