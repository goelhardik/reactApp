import * as React from 'react';
import './css/App.css';
import { IApiClient, ApiClient } from './ApiClient';
import { AppPage } from './AppPage';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

class App extends React.Component {
  private apiClient: IApiClient;

  public componentWillMount() {
    this.initialize();
    initializeIcons();
  }

  render() {
    return (
      <AppPage
        apiClient={this.apiClient} 
      />
    );
  }

  private initialize() {
    this.apiClient = new ApiClient('http://localhost:63223/_apis/');
  }
}

export default App;
