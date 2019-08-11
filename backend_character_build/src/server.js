import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('character-blog');

        await operations(db);

        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    };
}

app.use(bodyParser.json());

app.get('/api/characters/:name', async (req, res) => {
    withDB (async (db) => {
        const characterName = req.params.name;

        const characterInfo = await db.collection('characters').findOne({ name: characterName });
        res.status(200).json(characterInfo);
    }, res);
})

app.post('/api/characters/:name/hits', async (req, res) => {
    withDB(async (db) => {
        const characterName = req.params.name;

        const characterInfo = await db.collection('characters').findOne({ name: characterName });
        await db.collection('characters').updateOne({ name: characterName }, {
            '$set': {
                hits: characterInfo.hits +1,
                },
            });
        const updatedCharacterInfo = await db.collection('characters').findOne({ name:characterName });

        res.status(200).json(updatedCharacterInfo);
    }, res);
});

app.post('/api/characters/:name/charAction', (req, res) => {
    const {username, text } = req.body;
    const characterName = req.params.name;

    withDB(async (db) => {
        console.log('hello');
        const characterInfo = await db.collection('characters').findOne({ name:characterName });
        await db.collection('characters').updateOne({ name:characterName }, {
            '$set': {
                charAction: characterInfo.charAction.concat({ username, text }),
            },
        });
        const updatedCharacterInfo = await db.collection('characters').findOne({ name: characterName });
        res.status(200).json(updatedCharacterInfo);
    }, res);
});

app.listen(8000, () => console.log("listening on 8000"));