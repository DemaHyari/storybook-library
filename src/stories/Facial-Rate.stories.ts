import { Meta, Story } from "@storybook/angular/types-6-0";
import { FacialRateComponent } from "src/app/facial-rate/facial-rate.component";

export default{
  title: 'Facial Rate',
  component: FacialRateComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<FacialRateComponent> = (args: FacialRateComponent) => ({
  component: FacialRateComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=683%3A1"
  }
};
