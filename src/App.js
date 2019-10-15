import React, {Component} from "react";
import "./App.css";
import User from './User';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      bgColor: 'lightblue',
      users: [{
        firstName: "Harper",
        lastName: "Perez",
        videoUrl: "https://vimeo.com/channels/top/22439234",
        password: '1234',
        admin: true
      },{
        firstName: "John",
        lastName: "Doe",
        videoUrl: "https://vimeo.com/channels/top/22439234",
        password: "abc",
        admin: false
      },{
        firstName: "Mary",
        lastName: "Perez",
        videoUrl: "https://vimeo.com/channels/top/22439234",
        password: "123abc",
        admin: true
      }],
      showAdmin: false
    }
    this.addCount = this.addCount.bind(this);
    // this.deleteUser = this.deleteUser.bind(this);
  }

  toggleAdmin() {
    console.log('hey');
    this.setState({
      showAdmin: !this.state.showAdmin
    })
  }

  addCount() {
    console.log(this);
    this.setState({
      clickCount: this.state.clickCount + 1,
      bgColor: this.colorMapper()
    })
  }

  deleteUser(index) {
    console.log('click', index);
    let usersCopy = [...this.state.users];
    usersCopy.splice(index, 1);
    console.log(usersCopy)
    this.setState({
      users: usersCopy
    })

  }

  colorMapper() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  listUsers() {
    return this.state.users.filter(user => user.admin === this.state.showAdmin)
    .map((user, idx) => {
      return (<User
      key={idx}
      {...user}
      backgroundColor={this.state.bgColor}
      deleteHandler={() => this.deleteUser(idx)}
      />)

    });


    // <User
    //   key={idx}
    //   firstName={user.firstName}
    //   lastName={user.lastName}
    //   videoUrl={user.videoUrl}
    //   backgroundColor={this.state.bgColor}
    // />
  }

  render() {
      return (
        <div className="App">
          <h1> Hello Ironhackers! </h1>
          <p>Counting: {this.state.clickCount}</p>
          <button onClick={this.addCount}>Click me!</button>
          <hr/>
          <button onClick={() => this.toggleAdmin()}>Show admin</button>
          {this.listUsers()}

        </div>
      );
  }
}

export default App;