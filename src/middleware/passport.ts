import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import User from '../models/user';
import { Types } from 'mongoose';

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, username: string, password: string, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          return done(null, false);
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Property id does not exist on type user, any added so TS doesn't perform any type checking
passport.serializeUser((user: any, done): void => {
  done(null, user.id);
});

passport.deserializeUser(async (id: Types.ObjectId, done): Promise<void> => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
