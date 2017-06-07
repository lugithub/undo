//import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
// import Link from '../components/Link'
//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }
//
// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)

import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <Link
    to={ '/' + filter }
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

export default FilterLink;
