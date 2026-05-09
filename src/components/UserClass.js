import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render (){
        return (
            <div className="user-card">
                <h1>Name : {this.props.name}</h1>
                <h1>Location : Bhadaravti</h1>
            </div>
        )
    }
}

export default UserClass