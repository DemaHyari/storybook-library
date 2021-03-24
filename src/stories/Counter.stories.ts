import { Meta, Story } from "@storybook/angular/types-6-0";
import { CounterComponent } from "src/app/counter/counter.component";

export default {
  title: 'Counter',
  component: CounterComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CounterComponent> = (args: CounterComponent) => ({
  component: CounterComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A537"
  }
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  primaryInverted: true
};
PrimaryInverted.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A537"
  }
};

export const Important = Template.bind({});
Important.args = {
  important: true
};
Important.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A537"
  }
};

export const Added = Template.bind({});
Added.args = {
  added: true
};
Added.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A537"
  }
};

export const Removed = Template.bind({});
Removed.args = {
  removed: true
};
Removed.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=961%3A537"
  }
};
