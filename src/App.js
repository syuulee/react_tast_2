import './App.css';
import Wrapper from './component/Wrapper';
import Header from './component/Header';
import Mainvisual from './component/Mainvisual';
import DetailHospital from './component/DetailHospital';
import SearchPart from './component/SearchPart';
import TabMenu from './component/TabMenu';
import SlideInformation from './component/SlideInformation';
import Footer from './component/Footer';

const App = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <Mainvisual />
                <DetailHospital />
                <SearchPart />
                <TabMenu />
                <SlideInformation />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default App;
