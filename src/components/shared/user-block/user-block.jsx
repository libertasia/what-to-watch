import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../../const';

const UserBlock = (props) => {
  const {authorizationStatus} = props;

  const hrefToMyListPage = `/mylist`;
  const hrefToSignInPage = `/login`;

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return (
      <div className="user-block">
        <Link to={hrefToSignInPage} className="user-block__link">Sign in</Link>
      </div>
    );
  } else {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <Link to={hrefToMyListPage}>
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </Link>
        </div>
      </div>
    );
  }
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};


const mapStateToProps = ({FILMS}) => ({
  authorizationStatus: FILMS.authorizationStatus,
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
