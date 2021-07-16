import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  const { id } = req.query;
  let doc;

  doc = await req.db.collection('tasks').find({}).toArray();
  if (id) {
    doc = doc.filter((d) => d._id.toString() === id);
    if (doc) {
      doc = doc[0];
    }
  }

  res.json(doc);
});

handler.post(async (req, res) => {
  const data = req.body;
  const doc = await req.db.collection('tasks').insertOne(JSON.parse(data));

  res.json(doc);
});

handler.delete(async (req, res) => {
  const { id } = req.query;
  const doc = await req.db.collection('tasks').remove({ _id: ObjectId(id) });

  res.json(doc);
});

handler.put(async (req, res) => {
  let data = req.body;
  const { id } = req.query;

  data = JSON.parse(data);

  const doc = await req.db.collection('tasks').updateOne(
    { _id: new ObjectId(id) },
    { $set: data },
  );

  res.json(doc);
});

export default handler;
