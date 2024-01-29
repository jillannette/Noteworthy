import Layout from "../components/Layout";
import connectToDatabase from "../components/MongooseConnection";

// connect to mongodb
connectToDatabase();
// get notes from database



const allNotes = ({data}) => {
  return (
  
    <Layout>
      <div className="h-[100vh]">

      <h2 className="text-xl text-center">All Notes</h2>

      </div>

    </Layout>
    
  )
  };


export default allNotes;