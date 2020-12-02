import AppBar from '../components/AppBar';

const Home = ({ history }) => {
  return (
    <>
      <AppBar history={history} />
      <h1>Home</h1>
    </>
  );
};

export default Home;
