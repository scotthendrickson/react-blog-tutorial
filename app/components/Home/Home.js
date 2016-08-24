import React from 'react';
require('./Home.css');
import BlogIntro from '../Blog-intro-container/Blog-intro-container';
import {getUserInfor,getPosts} from '../../utils/helpers';

class Home extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        cardData: [],
        userInfo: {},
        intro: ''
      }
    }

    render(){
      return (
        <div>
          <BlogIntro />
        </div>
      )
    }
}



export default Home
