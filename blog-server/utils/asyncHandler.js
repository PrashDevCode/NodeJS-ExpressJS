// try-catch

// export const asyncHandler = (fn) => (req, res, next) =>
//   Promise.resolve(fn(req, res, next)).catch(next);

export const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

// function [ createUser ] -> asyncHandler(createUser) -> resolve -> asyncedCreateUser
// function [ createUser ] -> asyncHandler(createUser) -> reject -> error
