import React from 'react';
export default class App extends React.Component {
  constructor(props){
          super(props)
          this.state={
            user: {userId:1},
            res:""
          }
          this.sendReq = this.sendReq.bind(this);
  }

  sendReq(){
    fetch("/game", {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(this.state.user), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json).then((d=>this.setState({res:d})));
  }
  render(){
    return(
      <div>
      <h1>{this.state.res}</h1>
      <button onClick={this.sendReq}>send</button>
      </div>
    )
  }
}
