const { Component } = require('react');

export class InputControl extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <input type="text" value={inputValue} onChange={this.handleChange} />
    );
  }
}

// class Test extends Component {
//   state = {
//     value: '',
//   };

//   hendleChange = e => {
//     this.setState({
//       value: e.currenTarget.value,
//     });
//   };

//   render() {
//     const { value } = this.state;
//     return <input value={value} onChange={this.hendleChange}></input>;
//   }
// }
