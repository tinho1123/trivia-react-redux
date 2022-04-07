/* import { connect } from 'react-redux';

const fetchTrivia = async () => {
  const { token } = this.props;
  const curr = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(curr);
  const questionsObjt = await response.json();
  return questionsObjt;
};

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(fetchTrivia);
 */
