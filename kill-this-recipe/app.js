const express = require('express');
const app = express();
const port = 3000;

// EJS view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
