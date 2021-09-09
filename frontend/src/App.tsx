import Navbar from 'components/navbar';
import Footer from 'components/footer';
import DataTable from 'components/dataTable';
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Ola mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
