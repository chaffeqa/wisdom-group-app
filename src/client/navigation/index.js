import React from 'react';
import T from 'prop-types';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import Navigator from './Navigator';

const NavigatorContainer = reduxifyNavigator(Navigator, 'root')

NavigatorContainer.propTypes = {
  dispatch: T.func.isRequired,
  navigation: T.shape({
    index: T.number.isRequired,
    routes: T.arrayOf(T.shape({
      key: T.string.isRequired,
      routeName: T.string.isRequired,
    })),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  state: state.navigation,
});

export default connect(mapStateToProps)(NavigatorContainer);
