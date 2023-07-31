//Dependencies
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {
  //GET route to serve the HTML page for displaying notes
  app.get('/api/notes', (req, res) => {
    fs.readFile(
      path.join(__dirname, '..', 'db', 'db.json'),
      'utf8',
      (err, data) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: 'Failed to read data from the database.' });
        }
        return res.json(data);
      }
    );
  });

  //POST route for a new note
  app.post('/api/notes', (req, res) => {
    // Read the existing notes from the database file (db.json)
    fs.readFile(
      path.join(__dirname, '..', 'db', 'db.json'),
      'utf8',
      (err, data) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: 'Failed to read data from the database.' });
        }

        // Parse the JSON data coming from db into an array
        const notes = JSON.parse(data);

        // Create a new note object with a unique ID
        const newNote = {
          id: uuidv4(),
          title: req.body.title,
          text: req.body.text,
        };

        // Add the new note to the array
        notes.push(newNote);

        // Write the updated notes array back to the database file
        fs.writeFile(
          path.join(__dirname, '..', 'db', 'db.json'),
          JSON.stringify(notes),
          (err) => {
            if (err) {
              console.error(err);
              return res
                .status(500)
                .json({ error: 'Failed to save the note to the database.' });
            }

            // Respond with the newly created note
            res.json(newNote);
          }
        );
      }
    );
  });

  //DELETE route to delete note by ID (BONUS)
  app.delete('/api/notes/:id', (req, res) => {
    // Read the existing notes from the database file (db.json)
    fs.readFile(
      path.join(__dirname, '..', 'db', 'db.json'),
      'utf8',
      (err, data) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: 'Failed to read data from the database.' });
        }

        // Parse the JSON data into an array
        const notes = JSON.parse(data);

        // Find the index of the note with the specified ID
        const noteIndex = notes.findIndex((note) => note.id === req.params.id);

        if (noteIndex === -1) {
          return res.status(404).json({ error: 'Note not found.' });
        }

        // Remove the note from the array
        notes.splice(noteIndex, 1);

        // Write the updated notes array back to the database file
        fs.writeFile(
          path.join(__dirname, '..', 'db', 'db.json'),
          JSON.stringify(notes),
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                error: 'Failed to delete the note from the database.',
              });
            }

            // Respond with a success message
            res.json({ message: 'Note deleted successfully.' });
          }
        );
      }
    );
  });
};