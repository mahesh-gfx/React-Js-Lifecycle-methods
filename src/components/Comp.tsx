import { Component } from "react";

export default class Comp extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { name: "Don", num: 0 };
  }

  _handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  _handleOnChange = (event: any) => {};

  render() {
    const { name, num } = this.state;
    return (
      <div>
        I am {name}!
        <div className="change">
          You Changed your Name {num} times!!! Why bro??
        </div>
        <form onSubmit={this._handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your Name"
            value={name}
          />
          <button>Change My Name</button>
        </form>
      </div>
    );
  }
}
