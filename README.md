# Note Taker

## Description
This project was provided as a challenge to portray how important it is to take notes during meetings in case any ideas come up or things needed to be fixed, either way, the brain is compressed with too many ideas and could stress someone out, especially when you can't remember what you forgot. This project was modified from a different source and has YET TO BE deployed on Heroku.

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```
## Bonus Points
You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Video
WILL BE UPDATED AT A LATER TIME

## Instructions
Follow the following in the terminal:
* npm i
* npm i express
* npm i inquirer
* npm i uuid

To start up the application, follow the following in the terminal:
* node server.js

## Website
[Personal Notepad For Managing](https://personal-notepad-for-managing-e1bf26346dfe.herokuapp.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Questions - Contact Me
* Email - jordan3313.lj@gmail.com
* LinkedIn - [Laura Delaney](https://www.linkedin.com/in/laura-jordan-510412241/)
