import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import concepts from './components/Cards/CardsData';
import headerData from './components/Header/HeaderData';

const App = () => {
  return (
    <div>
      <Header content={headerData[0]}></Header>
      <Cards content={concepts}></Cards>
    </div>
  );
}

export default App;
