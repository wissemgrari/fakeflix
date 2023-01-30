import Feed from './components/Feed/Feed';
import Layout from './components/Layout/Layout';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <div>
      <Layout>
        <Feed />
        <Movies />
      </Layout>
    </div>
  );
}

export default App;
