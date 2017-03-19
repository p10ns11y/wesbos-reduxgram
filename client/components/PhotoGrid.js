import React, { Component } from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

// export default class PhotoGrid extends Component {
//   render() {
//     return (
//       <div className="photo-grid">
//
//       </div>
//     );
//   }
// }

const PhotoGrid = (props) => (
  <div className="photo-grid">
    {props.posts.map((post, i) => (
      <Photo {...props} key={i} i={i} post={post} />
    ))}
  </div>
);

export default PhotoGrid;
