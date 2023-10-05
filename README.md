# Members Only

Live link: https://members-only-client.vercel.app/

## Summary

This is the server for the Members Only or ClubLand project.

This app was built using TypeScript, MongoDB/Mongoose, ExpressJS and NodeJS and is the server for the client which was also built as part of this project, and can be found [here](https://github.com/Barrymoonshine/members-only-client).

Hosted and deployed on fly.io.

## Key skills employed

- Server side static type checking with TypeScript
- Model type checking with custom `types` ensuring that returned data form DB matches the expected shape
- Utilised the `Request`, `Response` and `NextFunction` types from Express to ensure that functions receive the expected data
- Specifying that controller functions don't resolve to a specific value with `Promise<void>`
- Created and configured a `LocalStrategy` to validate username and password with the Passport package
- Password encryption and hashing utilising the bcrypt package to securely store passwords
- API routes desgined in accordance with RESTful best practices
