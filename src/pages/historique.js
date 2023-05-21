import Navbar from "@/pages/component/Navbar";
import { MongoClient } from 'mongodb';

const TableauDonnees = ({ donnees }) => {
  return (
    <div>
      <Navbar />
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Adresse IP</th>
            <th className="py-2 px-4 border">Option</th>
          </tr>
        </thead>
        <tbody>
          {donnees.map((item) => (
            <tr key={item._id}>
              <td className="py-2 px-4 border">{item.ip}</td>
              <td className="py-2 px-4 border">{item.option}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const IndexPage = ({ donnees }) => {
  return (
    <div>
      <TableauDonnees donnees={donnees} />
    </div>
  );
};

export async function getServerSideProps() {
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
  const db = client.db('historique');
  const collection = db.collection('ip');

  const result = await collection.find().toArray();
  const donnees = JSON.parse(JSON.stringify(result));

  return {
    props: {
      donnees,
    },
  };
}

export default IndexPage;

