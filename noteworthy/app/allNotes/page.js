import Layout from "../components/Layout";
import connectToDatabase from './components/MongooseConnection';

//import MongooseConnection, db model, need to figure out where to employ "data"
const allNotes = ({data}) => {
  return (
  
    <Layout>
      <div className="h-[100vh]">

      <h2 className="text-xl text-center">All Notes</h2>
      <MongooseConnection/>
      </div>

    </Layout>
    
  )
  };

export async function getServerSideProps() {
  const db = await connectToDatabase();

  // Now you can use Mongoose models and queries
  const Notes = db.model('Notes', {
    // Define your Mongoose schema here
    // Example:
    title: String,
    content: String,
  });

  // Perform Mongoose queries or operations
  const data = await Notes.find();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default allNotes;

/*// File: pages/index.js
import connectToDatabase from '../lib/mongooseConnection';

const HomePage = ({ data }) => {
  // Use data fetched from MongoDB
  return (
    <div>
      { Your Next.js component }
    </div>
  );
};




