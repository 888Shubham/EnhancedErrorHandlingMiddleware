// // Please don't change the pre-written code

// export class customErrorHandler extends Error {
//   constructor(statusCode, errMessage) {
//     super(errMessage);
//     this.statusCode = statusCode;
//   }
// }

// export const errorHandlerMiddleware = (err, req, res, next) => {
//   // Write your code here
//   if(err instanceof customErrorHandler){
//     console.log("Errr- ",err)
//     res.status(err.statusCode).send(err.errMessage);
//   } else{
//   res.status(500).send("Oops! Something went wrong... Please try again later!");
//   next();
//   }

// };

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customErrorHandler) {
    console.log("error -",err);
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(500).send("oops! something went wrong...Try again later!");
  }
  next();
};