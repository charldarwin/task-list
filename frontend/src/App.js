import styled from '@emotion/styled'
import MainTitle from './components/MainTitle';
import ListContainer from './components/List.container';

const App = () => {

  const Main = styled.div`
    max-width: 800px;
    width: 90%;
    margin: auto;
  `;

  return (
    <Main>
      <MainTitle title={"Listado de Tareas"} />
      <ListContainer />
    </Main>
  );
}

export default App;
