import logo from './logo.svg';
import './App.css';
import CourcesComponent from './Courses';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://demo.saleor.io/graphql/",
  cache: new InMemoryCache()
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CourcesComponent />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
