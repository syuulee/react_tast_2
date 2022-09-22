import './App.css';
import Wrapper from './component/Wrapper';
import Header from './component/Header';
import Mainvisual from './component/Mainvisual';
import Section01 from './component/Section01';
import Section02 from './component/Section02';
import Section03 from './component/Section03';
import Section04 from './component/Section04';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Mainvisual />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
      </main>
    </Wrapper>
  );
}

export default App;
