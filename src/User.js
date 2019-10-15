import React, {Fragment, Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }

    formatName() {
        return `${this.props.firstName} ${this.props.lastName}`;
    }
    
    displayAvatar() {
        if(this.props.avatarUrl) {
          return <img src={this.props.avatarUrl} />;
        } else {
          return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>;
        }
      }
      
    render() {
        // console.log(this.props["get key"]())
        let {backgroundColor, deleteHandler, admin, password} = this.props;

        let style= {
            backgroundColor,
            width: '30%'
        };
        return (
            <Fragment>
                <h2 style={style}>
                    Hello, {this.formatName()}!
                </h2>
                {this.displayAvatar()}
                {admin && <p>shhhhhhhh, password: {password}</p>}

                <button onClick={deleteHandler}>Delete me!</button>
            </Fragment>
        )
    }
}

export default User;