//Raw Technology Used Array
const technologies = [
  {
    techID: 0,
    name: 'JavaScript',
    imgSrc: require('../images/Technologies_Icons/javascript.svg'),
    technologiesLink: 'https://www.javascript.com/'
  },
  {
    techID: 1,
    name: 'TypeScript',
    imgSrc: require('../images/Technologies_Icons/typescript.svg'),
    technologiesLink: 'https://www.typescriptlang.org/'
  },
  {
    techID: 2,
    name: 'NodeJS',
    imgSrc: require('../images/Technologies_Icons/nodejs.svg'),
    technologiesLink: 'https://nodejs.org/en/'
  },
  {
    techID: 3,
    name: 'NPM',
    imgSrc: require('../images/Technologies_Icons/npm.svg'),
    technologiesLink: 'https://www.npmjs.com/'
  },
  {
    techID: 4,
    name: 'React',
    imgSrc: require('../images/Technologies_Icons/react.svg'),
    technologiesLink: 'https://reactjs.org/'
  },
  {
    techID: 5,
    name: 'Nodemon',
    imgSrc: require('../images/Technologies_Icons/nodemon.svg'),
    technologiesLink: 'https://www.npmjs.com/package/nodemon'
  },
  {
    techID: 6,
    name: 'ENV-CMD',
    imgSrc: require('../images/Technologies_Icons/env-cmd.svg'),
    technologiesLink: 'https://www.npmjs.com/package/env-cmd'
  },
  {
    techID: 7,
    name: 'ExpressJS',
    imgSrc: require('../images/Technologies_Icons/expressjs.svg'),
    technologiesLink: 'https://expressjs.com/'
  },
  {
    techID: 8,
    name: 'Axios',
    imgSrc: require('../images/Technologies_Icons/axios.svg'),
    technologiesLink: 'https://www.npmjs.com/package/axios'
  },
  {
    techID: 9,
    name: 'MomentJS',
    imgSrc: require('../images/Technologies_Icons/momentjs.svg'),
    technologiesLink: 'https://momentjs.com/'
  },
  {
    techID: 10,
    name: 'SimpleTexting API',
    imgSrc: require('../images/Technologies_Icons/SimpleTexting.svg'),
    technologiesLink: 'https://simpletexting.com/'
  },
  {
    techID: 11,
    name: 'Scrapi API',
    imgSrc: require('../images/Technologies_Icons/Scrapi.svg'),
    technologiesLink: 'https://scrap2api.web.app/'
  },
  {
    techID: 12,
    name: 'Body-Parser',
    imgSrc: require('../images/Technologies_Icons/body-parser.svg'),
    technologiesLink: 'https://www.npmjs.com/package/body-parser'
  },
  {
    techID: 13,
    name: 'Chalk',
    imgSrc: require('../images/Technologies_Icons/chalk.svg'),
    technologiesLink: 'https://www.npmjs.com/package/chalk'
  },
  {
    techID: 14,
    name: 'Inquirer',
    imgSrc: require('../images/Technologies_Icons/inquirer.svg'),
    technologiesLink: 'https://www.npmjs.com/package/inquirer'
  },
  {
    techID: 15,
    name: 'Request',
    imgSrc: require('../images/Technologies_Icons/request.svg'),
    technologiesLink: 'https://www.npmjs.com/package/request'
  },
  {
    techID: 16,
    name: 'AWS-Amplify',
    imgSrc: require('../images/Technologies_Icons/amplify.svg'),
    technologiesLink: 'https://www.npmjs.com/package/aws-amplify'
  },
  {
    techID: 17,
    name: 'React-Boootstrap',
    imgSrc: require('../images/Technologies_Icons/react-bootstrap.svg'),
    technologiesLink: 'https://react-bootstrap.github.io/'
  },
  {
    techID: 18,
    name: 'React-Router-Dom',
    imgSrc: require('../images/Technologies_Icons/react-router-dom.svg'),
    technologiesLink: 'https://www.npmjs.com/package/react-router-dom'
  },
  {
    techID: 19,
    name: 'AWS-Cognito',
    imgSrc: require('../images/Technologies_Icons/cognito.svg'),
    technologiesLink: 'https://aws.amazon.com/cognito/'
  },
  {
    techID: 20,
    name: 'AWS-DynamoDB',
    imgSrc: require('../images/Technologies_Icons/dynamodb.svg'),
    technologiesLink: 'https://aws.amazon.com/dynamodb/'
  },
  {
    techID: 21,
    name: 'AWS-Lambda',
    imgSrc: require('../images/Technologies_Icons/lambda.svg'),
    technologiesLink: 'https://aws.amazon.com/lambda/'
  },
  {
    techID: 22,
    name: 'AWS-SDK',
    imgSrc: require('../images/Technologies_Icons/aws-sdk.svg'),
    technologiesLink: 'https://www.npmjs.com/package/aws-sdk'
  },
  {
    techID: 23,
    name: 'Serverless-Bundle',
    imgSrc: require('../images/Technologies_Icons/severless.svg'),
    technologiesLink: 'https://www.npmjs.com/package/serverless-dotenv-plugin'
  },
  {
    techID: 24,
    name: 'Serverless-Offline',
    imgSrc: require('../images/Technologies_Icons/severless-offline.svg'),
    technologiesLink: 'https://www.npmjs.com/package/serverless-offline'
  },
  {
    techID: 25,
    name: 'UUID',
    imgSrc: require('../images/Technologies_Icons/uuid.svg'),
    technologiesLink: 'https://www.npmjs.com/package/uuid'
  },
  {
    techID: 26,
    name: 'Socket.IO',
    imgSrc: require('../images/Technologies_Icons/socket.svg'),
    technologiesLink: 'https://socket.io/'
  },
  {
    techID: 27,
    name: 'Bad-Words',
    imgSrc: require('../images/Technologies_Icons/bad-word.svg'),
    technologiesLink: 'https://www.npmjs.com/package/bad-words'
  }
];

//Raw Project Data
const projectInfo = [
  {
    id: 1,
    headerTitle: 'RiverText',
    //Info card desc 175 char count max
    infoCardDescription: 'RiverText is a system that allows users to receive river flow information from The Canadian Water Office by sending a message from a satellite phone or any SMS enabled device.',
    appDescription: 'RiverText is a system that allows users to receive river flow information from The Canadian Water Office by sending a message from a satellite phone or any SMS enabled device. By sending a message to a Toll Free number, the app takes the request and queries the corresponding river name for its recent flow information and sends it back to the user. At this time there is no Frontend for the app, however it is operational. You can text any of the rivers in the rivers array to 833-589-0354 and receive a message. For example, text Stikine to 833-589-0354 and ask for the level of the Stikine River in Northern BC.',
    description: 'In 2019, I was fortunate enough to successfully kayak down one of the most challenging stretches of whitewater on the planet in Northern BC. The Grand Canyon of the Stikine. Traditionally, the run takes 3 days, so within those 3 days much can change as far as the river level is concerned. Each evening I sent a message via satellite phone to a friend to ask what the current level on the river was, I would have to wait for him to check his phone, then the government website for an accurate flow reading, then reply. It was quite cumbersome. From this, the idea for this app was created. An app that would sit and listen for inbound requests for river levels on a given set of rivers and reply with the latest reading. To set myself an additional challenge I decided to write this app in TypeScript. I had not yet built a live app via Typescript, so I thought this would be a great opportunity to apply what I had learned in some courses I was taking. The app as it stands is in its raw form. Going forward I would like to have a front end to show a map of rivers that are available and add a host server for remote to send flow data from gauge projects we are also working on. ',
    images: [{ src: require('../images/RiverText.jpg'), title: 'RiverText being used on a satelite phone' }],
    repoURL: 'https://github.com/SeanMcTernan/RiverText',
    technologies: [technologies[1], technologies[2], technologies[3], technologies[5], technologies[6], technologies[7], technologies[8], technologies[9], technologies[10], technologies[11], technologies[12]],
    install: ['1. Click on the GitHub link Above', '2. Clone/Download the Repository', '3. From the folder run: npm install', '4. Run: npm run dev', '5. Make a request to the sever via Postman, or whatever your preferred app is, be sure to enter your cellphone so the app texts you: http://localhost:3000/riverdata/webhooks?from= ENTER YOUR CELLPHONE HERE &to=8335890354&subject&text=Elk'],
    devTime: '1 Week'
  },
  {
    id: 2,
    headerTitle: 'Clear Monitoring',
    //Info card desc 175 char count max
    infoCardDescription: 'Clear Monitoring was built to help support staff close thousands of open tickets on the Intercom platform all at once via a CLI, rather than manually via the app interface. ',
    appDescription: 'Clear Monitoring is an App that was built to help support staff close thousands of emails on the Intercom platform all at once via a CLI. Through prompts the user can choose to close numerous emails associated with open tickets. The App can also release the associate message from the SimpleTexing platform which triggered the email in the first place. In the screenshots provided, there is a small snippet of the app in action. As you can see the emails are being closed at an extremely quick rate. The alternative, was to manually enter each email and select the close option.  ',
    description: 'The app was originally created to assist fellow support staff. The process before was rather laborious to close out open conversations in Intercom during a rush. I really felt there was a better more efficient way to close out these conversations and this is where the app was born. Along the way I learned some neat technologies like Inquirer and Chalk, though the biggest takeaway was finally getting a solid grasp of asynchronous functions. The app needed to call the intercom API continuously while it was running, so getting comfortable with asynchronous functions was vital to the successful rollout of the app.',
    images: [{ src: require('../images/Intercom.gif'), title: 'Clear Monitoring closing tickets' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/blob/master/ReadMe_Images/Clear_Monitoring/Clear_Monitoring_Sample.png?raw=true', title: 'Cli for Clear Monitoring' }],
    repoURL: 'https://github.com/SeanMcTernan/clear-monitoring',
    technologies: [technologies[2], technologies[3], technologies[5], technologies[6], technologies[8], technologies[13], technologies[14], technologies[15]],
    install: ['1. Click on the GitHub link Above.', '2. Clone/Download the Repository.', '3. From the folder run: npm install', '4. Add an intercom API in the following location credentials/credentials.js', '5. Run: node app'],
    devTime: '3 Weeks'
  },
  {
    id: 3,
    headerTitle: 'Portfolio Site',
    //Info card desc 175 char count max
    infoCardDescription: 'The frontend of my Portfolio site is designed to showcase my capabilities with React, but also host and easy to navigate directory of my projects.',
    appDescription: 'The frontend of my Portfolio site is designed to showcase my capabilities with React, but also host and easy to navigate directory of my projects. The frameworks used were React and Bootstrap to allow for easy responsive design. To create my portfolio app, I`ve compiled skills I have learned from a variety of different sources which I have accumulated over the years. I wanted a fun project to work on, while showcasing my skills in both backend and frontend development. After working with Ruru Software on a Project on AWS, I decided to expand my knowledge of Lambda and Dynamo DB while working on this project. I thought of some fun operations to use to allow users to sign up and request certain permissions on the site. So far it has given me a much deeper understanding of AWS and it`s offering.',
    description: 'The motivation was simple, I wanted somewhere (other than GitHub of course) to showcase my projects. For this project, I decided to fully commit to a TypeScript as my language of choice going forward. Its been a challenge to say the least, but I feel I have learned so much about TypeScript and really started to understand the benefits of using it for development. Admittedly, after completing Maximilian Schwarzmüller`s Understanding TypeScript course I did not fully grasp the benefits of the language, it seemed to add more roadblocks over solutions. However, after speaking to many friends about my feelings the assured it would help with streamlining development. After committing to this project, I finally understand what the mean! Along with Typescript, I learned React-Bootstrap for the first time which was a huge help. I was not looking forward to toiling away with various browser elements. It was a happy accident I discovered this when I did, it`s made developing the front end a lot more enjoyable.',
    images: [{ src: require('../images/PortfolioSite.gif'), title: 'Homepage Main image CSS' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/Portfolio_App/portfolio_site_sample_1.png?raw=true', title: 'Homepage' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/Portfolio_App/portfolio_site_sample_2.png?raw=true', title: 'Settings page' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/Portfolio_App/Portfolio-App-Example_2.png?raw=true', title: 'Login page' }],
    repoURL: 'https://github.com/SeanMcTernan/portfolio-site-client',
    technologies: [technologies[1], technologies[4], technologies[16], technologies[17], technologies[18], technologies[19]],
    install: ['1. Click on the GitHub link Above.', '2. Clone/Download the Repository.', '3. From the folder run: npm install', '4. Run: npm start'],
    devTime: 'Still in Development'
  },
  {
    id: 4,
    headerTitle: 'Portfolio Site - Backend',
    //Info card desc 175 char count max
    infoCardDescription: 'The backend of the Portfolio site serves to assist login and permissions on my portfolio site. It was created entirely using Serverless',
    appDescription: 'The backend of the Portfolio site serves to assist login and permissions on my portfolio site. It allows users to create accounts, login and request permissions to see restricted areas on the site that are otherwise invisible unless approved. ',
    description: 'The backend was created to reapply what I learned during the Serverless-Stack course. I enjoyed working with AWS during this course and wanted to continue growing my knowledge with this technology. I learned quite a lot about AWS and their offerings. In particular Lambda and Cognito. I feel they are well established tools, however from the outset they seem alot more difficult to pickup compared to their competitor Google and the APIs they offer such as Firebase.',
    images: [{ src: require('../images/PortfolioSite-Backend.jpg'), title: 'Homepage Main image CSS' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/Portfolio_App/Portfolio-App-Example_2.png?raw=true', title: 'Login page' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/Portfolio_App/portfolio_site_sample_1.png?raw=true', title: 'Settings page' }],
    repoURL: 'https://github.com/SeanMcTernan/portfolio-site-api',
    technologies: [technologies[2], technologies[19], technologies[20], technologies[21], technologies[22], technologies[23], technologies[24], technologies[25]],
    install: ['1. Click on the GitHub link Above.', '2. Clone/Download the Repository.', '3. From the folder run: npm install'],
    devTime: '3 Weeks'
  },
  {
    id: 5,
    headerTitle: 'NodeJS Chat App',
    //Info card desc 175 char count max
    infoCardDescription: 'A small NodeJS chat app designed to explore Socket.io and how it can be used to update information in real time on a users browser.',
    appDescription: 'A small NodeJS chat app designed to explore Socket.io and how it can be used to update information in real time on a users browser.',
    description: 'The app allows users to enter their name and the chat room they would like to enter. When entered, the app checks for a valid unique entry and stores the information entered. In the screenshots provided, you can see two users logged into the app (one on a regular window, the other on Incognito). As new users log in or out, messages are displayed to those in the chat room on the activity of other users. "User has joined", "User has left" etc. Should a user use bad language the Bad-Language dependency will catch the phrase and the admin will send them a message informing them that "Profanity is not allowed!". Along with sending chat messages, users can share their location with others in the room. By hitting the "Send Location" feature. The app takes their location and a link to Google Maps from the chat room.',
    images: [{ src: require('../images/NodeJS-Chat-App.jpg'), title: 'Chat login page' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/NodeJS_ChatApp/nodeJS_Chat_App_ScreenShot_2.png?raw=true', title: 'Two Active Chats' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/NodeJS_ChatApp/nodeJS_Chat_App_ScreenShot_3.png?raw=true', title: 'Chatbox and send location' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/NodeJS_ChatApp/nodeJS_Chat_App_ScreenShot_Location.png?raw=true', title: 'Users shared location' }],
    repoURL: 'https://github.com/SeanMcTernan/nodejs-chat-app',
    technologies: [technologies[2], technologies[7], technologies[3], technologies[6], technologies[26], technologies[27]],
    install: ['1. Click on the GitHub link Above.', '2. Clone/Download the Repository.', '3. From the folder run: npm install'],
    devTime: '1 Week'
  },
  {
    id: 6,
    headerTitle: 'Severless Notes',
    //Info card desc 175 char count max
    infoCardDescription: 'The frontend of my Serverless note taking app. The App was created as part of the Servless-Stack course where I learned about AWS and the Severless.',
    appDescription: 'The app is live! Click the link above to visit the site.\n\nThe frontend of my Serverless note taking app. The App was created as part of the Servless-Stack course where I learned about AWS and the Severless.\n\nThe frontend of the app was basic by design. The focus of this project was to seamlessly link the front and back end of a web application. Above, you can see a login and sign up option for the landing page. Using AWS amplify, users can create an account or sign into an existing account.Once logged-in users can see their existing notes and click to edit them. Alternatively, they can choose to create a new note, or edits their settings. The settings section was created using the Stripe sandbox. No charges can be processed if any details are entered. It was created as a means of understanding 3rd party payment applications. When a user clicks into a note, they can edit the existing content of a note, including its attachments, or choose to delete the note entirely from the system.',
    description: 'Serverless applications are the most common use case for modern applications, so I wanted to get up to speed on what was being used and how to apply it to a real-world scenario. Needless to say, a note taking app is about as original as printing hello world!, but in this instance a familiar application made it easier to digest the new methods that were being applied. AWS Cognito, S3, Lambda, DynamoDB were all used, so it was a deep dive into new concepts. Likewise, it was very interesting to see committed changes being sent automatically to Netlify, a concept I was familiar with, but had yet to see it in practice.',
    images: [{ src: require('../images/NoteTaking-App.jpg'), title: 'Notes login page' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/Serverless-Notes-App/Serverless-notes-app-sample_2.png?raw=true', title: 'List of user notes' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/Serverless-Notes-App/Serverless-notes-app-sample_4.png?raw=true', title: 'Credit card page' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/Serverless-Notes-App/Serverless-notes-app-sample_3.png?raw=true', title: 'Note editing page' }],
    repoURL: 'https://github.com/SeanMcTernan/serverless-stack-client',
    technologies: [technologies[1], technologies[2], technologies[3], technologies[4], technologies[5], technologies[6], technologies[7], technologies[8], technologies[9], technologies[10]],
    install: ['1. Click on the GitHub link Above.', '2. Clone/Download the Repository.', '3. From the folder run npm install', '4. Run npm run dev', '5. Make a request to the sever via Postman, or whatever your preferred app is, be sure to enter your cellphone so the app texts you: http://localhost:3000/riverdata/webhooks?from= ENTER YOUR CELLPHONE HERE &to=8335890354&subject&text=Elk'],
    devTime: '1 Week'
  },
  {
    id: 7,
    headerTitle: 'TS Drag & Drop Project',
    //Info card desc 175 char count max
    infoCardDescription: 'A small Typescript project, to explore drag and drop functionality within a browser.',
    appDescription: 'A small Typescript project, to explore drag and drop functionality within a browser.\n\nThe project consists of a basic form field, whereby a user can add a Title, Description and the number of people assigned to a project. There is a small amount of error checking associated with the form so that users cannot input incorrect information.  Once Add Project is selected the project is automatically added to Active Projects. The user can then click and drag the project to finished projects. You may also move a project back to active from finished projects. You can see the project in action in the snippets below.',
    description: 'In May 2020 I started working with RURU-Software on their delivery app. The app was built using Typescript. Even though I had completed Understanding-Typescript by Maximilian Schwarzmüller in early 2019, I had never gotten an opportunity to apply my knowledge in a real-world application. When the opportunity had come up to work with RuRu, I checked back on Max`s course and was happy to see an updated version was available for 2020, this was one of the many projects I had gotten to work on this course, while at the same time working for RuRu.\n\nI learned a great deal about browser tools and type safety while working on this project. I had seen applications like Trello use the drag and drop feature to great effect, so I was happy to learn what was required while working on this project.',
    images: [{ src: require('../images/Drag&Drop.gif'), title: 'Using the note taking app' }, { src: 'https://github.com/SeanMcTernan/SeanMcTernan/raw/master/ReadMe_Images/TypeScript-Drag-And-Drop/TS_Drag&Drop_Cap_1.png?raw=true', title: 'App main screen' }],
    repoURL: 'https://github.com/SeanMcTernan/typescript-drag-and-drop-project',
    technologies: [technologies[1], technologies[2], technologies[3], technologies[4], technologies[5], technologies[6], technologies[7], technologies[8], technologies[9], technologies[10]],
    install: ['1. Click on the GitHub link Above.', '2. Clone/Download the Repository.', '3. From the folder run npm install', '4. Run npm run dev', '5. Make a request to the sever via Postman, or whatever your preferred app is, be sure to enter your cellphone so the app texts you: http://localhost:3000/riverdata/webhooks?from= ENTER YOUR CELLPHONE HERE &to=8335890354&subject&text=Elk'],
    devTime: '2 days'
  }
];


//Image Types
export interface imgProperties {
  src: string;
  title: string;
}


//Technology Types
export interface technologiesType {
  techID: number;
  name: string;
  imgSrc: string;
  technologiesLink: string;
}

export interface technologiesProps extends Array<technologiesType> { }


//Project Data Types
export interface projectInfoProp {
  id: number;
  headerTitle: string;
  infoCardDescription: string;
  appDescription: string;
  description: string;
  images: imgProperties[];
  repoURL: string;
  technologies: technologiesType[];
  install: string[];
  devTime: string;
}

export interface projectInfoProps extends Array<projectInfoProp> { }


export { projectInfo, technologies }