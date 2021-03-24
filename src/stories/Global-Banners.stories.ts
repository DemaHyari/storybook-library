import { Meta, Story } from "@storybook/angular/types-6-0";
import { GlobalBannersComponent } from "src/app/global-banners/global-banners.component";

export default{
  title: 'Global Banners',
  component: GlobalBannersComponent,
} as Meta

const Template: Story<GlobalBannersComponent> = (args: GlobalBannersComponent) => ({
  component: GlobalBannersComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  default: true,
};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A30045"
  }
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  label: 'This is a Success',
};
Success.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A30045"
  }
};

export const Info = Template.bind({});
Info.args = {
  info: true,
  label: 'This is a Info',
};
Info.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A30045"
  }
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  label: 'This is a warning',
};
Warning.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A30045"
  }
};

export const Erorr = Template.bind({});
Erorr.args = {
  error: true,
  label: 'This is a Erorr',
};
Erorr.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A30045"
  }
};
