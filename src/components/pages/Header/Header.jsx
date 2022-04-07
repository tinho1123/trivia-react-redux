import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { player, score } = this.props;
    const MD5 = md5(player.email).toString();

    return (
      <div className="container">
        <p data-testid="header-player-name" className="nameUser">
          {player.name}
        </p>
        <p data-testid="header-score" className="scoreUser">
          {score}
        </p>
        <img
          src={ `https://www.gravatar.com/avatar/${MD5}` }
          data-testid="header-profile-picture"
          alt="avatarPlayer"
          className="imageUser"
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
  score: state.player.score,
});

Header.propTypes = {
  avatar: PropTypes.function,
  name: PropTypes.function,
}.isRequired;

export default connect(mapStateToProps)(Header);
