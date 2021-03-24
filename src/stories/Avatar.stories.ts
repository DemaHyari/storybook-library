import { Meta, Story } from "@storybook/angular/types-6-0";
import { AvatarComponent } from "src/app/avatar/avatar.component";

export default {
  title: 'Avatar',
  component: AvatarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  component: AvatarComponent,
  props: args,
});
export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  image: true,
  ellipse: true,
};
ImageAvatar.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A30836"
  }
};

export const ImageAvatarPresence = Template.bind({});
ImageAvatarPresence.args = {
  image: true,
  ellipse: true,
  presence: true
};
ImageAvatarPresence.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A30836"
  }
};

export const ImageAvatarCheck = Template.bind({});
ImageAvatarCheck.args = {
  image: true,
  ellipse: true,
  status: true,
  check: true
};
ImageAvatarCheck.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A30836"
  }
};

export const ImageAvatarClose = Template.bind({});
ImageAvatarClose.args = {
  image: true,
  ellipse: true,
  status: true,
  close: true
};
ImageAvatarClose.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A30836"
  }
};

export const ImageAvatarMore = Template.bind({});
ImageAvatarMore.args = {
  image: true,
  ellipse: true,
  status: true,
  more: true
};
ImageAvatarMore.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A30836"
  }
};

export const TextAvatar = Template.bind({});
TextAvatar.args = {
  text:true,
};
TextAvatar.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=704%3A30836"
  }
};
