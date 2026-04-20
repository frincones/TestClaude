module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send('<!doctype html><html><head><meta charset="utf-8"><title>Hola Mundo</title></head><body><h1>Hola Mundo</h1></body></html>');
};
