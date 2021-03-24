import { Meta, Story } from "@storybook/angular/types-6-0";
import { MenuBarItemComponent } from "src/app/menu-bar-item/menu-bar-item.component";

export default{
  title: 'Menu Bar Item',
  component: MenuBarItemComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<MenuBarItemComponent> = (args: MenuBarItemComponent) => ({
  component: MenuBarItemComponent,
  props: args,
});

export const  Normal = Template.bind({});
Normal.args = {
  label: 'Primary Menu Item',
  primaryItem: true
};
Normal.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1626%3A44917"
  }
};

export const  ActiveNormal = Template.bind({});
ActiveNormal.args = {
  label: 'Primary Menu Item',
  primaryItem: true,
  active: true
};
ActiveNormal.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1626%3A44917"
  }
};

export const  Collapsed = Template.bind({});
Collapsed.args = {
  label: 'Menu Item',
  primaryItem: true,
  collapsed: true
};
Collapsed.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1626%3A44917"
  }
};

export const  Uncollapsed = Template.bind({});
Uncollapsed.args = {
  label: 'Menu Item',
  primaryItem: true,
  uncollapsed: true
};
Uncollapsed.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1626%3A44917"
  }
};

export const  SubItem = Template.bind({});
SubItem.args = {
  label: 'Sub Item',
  subItem: true
};
SubItem.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1626%3A44917"
  }
};
