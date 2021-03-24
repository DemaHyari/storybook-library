import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonGroupComponent } from "src/app/button-group/button-group.component";

export default{
  title: 'Group Button',
  component: ButtonGroupComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  component: ButtonGroupComponent,
  props: args,
});

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  outline: false,
  text: true,
  LeftLabel: 'Label',
  centerLabel: 'Label',
  rightLabel: 'Label'
};
PrimaryText.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A43617" // <-- paste here!
  }
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  outline: false,
  icon: true,
  LeftLabel: 'Label',
  centerLabel: 'Label',
  rightLabel: 'Label',
};
PrimaryIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A43617" // <-- paste here!
  }
};

export const OutlineText = Template.bind({});
OutlineText.args = {
  outline: false,
  text: true,
  LeftLabel: 'Label',
  centerLabel: 'Label',
  rightLabel: 'Label',
};
OutlineText.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A43617" // <-- paste here!
  }
};

export const OutlineIcon = Template.bind({});
OutlineIcon.args = {
  outline: true,
  icon: true,
  LeftLabel: 'Label',
  centerLabel: 'Label',
  rightLabel: 'Label'
};
OutlineIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A43617" // <-- paste here!
  }
};
