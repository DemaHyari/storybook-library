import { Meta, Story } from "@storybook/angular/types-6-0";
import { SwitchButtonComponent } from "src/app/switch-button/switch-button.component";

export default {
  title: 'Switch Button',
  component: SwitchButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SwitchButtonComponent> = (args: SwitchButtonComponent) => ({
  component: SwitchButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=685%3A2765"
  }
};
