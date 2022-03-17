import React from 'react';
import PropTypes from 'prop-types';

function PostContents(props) {
  return (
    <article
      className="prose"
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}

PostContents.propTypes = {
  html: PropTypes.string,
};
PostContents.defaultProps = {
  html: '',
};

export default PostContents;
