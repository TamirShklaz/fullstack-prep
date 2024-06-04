import express, {Express, Request, Response, Application} from 'express';
import dotenv from 'dotenv';

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});

const documents = [
    {title: "Document 1", content: "Content 1"},
    {title: "Document 2", content: "Content 2"},
    {title: "Document 3", content: "Content 3"},
    {title: "Document 4", content: "Content 4"},
    {title: "Document 5", content: "Content 5"},
]


app.get("/documents", (req: Request, res: Response) => {
    res.send(documents);
})

