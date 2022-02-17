import Wrapper from "./components/Wrapper/Wrapper.styled";
import MainHeader from "./components/MainHeder/MainHeader.styled";
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";
import SearchField from "./components/SearchField/SearchField";

const App = () => {
  return (
    <Wrapper>
      <MainHeader />
      <Form />
      <h2>Contacts</h2>
      <SearchField />
      <ContactsList />
    </Wrapper>
  );
};

export default App;
