import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    this.props.onSubmit(this.state)
  }

  render() {
    <form accept-charset="UTF-8" on-submit={this.handleSubmit}>
      <input
        type="email"
        name="email"
        class-name="form__input-email"
        value={this.state.email}
        on-change={this.handleChange}
      />
      <input
        type="password"
        name="password"
        class-name="form__input-password"
        value={this.state.password}
        on-change={this.handleChange}
      />
      <button type="submit">submit</button>
    </form>
  }
}
