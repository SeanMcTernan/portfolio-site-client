const projectInfo = [
  {
    id: 1,
    headerTitle: 'RiverText',
    //Info card desc 175 char count max
    infoCardDescription: 'RiverText is a system that allows users to receive river flow information from The Canadian Water Office by sending a message from a satellite phone or any SMS enabled device.',
    appDescription: 'RiverText is a system that allows users to receive river flow information from The Canadian Water Office by sending a message from a satellite phone or any SMS enabled device. By sending a message to a Toll Free number, the app takes the request and queries the corresponding river name for its recent flow information and sends it back to the user. At this time there is no Frontend for the app, however it is operational. You can text any of the rivers in the rivers array to 833-589-0354 and receive a message. For example, text Stikine to 833-589-0354 and ask for the level of the Stikine River in Northern BC.',
    description: 'In 2019, I was fortunate enough to successfully kayak down one of the most challenging stretches of whitewater on the planet in Northern BC. The Grand Canyon of the Stikine. Traditionally, the run takes 3 days, so within those 3 days much can change as far as the river level is concerned. Each evening I sent a message via satellite phone to a friend to ask what the current level on the river was, I would have to wait for him to check his phone, then the government website for an accurate flow reading, then reply. It was quite cumbersome. From this, the idea for this app was created. An app that would sit and listen for inbound requests for river levels on a given set of rivers and reply with the latest reading. To set myself an additional challenge I decided to write this app in TypeScript. I had not yet built a live app via Typescript, so I thought this would be a great opportunity to apply what I had learned in some courses I was taking. The app as it stands is in its raw form. Going forward I would like to have a front end to show a map of rivers that are available and add a host server for remote to send flow data from gauge projects we are also working on. ',
    img: require('../images/RiverText.jpg'),
    repoURL: 'https://github.com/SeanMcTernan/RiverText',
    install: '3. From the folder run npm install\n4. Run npm run dev\n5. Make a request to the sever via Postman, or whatever your preferred app is, be sure to enter your cellphone so the app texts you: http://localhost:3000/riverdata/webhooks?from= ENTER YOUR CELLPHONE HERE &to=8335890354&subject&text=Elk',
    devTime: '1 Week'
  },
  {
    id: 2,
    headerTitle: 'Clear Monitoring',
    //Info card desc 175 char count max
    infoCardDescription: 'Clear Monitoring was built to help support staff close thousands of open tickets on the Intercom platform all at once via a CLI, rather than manually via the app interface. ',
    appDescription: 'Clear Monitoring is an App that was built to help support staff close thousands of emails on the Intercom platform all at once via a CLI. Through prompts the user can choose to close numerous emails associated with open tickets. The App can also release the associate message from the SimpleTexing platform which triggered the email in the first place. In the screenshots provided, there is a small snippet of the app in action. As you can see the emails are being closed at an extremely quick rate. The alternative, was to manually enter each email and select the close option.  ',
    description: 'The app was originally created to assist fellow support staff. The process before was rather laborious to close out open conversations in Intercom during a rush. I really felt there was a better more efficient way to close out these conversations and this is where the app was born. Along the way I learned some neat technologies like Inquirer and Chalk, though the biggest takeaway was finally getting a solid grasp of asynchronous functions. The app needed to call the intercom API continuously while it was running, so getting comfortable with asynchronous functions was vital to the successful rollout of the app.',
    img: require('../images/Intercom.gif'),
    repoURL: 'https://github.com/SeanMcTernan/clear-monitoring',
    install: '',
    devTime: '3 Weeks'
  },
  {
    id: 3,
    headerTitle: 'Portfolio Site',
    //Info card desc 175 char count max
    infoCardDescription: 'The frontend of my Portfolio site is designed to showcase my capabilities with React, but also host and easy to navigate directory of my projects.',
    appDescription: 'The frontend of my Portfolio site is designed to showcase my capabilities with React, but also host and easy to navigate directory of my projects. The frameworks used were React and Bootstrap to allow for easy responsive design.',
    description: 'The motivation was simple, I wanted somewhere (other than GitHub of course) to showcase my projects. For this project, I decided to fully commit to a TypeScript as my language of choice going forward. Its been a challenge to say the least, but I feel I have learned so much about TypeScript and really started to understand the benefits of using it for development. Admittedly, after completing Maximilian Schwarzmüller`s Understanding TypeScript course I did not fully grasp the benefits of the language, it seemed to add more roadblocks over solutions. However, after speaking to many friends about my feelings the assured it would help with streamlining development. After committing to this project, I finally understand what the mean! Along with Typescript, I learned React-Bootstrap for the first time which was a huge help. I was not looking forward to toiling away with various browser elements. It was a happy accident I discovered this when I did, it`s made developing the front end a lot more enjoyable.',
    img: require('../images/PortfolioSite.gif'),
    repoURL: 'https://github.com/SeanMcTernan/portfolio-site-client',
    install: '',
    devTime: 'Still in Development'
  },
  {
    id: 4,
    headerTitle: 'Portfolio Site - Backend',
    //Info card desc 175 char count max
    infoCardDescription: 'The backend of the Portfolio site serves to assist login and permissions on my portfolio site. It was created entirely using Serverless',
    appDescription: 'The backend of the Portfolio site serves to assist login and permissions on my portfolio site. It allows users to create accounts, login and request permissions to see restricted areas on the site that are otherwise invisible unless approved. ',
    description: 'The backend was created to reapply what I learned during the Serverless-Stack course. I enjoyed working with AWS during this course and wanted to continue growing my knowledge with this technology. I learned quite a lot about AWS and their offerings. In particular Lambda and Cognito. I feel they are well established tools, however from the outset they seem alot more difficult to pickup compared to their competitor Google and the APIs they offer such as Firebase.',
    img: require('../images/PortfolioSite-Backend.jpg'),
    repoURL: 'https://github.com/SeanMcTernan/portfolio-site-api',
    install: '',
    devTime: '3 Weeks'
  },
  {
    id: 5,
    headerTitle: 'NodeJS Chat App',
    //Info card desc 175 char count max
    infoCardDescription: 'A small NodeJS chat app designed to explore Socket.io and how it can be used to update information in real time on a users browser.',
    appDescription: 'A small NodeJS chat app designed to explore Socket.io and how it can be used to update information in real time on a users browser.',
    description:
      'The app allows users to enter their name and the chat room they would like to enter. When entered, the app checks for a valid unique entry and stores the information entered. In the screenshots provided, you can see two users logged into the app (one on a regular window, the other on Incognito). As new users log in or out, messages are displayed to those in the chat room on the activity of other users. "User has joined", "User has left" etc. Should a user use bad language the Bad-Language dependency will catch the phrase and the admin will send them a message informing them that "Profanity is not allowed!". Along with sending chat messages, users can share their location with others in the room. By hitting the "Send Location" feature. The app takes their location and a link to Google Maps from the chat room.',
    img: require('../images/NodeJS-Chat-App.jpg'),
    repoURL: 'https://github.com/SeanMcTernan/nodejs-chat-app',
    install: '',
    devTime: '1 Week'
  },
  {
    id: 6,
    headerTitle: 'Severless Notes',
    //Info card desc 175 char count max
    infoCardDescription: 'The frontend of my Serverless note taking app. The App was created as part of the Servless-Stack course where I learned about AWS and the Severless.',
    appDescription: 'The app is live! Click the link above to visit the site.\n\nThe frontend of my Serverless note taking app. The App was created as part of the Servless-Stack course where I learned about AWS and the Severless.\n\nThe frontend of the app was basic by design. The focus of this project was to seamlessly link the front and back end of a web application. Above, you can see a login and sign up option for the landing page. Using AWS amplify, users can create an account or sign into an existing account.Once logged-in users can see their existing notes and click to edit them. Alternatively, they can choose to create a new note, or edits their settings. The settings section was created using the Stripe sandbox. No charges can be processed if any details are entered. It was created as a means of understanding 3rd party payment applications. When a user clicks into a note, they can edit the existing content of a note, including its attachments, or choose to delete the note entirely from the system.',
    description:
      'Serverless applications are the most common use case for modern applications, so I wanted to get up to speed on what was being used and how to apply it to a real-world scenario. Needless to say, a note taking app is about as original as printing hello world!, but in this instance a familiar application made it easier to digest the new methods that were being applied. AWS Cognito, S3, Lambda, DynamoDB were all used, so it was a deep dive into new concepts. Likewise, it was very interesting to see committed changes being sent automatically to Netlify, a concept I was familiar with, but had yet to see it in practice.',
    img: require('../images/NoteTaking-App.jpg'),
    repoURL: 'https://github.com/SeanMcTernan/serverless-stack-client',
    install: '',
    devTime: '1 Week'
  },
  {
    id: 7,
    headerTitle: 'TS Drag & Drop Project',
    //Info card desc 175 char count max
    infoCardDescription: 'A small Typescript project, to explore drag and drop functionality within a browser.',
    appDescription: 'A small Typescript project, to explore drag and drop functionality within a browser.\n\nThe project consists of a basic form field, whereby a user can add a Title, Description and the number of people assigned to a project. There is a small amount of error checking associated with the form so that users cannot input incorrect information.  Once Add Project is selected the project is automatically added to Active Projects. The user can then click and drag the project to finished projects. You may also move a project back to active from finished projects. You can see the project in action in the snippets below.',
    description: 'In May 2020 I started working with RURU-Software on their delivery app. The app was built using Typescript. Even though I had completed Understanding-Typescript by Maximilian Schwarzmüller in early 2019, I had never gotten an opportunity to apply my knowledge in a real-world application. When the opportunity had come up to work with RuRu, I checked back on Max`s course and was happy to see an updated version was available for 2020, this was one of the many projects I had gotten to work on this course, while at the same time working for RuRu.\n\nI learned a great deal about browser tools and type safety while working on this project. I had seen applications like Trello use the drag and drop feature to great effect, so I was happy to learn what was required while working on this project.',
    img: require('../images/Drag&Drop.gif'),
    repoURL: 'https://github.com/SeanMcTernan/typescript-drag-and-drop-project',
    install: '',
    devTime: '2 days'
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
  infoCardDescription: string;
  appDescription: string;
  description: string;
  img: string;
  repoURL: string;
  install: string,
  devTime: string;
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

