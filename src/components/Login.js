import React, { Component } from "react";


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",
      user: undefined
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://altamir-generator-api.herokuapp.com/auth/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        email: `${this.state.email}`,
        password: `${this.state.password}`
      }),
      headers: {
        "Content-Type": "application/JSON"
      }
    }).then((response) => response.json())
    .then((data) => {
        localStorage.setItem("token", data.token)
        console.log(data);
        const user = data.token;
        this.setState({
          user
        })
        if (this.state.user !== undefined) {
          this.props.history.push('/Login')
        } else {
          this.props.history.push('/')
        }
    })
  };

  render() {
      console.log(this.state)
    return (
      <div>
        <h2>You must log in to view protected page</h2>
        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />
          <label>email</label>
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
