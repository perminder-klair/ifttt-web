import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from './utils/theme';
import apolloClient, { persistor } from './utils/apolloClient';

import { Home, TemplateAbi, AbiFunctions, Filter, TransactionCheck, Test, Error404 } from './pages';
import './theme/bulma.css';

class App extends React.Component {
  state = { loaded: false };

  async componentDidMount() {
    await persistor.restore();
    this.client = apolloClient;
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    if (!loaded) {
      return <div>loading</div>;
    }

    return (
      <ApolloProvider client={this.client}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/TemplateAbi" component={TemplateAbi} />
                <Route exact path="/AbiFunctions" component={AbiFunctions} />
                <Route exact path="/Filter" component={Filter} />
                <Route exact path="/TransactionCheck" component={TransactionCheck} />
                <Route exact path="/Test" component={Test} />
                <Route component={Error404} />
              </Switch>
            </BrowserRouter>
            <GlobalStyle />
          </React.Fragment>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
