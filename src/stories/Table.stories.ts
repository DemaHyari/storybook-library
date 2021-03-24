import { Meta, Story } from "@storybook/angular/types-6-0";
import { TableComponent } from "src/app/table/table.component";

export default{
  title: 'Table',
  component: TableComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TableComponent> = (args: TableComponent) => ({
  component: TableComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const Border = Template.bind({});
Border.args = {
  border: true
};
Border.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const OrderBase = Template.bind({});
OrderBase.args = {
  order_base: true
};
OrderBase.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const OrderBaseWithBorder = Template.bind({});
OrderBaseWithBorder.args = {
  order_base: true,
  border: true
};
OrderBaseWithBorder.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true
};
Selected.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=706%3A33009"
  }
};
