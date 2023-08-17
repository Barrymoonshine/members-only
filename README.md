# Members Only

Live link: https://rough-wave-6662.fly.dev/

## Summary

ClubLand is an exclusive club house in which anyone can view posts, but only logging in users can create posts. To see who crated the posts users must answer a riddle to qualify for membership status, and all users can sign up for admin permissions to delete posts.

This app was built to primarily practice back-end validation with a focus on authentication and user permissions management.

Hosted and deployed on fly.io.

## Key skills employed

**Express & Node JS**

- Imported the Express Session package to create user sessions to track permissions throughout the application
- Accessing an authenticated user's details using the user property on the request object

**Passport**

- Created and configured a `LocalStrategy` to validate username and password
- Storing the user's details on the user property of the request object for use throughout the application using the `deserializeUser` function
- Logging authenticated users out of their session using the `logout` method

**bcrypt**

- Password encryption and hashing utilising the bcrypt package to securely store passwords
