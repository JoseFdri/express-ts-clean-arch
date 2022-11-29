import { setupApp, env } from "./config/";

const { port } = env;

const app = setupApp();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});