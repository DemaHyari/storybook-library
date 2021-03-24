import { Meta, Story } from "@storybook/angular/types-6-0";
import { TabComponent } from "src/app/tab/tab.component";

export default{
  title: 'Tab',
  component: TabComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TabComponent> = (args: TabComponent) => ({
  component: TabComponent,
  props: args,
});

export const Unclosable = Template.bind({});
Unclosable.args = {
  closable: false,
  icon: false
};
Unclosable.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A32667"
  }
};

export const UnclosableWithIcon = Template.bind({});
UnclosableWithIcon.args = {
  closable: false,
  icon: true
};
UnclosableWithIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A32667"
  }
};

export const Closable = Template.bind({});
Closable.args = {
  closable: true,
  icon: false,
};
Closable.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A32667"
  }
};

export const ClosableWithIcon = Template.bind({});
ClosableWithIcon.args = {
  closable: true,
  icon: true
};
ClosableWithIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A32667"
  }
};

export const Active = Template.bind({});
Active.args = {
  closable: true,
  icon: true,
  active: true
};
Active.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A32667"
  }
};
