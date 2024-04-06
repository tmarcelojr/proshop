const asyncHandler = (fn) => (req, res, next) => {
  // Takes request, responce, next. Takes a promise and then calls the next middleware. So we don't have to have a lot of try/catch blocks.
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
