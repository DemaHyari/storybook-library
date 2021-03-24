import { Meta, Story } from "@storybook/angular/types-6-0";
import { DropdownButtonComponent } from "src/app/dropdown-button/dropdown-button.component";

export default{
  title: 'Dropdown Button',
  component: DropdownButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<DropdownButtonComponent> = (args: DropdownButtonComponent) => ({
  component: DropdownButtonComponent,
  props: args,
});

export const PrimaryDropdown = Template.bind({});
PrimaryDropdown.args = {
  primary: true,
  label: 'Label',
};
PrimaryDropdown.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1873%3A0" // <-- paste here!
  }
};

export const DangerDropdown = Template.bind({});
DangerDropdown.args = {

  danger: true,
  label: 'Label',
};
DangerDropdown.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1873%3A0" // <-- paste here!
  }
};

export const PrimaryOutlineDropdown = Template.bind({});
PrimaryOutlineDropdown.args = {
  primaryOutline: true,
  label: 'Label',
};
PrimaryOutlineDropdown.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1873%3A0" // <-- paste here!
  }
};

export const DangerOutlineDropdown = Template.bind({});
DangerOutlineDropdown.args = {
  dangerOutline: true,
  label: 'Label',
};
DangerOutlineDropdown.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1873%3A0" // <-- paste here!
  }
};

export const OutlineDropdown = Template.bind({});
OutlineDropdown.args = {
  outline: true,
  label: 'Label',
};
OutlineDropdown.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1873%3A0" // <-- paste here!
  }
};

export const DashedDropdown = Template.bind({});
DashedDropdown.args = {
  dashed: true,
  label: 'Label',
};
DashedDropdown.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1873%3A0" // <-- paste here!
  }
};
