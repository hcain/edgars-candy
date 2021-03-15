# Edgar's Candy

## Introduction
This is a coding challenge submission for [Readlee](https://www.readlee.com/).

### Future Improvements
In a real-world setting, I would use redux to maintain the state of the user. As more properties of the user would need to be updated, it would become unweildy to manage the state only through react hooks. 

On a similar note, I would control the loading page through a redux state instead of a ternary operator. (To view the loading page, simply alter the url in the axios call while running the app in development, so that the call cannot be completed.)

Additionally I would redesign the layout of the pop-up on mobile, so that it would better fit the candy icon and continue to look good when narrower than 350px. Currently, the icon disappears when narrower than 420px and the text overhangs the modal around 350px.

I would also consider adding this confetti animation ([https://www.npmjs.com/package/canvas-confetti](https://www.npmjs.com/package/canvas-confetti)) to the modal overlay when the logStudentFinishedReading button is clicked, to awknowledge and celebrate the user's achievement.

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

### Built with simple-react-full-stack boilerplate from [https://github.com/crsandeep/simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack)