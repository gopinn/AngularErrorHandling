"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AuthorizationError = (function (_super) {
    __extends(AuthorizationError, _super);
    // callback with a custom error object
    //let getError = cb => cb(new AuthorizationError('there was a problem'))
    // get the error and log the stack trace
    //getError((err) => console.log(err));
    function AuthorizationError() {
        var _this = _super.call(this) || this;
        _this.customType = "AuthorizationError";
        //Object.setPrototypeOf(this, Object.getPrototypeOf(this));
        _this.name = 'AuthorizationError';
        Error.captureStackTrace(_this, AuthorizationError);
        return _this;
    }
    /*
      constructor(message) {
        super(message);
        //Object.setPrototypeOf(this, Object.getPrototypeOf(this));
    
        this.name = 'AuthorizationError';
        Error.captureStackTrace(this, AuthorizationError);
      }
      */
    AuthorizationError.prototype.toString = function () {
        return 'yess !!! You are not authorized to view this content!!!';
    };
    return AuthorizationError;
}(Error));
exports.AuthorizationError = AuthorizationError;
//# sourceMappingURL=AuthorizationError.js.map