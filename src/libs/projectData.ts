const projectInfo = [
  {
    id: 1,
    headerTitle: 'RiverText',
    appDescription: 'RiverText is a system that allows users to receive river flow information from The Canadian Water Office by sending a message from a satellite phone or any SMS enabled device. By sending a message to a Toll Free number, the app takes the request and queries the corresponding river name for its recent flow information and sends it back to the user.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat. Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est?',
    img: require('../images/RiverText.jpg'),
    repoURL: 'https://github.com/SeanMcTernan/RiverText',
    maps:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711'
  },
  {
    id: 2,
    headerTitle: 'Clear Monitoring',
    appDescription: 'Clear Monitoring is an App that was build to help support staff close thousands of emails on the Intercom platform all at once via a CLI. Through prompts the user can choose to close numerous emails associated with open tickets. The App can also release the associate message from the SimpleTexing platform which triggered the email in the first place.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat. Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est?',
    img: require('../images/Intercom.gif'),
    repoURL: 'https://github.com/SeanMcTernan/clear-monitoring',
    maps:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711'
  },
  {
    id: 3,
    headerTitle: 'Portfolio Site',
    appDescription: 'The frontend of my Portfolio site is designed to showcase my capabilities with React, but also host and easy to navigate directory of my projects. The frameworks used were React and Bootstrap to allow for easy responsive design.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat. Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est?',
    img: require('../images/PortfolioSite.gif'),
    repoURL: 'https://github.com/SeanMcTernan/portfolio-site-client',
    maps:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711'
  },
  {
    id: 4,
    headerTitle: 'Portfolio Site - Backend',
    appDescription: 'The backend of the Portfolio site serves to assist login and permissions on my portfolio site. It was created entirely using Serverless',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat. Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est?',
    img: require('../images/PortfolioSite-Backend.jpg'),
    repoURL: 'https://github.com/SeanMcTernan/portfolio-site-api',
    maps:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711'
  },
  {
    id: 5,
    headerTitle: 'NodeJS Chat App',
    appDescription: 'A small NodeJS chat app designed to explore Socket.io and how it can be used to update information in real time on a users browser.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat. Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est?',
    img: require('../images/NodeJS-Chat-App.jpg'),
    repoURL: 'https://github.com/SeanMcTernan/nodejs-chat-app',
    maps:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711'
  },
  {
    id: 6,
    headerTitle: 'Severless Notes',
    appDescription: 'The frontend of my Serverless note taking app. The App was created as part of the Servless-Stack course where I learned about AWS and the Severless.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat. Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est?',
    img: require('../images/NoteTaking-App.jpg'),
    repoURL: 'https://github.com/SeanMcTernan/serverless-stack-client',
    maps:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711'
  },
  {
    id: 7,
    headerTitle: 'TS Drag & Drop Project',
    appDescription: 'A small Typescript project, to explore drag and drop functionality within a browser.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui voluptate odio quod doloremque unde reprehenderit velit quaerat. Deserunt voluptatem natus suscipit aliquid, eligendi sequi dicta porro? Laudantium, libero est?',
    img: require('../images/Drag&Drop.gif'),
    repoURL: 'https://github.com/SeanMcTernan/typescript-drag-and-drop-project',
    maps:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.3850145412064!2d37.600589158335865!3d55.72774864513666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0be3ac9d11%3A0x735806d25b3bdc55!2z0JzRg9C30LXQuSDRgdC-0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIMKr0JPQsNGA0LDQtsK7!5e0!3m2!1sru!2sru!4v1547763408711'
  }
];

const technologies = [
  {
    id: 1,
    name: 'John',
    avatar: '.././avatars/avatar-1.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quaerat repellendus. Ad at sit laboriosam sint ea mollitia incidunt voluptatibus inventore libero dolorem velit dolor nobis odit tempora, ex consequuntur.'
  },
  {
    id: 2,
    name: 'Mike',
    avatar: '.././avatars/avatar-2.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quaerat repellendus. Ad at sit laboriosam sint ea mollitia incidunt voluptatibus inventore libero dolorem velit dolor nobis odit tempora, ex consequuntur.'
  },
  {
    id: 3,
    name: 'Sofia',
    avatar: '.././avatars/avatar-3.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quaerat repellendus. Ad at sit laboriosam sint ea mollitia incidunt voluptatibus inventore libero dolorem velit dolor nobis odit tempora, ex consequuntur.'
  },
  {
    id: 4,
    name: 'Joseph',
    avatar: '.././avatars/avatar-4.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quaerat repellendus. Ad at sit laboriosam sint ea mollitia incidunt voluptatibus inventore libero dolorem velit dolor nobis odit tempora, ex consequuntur.'
  },
  {
    id: 5,
    name: 'Natasha',
    avatar: '.././avatars/avatar-5.png',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quaerat repellendus. Ad at sit laboriosam sint ea mollitia incidunt voluptatibus inventore libero dolorem velit dolor nobis odit tempora, ex consequuntur.'
  }
];

export interface projectInfoProp {
  id: number;
  headerTitle: string;
  appDescription: string;
  description: string;
  img: string;
  repoURL: string;
  maps: string;
}

export interface projectInfoProps extends Array<projectInfoProp> { }

interface technoloigiesProp {
  id: number;
  name: string;
  avatar: string;
  comment: string;
}

export interface technoloigiesProps extends Array<technoloigiesProp> { }

export { projectInfo, technologies }

