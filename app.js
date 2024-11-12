const express = require('express');
const app = express();
const port = 3000;

// Hacer que Express sirva archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Ruta para la página de inicio
app.get('/', (req, res) => {
            res.send(`
    <html>
      <head>
        <title>Sumadora</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Sumadora</h1>
        <form action="/sum" method="get">
          <input type="number" name="num1" required>
          +
          <input type="number" name="num2" required>
          <button type="submit">Sumar</button>
        </form>
        <div>
          ${req.query.result ? `<h2>Resultado: ${req.query.result}</h2>` : ''}
        </div>
      </body>
    </html>
  `);
});

// Ruta para realizar la suma
app.get('/sum', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 + num2;
  res.redirect(`/?result=${result}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});