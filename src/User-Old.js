import React, {Fragment} from 'react';
const User = () => {
    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
      }
     
    const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    // avatarUrl: '',
    avatarUrl: 'http://kodlamaker.com/wp-content/themes/eduma/images/image-404.jpg'
    };

    const displayAvartar = (user) => {
        if(user.avatarUrl){
          return <img src={user.avatarUrl} />
        } else {
          return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
        }
      }
      
    const element = (
        <h2>
            Hello, {formatName(user)}!
        </h2>
    );
    return (
        <Fragment>
            {element}
            {displayAvartar(user)}
        </Fragment>

    )
}
export default User;