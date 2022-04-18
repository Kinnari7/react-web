import logo from './logo.svg';
import './App.css';
import CourcesComponent from './Courses';
import PeopleComponent from './AuthPages/people';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from 'react-redux';
import store from './common/store';

const client = new ApolloClient({
  uri: "https://demo.saleor.io/graphql/",
  cache: new InMemoryCache()
});

function App() {

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <CourcesComponent /> */}
            <PeopleComponent />
          </header>
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
