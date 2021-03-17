import { Meta, Story } from "@storybook/angular/types-6-0";
import { PaginationComponent } from "src/app/pagination/pagination.component";

export default{
  title: 'Paginators',
  component: PaginationComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<PaginationComponent> = (args: PaginationComponent) => ({
  component: PaginationComponent,
  props: args,
});

export const Paginator = Template.bind({});
Paginator.args = {
  active: true,
  label: '55',
};
