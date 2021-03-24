import { Meta, Story } from "@storybook/angular/types-6-0";
import { BadgesComponent } from "src/app/badges/badges.component";

export default {
  title: 'Badges',
  component: BadgesComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BadgesComponent> = (args: BadgesComponent) => ({
  component: BadgesComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  label: 'Status',
  proccess: true,
};
Text.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A31173"
  }
};

export const IconText = Template.bind({});
IconText.args = {
  icon: true,
  label: 'Status',
  proccess: true,
};
IconText.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A31173"
  }
};

export const Proccessing = Template.bind({});
Proccessing.args = {
  proccess: true,
  label: 'Status',
};
Proccessing.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A31173"
  }
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  label: 'Status',
};
Success.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A31173"
  }
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  label: 'Status',
};
Warning.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A31173"
  }
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  label: 'Status',
};
Error.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A31173"
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Status',
};
Disabled.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A31173"
  }
};

