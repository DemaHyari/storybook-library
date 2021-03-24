import { Meta, Story } from "@storybook/angular/types-6-0";
import { ExtendedButtonComponent } from "src/app/extended-button/extended-button.component";

export default{
  title: 'Extended Button',
  component: ExtendedButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ExtendedButtonComponent> = (args: ExtendedButtonComponent) => ({
  component: ExtendedButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Extended FAB',
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
  label: 'Extended FAB',
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
  label: 'Extended FAB',
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
  label: 'Extended FAB',
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
  label: 'Extended FAB',
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
  label: 'Extended FAB',
};
Dashed.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};
