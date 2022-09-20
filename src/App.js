import './App.css';
import Wrapper from './component/Wrapper';
import Header from './component/Header';
import Mainvisual from './component/Mainvisual';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Mainvisual />
      </main>
    </Wrapper>
  );
}

export default App;
