import React, { Component } from 'react';
import './config.css';

class Config extends Component {
  render() {
    const { history } = this.props;
    return (
      <div data-testid="settings-title">
        <div className="configContainer">
          <div>
            Em desenvolvimento!!!
          </div>
          <button
            onClick={ () => history.push('/') }
            className="configButtonVoltar"
            type="button"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }
}

export default Config;
