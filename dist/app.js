"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
const app = (0, express_1.default)();
const dbURI = `mongodb+srv://${process.env.DB_CREDENTIALS}@cluster0.wym9xjg.mongodb.net/members-only?retryWrites=true&w=majority`;
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(dbURI);
        app.listen(3000, '0.0.0.0', () => {
            console.log('Server is listening on port 3000');
        });
    }
    catch (err) {
        console.log(`Mongoose connection error: ${err}`);
    }
});
connectToDb();
app.use((0, express_session_1.default)({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.json());
// NOTE add URL for front end when launched
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: ['POST', 'GET', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/user', userRoutes_1.default);
app.use('/message', messageRoutes_1.default);
