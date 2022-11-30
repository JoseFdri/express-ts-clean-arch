export const env = {
    port: process.env.APP_PORT || 3000,
    mongoUrl: process.env.MONGO_URL,
    jwtSecret: process.env.JWT_SECRET,
}
