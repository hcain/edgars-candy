# Edgar's Candy

## Introduction
This is a coding challenge submission for [Readlee](https://www.readlee.com/). It is a student reading goals tracker built with React, Node, Express, SASS, and Webpack. The student can click the goals and receive the 'candy' rewards as they achieve them.

### Future Improvements
In a real-world setting, I would use redux to maintain the state of the user. As more properties of the user would need to be updated, it would become unweildy to manage the state only through react hooks. 

On a similar note, I would control the loading page through a redux state instead of a ternary operator. Because the call is only made to a local file, the loading screen flashes only briefly. But in a real call to an external DB, it would display for longer. To view the loading page, simply alter the url in the axios call while running the app in development, so that the call cannot be completed.

Additionally I would redesign the layout of the pop-up on mobile, so that it would better fit the candy icon and continue to look good when narrower than 350px. Currently, the icon disappears when narrower than 420px and the text overhangs the modal around 350px.

I would also consider adding this confetti animation ([https://www.npmjs.com/package/canvas-confetti](https://www.npmjs.com/package/canvas-confetti)) to the modal overlay when the logStudentFinishedReading button is clicked, to awknowledge and celebrate the user's achievement.

**Amended 10/7/25:** This project was built before I started regularly using Typescript. If I were building it now, it would be in Typescript.

### Firestore
Because my current database is just a simple JSON file, it would convert to a Firestore, NoSQL DB, fairly easily. I would use a collection of user documents, with each user containing a subcollection of trophy documents. Instead of loading the JSON file, express would query and retrieve the specific user from Firestore on the first load of the app.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/hcain/edgars-candy

# Go inside the directory
cd edgars-candy

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Production on Vercel
Because vercel ignores 'express.static()', the server file (src/index.js) needs to use res.sendFile instead. Before deploying to vercel, make the following changes:
1. Comment out line 13 in src/index.js
> app.use(express.static('public'));
2. Uncomment out line 16 in src/index.js
> app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));

### Built with

Boilerplate: simple-react-full-stack from [https://github.com/crsandeep/simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack)

Icons: by Freepik from [www.flaticon.com](www.flaticon.com)