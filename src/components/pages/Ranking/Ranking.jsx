import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ranking.css';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const sortedLocalStorage = Object.values(localStorage)
      .sort((a, b) => JSON.parse(b).score - JSON.parse(a).score);
    return (
      <div>
        <div className="containerMenuRanking">
          <div
            data-testid="ranking-title"
            className="rankingName"
          >
            RANKING
          </div>
          <button
            onClick={ this.handleClick }
            type="button"
            data-testid="btn-go-home"
            className="buttonHome"
          >
            Go home
          </button>
        </div>
        <div className="containerUsers">
          <ol>
            {sortedLocalStorage.map((score, index) => (
              <div key={ index }>
                <div className="Users">
                  <img
                    src={ `https://www.gravatar.com/avatar/${md5(JSON.parse(score).email).toString()}` }
                    alt="player"
                    className="playerPicture"
                  />
                  <p
                    className="playerScore"
                    data-testid={ `player-score-${index}` }
                  >
                    {JSON.parse(score).score}
                  </p>
                  <p
                    data-testid={ `player-name-${index}` }
                    className="playerName"
                  >
                    { JSON.parse(score).name }
                  </p>
                </div>
                {sortedLocalStorage.length === 1 ? null : (
                  <hr />
                )}
              </div>

            ))}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
});

const mapDispatchToProps = () => ({
});

Ranking.propTypes = {
  history: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
