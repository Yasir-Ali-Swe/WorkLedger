import "dotenv/config";

const PORT = process.env.PORT || 5000;
const DATABASE_STRING = process.env.DATABASE_STRING;
const USER_GMAIL = process.env.USER_GMAIL;
const Email_Password = process.env.Email_Password;
const JWT_SECRET = process.env.JWT_SECRET;

export { PORT, DATABASE_STRING, USER_GMAIL, Email_Password, JWT_SECRET };
