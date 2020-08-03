import React from 'react';
import s from './AboutMe.module.css'
class ProfileStatus extends React.Component{
    state={
        editMode:false
    }
    activateEditMode(){
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode(){
        this.setState({
            editMode:false
        })
    }
    render(){
        return(
            <div>
                {!this.state.editMode &&
                <div>
                <span onClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                <input  value={this.props.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}/>
                </div>
                }
                
                
            </div>
        )
    }
}
export default ProfileStatus;