import React from 'react';
require('./Blog-meta.css');

const BlogMeta = ({metaInfo}) => {
  return (
    <div>
      <div>
        <h2> {metaInfo.username}</h2>
        <p> {metaInfo} </p>
        <h2>{metaInfo}</h2>
      </div>
    </div>
  );
};

BlogMeta.propTypes = {
    metaInfo: React.PropTypes.object.isRequired
};



export default BlogMeta
