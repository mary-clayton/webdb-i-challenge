const server = require('./server.js');

require('dotenv').config()

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

//(server.listen) ? dotenv : PORT 4000