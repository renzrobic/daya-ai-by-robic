const errorHandler = (err, req, res, next) => {
  console.error("Global error handler:", err.stack);
  res.status(401).send("Unauthenticated!");
};

export default errorHandler;
