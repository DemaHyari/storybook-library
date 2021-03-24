import { Meta, Story } from "@storybook/angular/types-6-0";
import { LeftIconButtonComponent } from "src/app/left-icon-button/left-icon-button.component";

export default{
  title: 'Left Icon Button',
  component: LeftIconButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<LeftIconButtonComponent> = (args: LeftIconButtonComponent) => ({
  component: LeftIconButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Label',
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const Danger = Template.bind({});
Danger.args = {

  danger: true,
  label: 'Label',
};
Danger.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  primaryOutline: true,
  label: 'Label',
};
PrimaryOutline.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  dangerOutline: true,
  label: 'Label',
};
DangerOutline.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  label: 'Label',
};
Outline.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const Dashed = Template.bind({});
Dashed.args = {
  dashed: true,
  label: 'Label',
};
Dashed.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};
