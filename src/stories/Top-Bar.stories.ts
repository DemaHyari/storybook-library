import { Meta, Story } from "@storybook/angular/types-6-0";
import { AppTopbarComponent } from "src/app/app-topbar/app-topbar.component";

export default{
  title: 'Application TopBar',
  component: AppTopbarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<AppTopbarComponent> = (args: AppTopbarComponent) => ({
  component: AppTopbarComponent,
  props: args,
});

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  searchIcon: true,
};
SearchIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1626%3A44917"
  }
};

export const SearchInput = Template.bind({});
SearchInput.args = {
  searchInput: true,
};
SearchInput.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1626%3A44917"
  }
};

export const Logo = Template.bind({});
Logo.args = {
  searchIcon: true,
  logo: true
};
Logo.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1626%3A44917"
  }
};
