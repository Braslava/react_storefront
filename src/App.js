import { Component } from "react";
import "./App.css";
import Category from "./components/Category/Category";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

class App extends Component {
    render() {
        return (
             <ApolloProvider client={client}>
                <div className="App">
                    Store
                    <Category />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
