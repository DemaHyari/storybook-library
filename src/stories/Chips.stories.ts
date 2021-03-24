import { ChipsComponent } from "src/app/chips/chips.component";
import { Meta, Story } from '@storybook/angular/types-6-0';

export default{
  title: 'Chips',
  component: ChipsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ChipsComponent> = (args: ChipsComponent) => ({
  component: ChipsComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Chip',
  default: true,
  rounded: true,
  outline: true
};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Default Chip',
  primary: true,
  rounded: true
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const Positive = Template.bind({});
Positive.args = {
  label: 'Default Chip',
  positive: true,
  rounded: true
};
Positive.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Default Chip',
  warning: true,
  rounded: true
};
Warning.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const Error = Template.bind({});
Error.args = {
  label: 'Default Chip',
  error: true,
  rounded: true
};
Error.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Selected Chip',
  primary: true,
  rounded: true,
  selected: true
};
Selected.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const Iconic = Template.bind({});
Iconic.args = {
  label: 'Iconic Chip',
  primary: true,
  rounded: true,
  iconic: true
};
Iconic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const Counter = Template.bind({});
Counter.args = {
  label: 'Counter Chip',
  primary: true,
  rounded: true,
  counter: true,
  count: 30
};
Counter.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const UserImage = Template.bind({});
UserImage.args = {
  label: 'User Image Chip',
  primary: true,
  rounded: true,
  userImage: true,
};
UserImage.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const Addable = Template.bind({});
Addable.args = {
  label: 'Addable Chip',
  primary: true,
  rounded: true,
  addable: true
};
Addable.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};

export const Removable = Template.bind({});
Removable.args = {
  label: 'Removable Chip',
  primary: true,
  rounded: true,
  removable: true
};
Removable.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Chip',
  primary: true,
  rounded: true,
  disabled: true
};
Disabled.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=1243%3A38677"
  }
};
