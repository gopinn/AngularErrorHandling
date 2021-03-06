export class AuthorizationError extends Error{


  customType = "AuthorizationError";
  // callback with a custom error object
  //let getError = cb => cb(new AuthorizationError('there was a problem'))

  // get the error and log the stack trace
  //getError((err) => console.log(err));


  constructor() {
    super();
    //Object.setPrototypeOf(this, Object.getPrototypeOf(this));
    this.name = 'AuthorizationError';
    Error.captureStackTrace(this, AuthorizationError);
  }
/*
  constructor(message) {
    super(message);
    //Object.setPrototypeOf(this, Object.getPrototypeOf(this));

    this.name = 'AuthorizationError';
    Error.captureStackTrace(this, AuthorizationError);
  }
  */
  toString() {
    return 'yess !!! You are not authorized to view this content!!!';
  }

}
