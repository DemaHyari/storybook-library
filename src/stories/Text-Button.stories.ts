import { Meta, Story } from '@storybook/angular/types-6-0';
import { TextButtonComponent } from 'src/app/text-button/text-button.component';
export default{
  title: 'Text Button',
  component: TextButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TextButtonComponent> = (args: TextButtonComponent) => ({
  component: TextButtonComponent,
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
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45041" // <-- paste here!
  }
};

export const Danger = Template.bind({});
Danger.args = {
  primary: false,
  danger: true,
  label: 'Label',
};
Danger.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45041" // <-- paste here!
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
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45041" // <-- paste here!
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
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45041" // <-- paste here!
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
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45041" // <-- paste here!
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
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1592%3A45041" // <-- paste here!
  }
};
