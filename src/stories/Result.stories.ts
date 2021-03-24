import { Meta, Story } from "@storybook/angular/types-6-0";
import { ResultComponent } from "src/app/result/result.component";

export default{
  title: 'Result',
  component: ResultComponent,
} as Meta

const Template: Story<ResultComponent> = (args: ResultComponent) => ({
  component: ResultComponent,
  props: args,
});

export const Success = Template.bind({});
Success.args = {
  success: true,
};
Success.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=722%3A33134"
  }
};

export const Info = Template.bind({});
Info.args = {
  info: true,
};
Info.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=722%3A33134"
  }
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
};
Warning.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=722%3A33134"
  }
};

export const Erorr = Template.bind({});
Erorr.args = {
  error: true,
};
Erorr.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=722%3A33134"
  }
};
