// @flow
import { connect } from "react-redux";
import Styleguide from "Romulus/App/Screens/Styleguide";

const mapStateToProps = state => ({
  installed: state.app.installed,
});

const mapDispatchToProps = dispatch => ({
  requestExample() {
    dispatch({ type: "REQUEST_EXAMPLE" });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Styleguide);
