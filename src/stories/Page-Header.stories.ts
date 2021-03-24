import { Meta, Story } from "@storybook/angular/types-6-0";
import { PageHeaderComponent } from "src/app/page-header/page-header.component";

export default{
  title: 'Page Header',
  component: PageHeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<PageHeaderComponent> = (args: PageHeaderComponent) => ({
  component: PageHeaderComponent,
  props: args,
});

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
  breadcrumb: true,
  title: false
};
Breadcrumb.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1652%3A522"
  }
};

export const Title = Template.bind({});
Title.args = {
  title: true,
  breadcrumb: false
};
Title.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1652%3A522"
  }
};

export const FullPageHeader = Template.bind({});
FullPageHeader.args = {
  title: true,
  breadcrumb: true
};
FullPageHeader.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1652%3A522"
  }
};
