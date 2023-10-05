# Members Only

## Summary

This is the back-end/server part of the Members Only or Club Land Client project.

This app was built using MongoDB/Mongoose, ExpressJS and NodeJS and is the back-end/server for the front-end/client which was also built as part of this project, and can be found [here](https://github.com/Barrymoonshine/members-only-client).

Hosted and deployed on fly.io.

## Key skills employed

- Server side static type checking with TypeScript
- Model type checking with custom `types` ensuring that returned data matches the expected shape
- Utilised the `Request`, `Response` and `NextFunction` types from Express to ensure that functions receive the expected data
- Specifying that controller functions return a function that doesn't resolve to a specific value with `Promise<void`
- Created and configured a `LocalStrategy` to validate username and password with the Passport package
- Password encryption and hashing utilising the bcrypt package to securely store passwords
