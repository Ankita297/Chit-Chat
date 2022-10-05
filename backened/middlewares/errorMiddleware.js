const notFound = (req, res, next) => {
  const err = new Error(`not found ${req.originalurl} `);
  res.status(404);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
};

module.exports = { errorHandler, notFound };
