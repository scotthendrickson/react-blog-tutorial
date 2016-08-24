import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './Image-block/Image-block';
import {getUserInfo,getPosts} from '../../utils/helpers'

class  ProfileContainer extends React.Component {
    constructor(add props){
        super(add props);
        this.state = {
           set your state

        }
    }

    componentDidMount(){
           getUserInfo(this.props.params.userid).then(function(data){
               this.setState({
                   userInfo: data.data
               })
           }.bind(this));

           getPosts().then(function(data){
               this.setState({
                   cardData: data.data
               })
           }.bind(this));

       }

       render(){
               return (
                   <div>
                       <Profile user={this.state.userInfo} />
                       <PhotoGrid cardData={this.state.cardData} />
                   </div>
               )
           }


}


export default ProfileContainer
