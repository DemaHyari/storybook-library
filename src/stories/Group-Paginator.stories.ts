import { Meta, Story } from "@storybook/angular/types-6-0";
import { GroupPaginationComponent } from "src/app/group-pagination/group-pagination.component";

export default{
  title: 'Group Paginators',
  component: GroupPaginationComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<GroupPaginationComponent> = (args: GroupPaginationComponent) => ({
  component: GroupPaginationComponent,
  props: args,
});

export const Paginator = Template.bind({});
Paginator.args = {
  active: true,
  label: '55',
};
Paginator.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=690%3A45327"
  }
};
