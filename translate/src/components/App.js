import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = {
    language: 'en',
  }

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
           <i className="flag us" onClick={() => this.onLanguageChange('en')} />
           <i className="flag nl" onClick={() => this.onLanguageChange('nl')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value={'red'}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>);
  }
}

export default App;
