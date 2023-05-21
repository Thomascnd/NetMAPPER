import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017/historique';

export async function connectDB() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    return db;
  } catch (error) {
    console.error('Une erreur s est produite lors de la connexion à la base de données :', error);
    throw error;
  }
}
