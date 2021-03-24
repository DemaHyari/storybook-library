import { Meta, Story } from "@storybook/angular/types-6-0";
import { GlobalBannersAlertComponent } from "src/app/global-banners-alert/global-banners-alert.component";

export default{
  title: 'Global Banners Alert',
  component: GlobalBannersAlertComponent,
} as Meta

const Template: Story<GlobalBannersAlertComponent> = (args: GlobalBannersAlertComponent) => ({
  component: GlobalBannersAlertComponent,
  props: args,
});
export const BasicChange = Template.bind({});
BasicChange.args = {
  change: true,
  closeIcon: true,
};
BasicChange.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const IconChange = Template.bind({});
IconChange.args = {
  change: true,
  closeIcon: false,
  icon: true
};
IconChange.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const Change = Template.bind({});
Change.args = {
  change: true,
  closeIcon: true,
  icon: true
};
Change.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  closeIcon: true,
  icon: true
};
Success.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const Info = Template.bind({});
Info.args = {
  info: true,
  closeIcon: true,
  icon: true
};
Info.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
  closeIcon: true,
  icon: true
};
Warning.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const Erorr = Template.bind({});
Erorr.args = {
  error: true,
  closeIcon: true,
  icon: true
};
Erorr.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};
