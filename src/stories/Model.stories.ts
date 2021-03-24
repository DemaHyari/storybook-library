import { Meta, Story } from "@storybook/angular/types-6-0";
import { ModelComponent } from "src/app/model/model.component";

export default{
  title: 'Model',
  component: ModelComponent,
} as Meta

const Template: Story<ModelComponent> = (args: ModelComponent) => ({
  component: ModelComponent,
  props: args,
});

export const BasicInformation = Template.bind({});
BasicInformation.args = {
  information: true
};
BasicInformation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const InfoInformation = Template.bind({});
InfoInformation.args = {
  information: true,
  info: true,
  title: 'Information Title',
  icon:true,
};
InfoInformation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const ErrorInformation = Template.bind({});
ErrorInformation.args = {
  information: true,
  error: true,
  title: 'Error or Delete Title',
  icon:true,
};
ErrorInformation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const WarningInformation = Template.bind({});
WarningInformation.args = {
  information: true,
  warning: true,
  title: 'Warning Title',
  icon:true,
};
WarningInformation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const SuccessInformation = Template.bind({});
SuccessInformation.args = {
  information: true,
  success: true,
  title: 'Success Title',
  icon:true,
};
SuccessInformation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const InfoInformationWithoutIcon = Template.bind({});
InfoInformationWithoutIcon.args = {
  information: true,
  info: true,
  title: 'Information Title',
};
InfoInformationWithoutIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const ErrorInformationWithoutIcon = Template.bind({});
ErrorInformationWithoutIcon.args = {
  information: true,
  error: true,
  title: 'Error or Delete Title',
};
ErrorInformationWithoutIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const WarningInformationWithoutIcon = Template.bind({});
WarningInformationWithoutIcon.args = {
  information: true,
  warning: true,
  title: 'Warning Title',
};
WarningInformationWithoutIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const SuccessInformationWithoutIcon = Template.bind({});
SuccessInformationWithoutIcon.args = {
  information: true,
  success: true,
  title: 'Success Title',
};
SuccessInformationWithoutIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

//Confermation
export const BasicConfermation = Template.bind({});
BasicConfermation.args = {
  information: false
};
BasicConfermation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const InfoConfermation = Template.bind({});
InfoConfermation.args = {
  information: true,
  info: true,
  title: 'Information Title',
  icon:true,
};
InfoConfermation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const ErrorConfermation = Template.bind({});
ErrorConfermation.args = {
  information: false,
  error: true,
  title: 'Error or Delete Title',
  icon:true,
};
ErrorConfermation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const WarningConfermation = Template.bind({});
WarningConfermation.args = {
  information: false,
  warning: true,
  title: 'Warning Title',
  icon:true,
};
WarningConfermation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const SuccessConfermation = Template.bind({});
SuccessConfermation.args = {
  information: false,
  success: true,
  title: 'Success Title',
  icon:true,
};
SuccessConfermation.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const InfoConfermationWithoutIcon = Template.bind({});
InfoConfermationWithoutIcon.args = {
  information: false,
  info: true,
  title: 'Information Title',
};
InfoConfermationWithoutIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const ErrorConfermationWithoutIcon = Template.bind({});
ErrorConfermationWithoutIcon.args = {
  information: false,
  error: true,
  title: 'Error or Delete Title',
};
ErrorConfermationWithoutIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const WarningConfermationWithoutIcon = Template.bind({});
WarningConfermationWithoutIcon.args = {
  information: false,
  warning: true,
  title: 'Warning Title',
};
WarningConfermationWithoutIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};

export const SuccessConfermationWithoutIcon = Template.bind({});
SuccessConfermationWithoutIcon.args = {
  information: false,
  success: true,
  title: 'Success Title',
};
SuccessConfermationWithoutIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4fkXprPZROGGyCrknp6GfW/Blue-Waves-Design-System?node-id=716%3A987"
  }
};
