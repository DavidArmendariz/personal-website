const basePath = `${process.env.PUBLIC_URL}/assets/images`;
const REACT_LOGO = `${basePath}/react-logo.svg`;
const PYTHON_LOGO = `${basePath}/python-logo.svg`;
const NODEJS_LOGO = `${basePath}/nodejs-logo.svg`;
const HASURA_LOGO = `${basePath}/hasura-logo.svg`;

export const skills = [
  {
    image: REACT_LOGO,
    title: 'React',
    description: `Hey! This page is made with React! I have worked with React to develop two front-end PWAs. 
      One was a B2B analytics platform and the other one was a B2C captive portal. I have used it along with Redux (thunks and sagas).
      I have also created a big personal project with it (sorry, private repo, as I pretend to launch this product soon)`,
  },
  {
    image: REACT_LOGO,
    title: 'React Native',
    description: `I have developed two apps with React Native. 
      Used Apollo client for state management. Used Auth0 for authentication.
      Learned how to cache data and images, use Apollo Cache Persist with the Async Storage, secure storage, Camera API, 
      image compression, styling, push notifications with OneSignal and many other things!`,
  },
  {
    image: PYTHON_LOGO,
    title: 'Python',
    description: `I have used Python for data analysis, data viz and for creating simple Machine Learning models using Pandas, Matplotlib, Seaborn and Scikit-Learn. 
    I have also used it for building an ETL for a B2B platform that was deployed to Google Cloud.
    I have experience with Flask and Django. I have two courses related to Python published in Udemy!`,
  },
  {
    image: NODEJS_LOGO,
    title: 'NodeJS',
    description: `I have used NodeJS to build a REST API to implement custom actions for Hasura. Done with Express! I have learned how to do
    payment processing with Paymentez. 
    Most interesting problem solved: building a search engine using an inverted index and the singleton design pattern`,
  },
  {
    image: HASURA_LOGO,
    title: 'Hasura',
    description: `I love and hate Hasura! But I think I will love it more now that v 1.3.0 is released (finally, we have cron triggers).`,
  },
];
