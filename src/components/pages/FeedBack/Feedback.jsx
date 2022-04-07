import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { setNewScore } from '../../../actions';
import './feedBack.css';

class Feedback extends Component {
  handleClick = () => {
    const { resetScore, player } = this.props;
    resetScore(player.score);
    const { history } = this.props;
    history.push('/');
  };

  sendToRanking = () => {
    const { resetScore, player } = this.props;
    resetScore(player.score);
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const { score, assertion, player } = this.props;
    const MD5 = md5(player.email).toString();
    return (
      <div
        data-testid="feedback-text"
        className="feedBackContainer"
      >
        <img
          src={ `https://www.gravatar.com/avatar/${MD5}` }
          data-testid="header-profile-picture"
          alt="avatarPlayer"
          className="feedbackUserPicture"
        />

        <p data-testid="header-player-name" className="feedBackPlayerName">
          { player.name }
        </p>
        <p data-testid="header-score" className="feedBackScore">
          {score}
        </p>

        {/* <Header /> */}
        <p data-testid="feedback-text" className="feedBackApoioMoral">
          {assertion < +'3'
            ? 'Could be better...'
            : 'Well Done!'}

        </p>
        <button
          onClick={ this.handleClick }
          type="button"
          data-testid="btn-play-again"
          className="feedBackButton"
        >
          Play Again
        </button>

        <p
          data-testid="feedback-total-score"
          className="feedBackScore"
        >
          { score }
        </p>

        <p
          data-testid="feedback-total-question"
          className="feedBackScore"
        >
          { assertion }
        </p>

        <button
          onClick={ this.sendToRanking }
          type="button"
          data-testid="btn-ranking"
          className="feedBackButton"
        >
          Ranking
        </button>
      </div>
    );
  }
}
Feedback.propTypes = {
  history: PropTypes.func.isRequired,
  score: PropTypes.func.isRequired,
  assertion: PropTypes.func.isRequired,
  player: PropTypes.func.isRequired,
  resetScore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
  score: state.player.score,
  assertion: state.player.assertions,
});
const mapDispatchToProps = (dispacth) => ({
  resetScore: (payload) => dispacth(setNewScore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
