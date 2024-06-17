const express = require('express');
const app = express();
const port = 3000;

// EJS view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// some silly placeholder data
let posts = [
  { id: 1, title: 'To Die For Super Bowl Dip', content: 'Every year in, I think January? Or is it February? Anyway, my family and I...' },
  { id: 2, title: 'Black Bean Soup', content: "If you don't like black bean soup, you should just stop reading now!" },
];



// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
