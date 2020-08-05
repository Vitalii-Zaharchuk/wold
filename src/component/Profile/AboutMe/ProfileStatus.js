import React from 'react';
import s from './AboutMe.module.css'
class ProfileStatus extends React.Component{
    state={
        editMode:false,
        status:this.props.status
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
        this.props.updateStatusThunk(this.state.status)
    }
    onStatusChange = (e) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate (prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }
    render(){
        
        return(
            <div>
                {!this.state.editMode &&
                <div>
                <span onClick={this.activateEditMode.bind(this)}>{this.props.status || '------'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                <input  value={this.state.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} onChange={this.onStatusChange}/>
                </div>
                }
                
                
            </div>
        )
    }
}
export default ProfileStatus;