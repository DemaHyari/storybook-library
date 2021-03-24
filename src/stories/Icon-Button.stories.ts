import { Meta, Story } from "@storybook/angular/types-6-0";
import { ButtonIconComponent } from "src/app/button-icon/button-icon.component";

export default{
  title: 'Icon Button',
  component: ButtonIconComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonIconComponent> = (args: ButtonIconComponent) => ({
  component: ButtonIconComponent,
  props: args,
});

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  primary: true,
};
PrimaryIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const DangerIcon = Template.bind({});
DangerIcon.args = {
  danger: true,
};
DangerIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const PrimaryOutlineIcon = Template.bind({});
PrimaryOutlineIcon.args = {
  primaryOutline: true,
};
PrimaryOutlineIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const DangerOutlineIcon = Template.bind({});
DangerOutlineIcon.args = {
  dangerOutline: true,
};
DangerOutlineIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const OutlineIcon = Template.bind({});
OutlineIcon.args = {
  outline: true,
};
OutlineIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};

export const DashedIcon = Template.bind({});
DashedIcon.args = {
  dashed: true,
};
DashedIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45040" // <-- paste here!
  }
};
