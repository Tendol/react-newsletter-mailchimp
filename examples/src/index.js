/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import NewsletterForm from '../../src';
const App = () => (
  <NewsletterForm headertag1="Learn the Natural way,  Speak like a Native"
   headertag2="*Munsel is an online language learning platform that connects native language speakers with students."
   subtag1="Increase your chance of learning a new language by  12%"
   subtag2="Learn more"/>
);
render(<App />, document.getElementById("root"));
