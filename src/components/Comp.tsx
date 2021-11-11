import { Component } from "react";

export default class Comp extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { name: "Don", num: 0 };
  }

  _handleSubmit = (event: any) => {
    event.preventDefault();
    this.setState({ num: this.state.num + 1 });
  };

  _handleOnChange = (event: any) => {
    const { name, value } = event.target;
    this.setState({ name: value });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("I am rendering!");
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
            onChange={this._handleOnChange}
          />
          <button>Change My Name</button>
        </form>
      </div>
    );
  }
}
