import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      number: null,
      operator: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    const { result, number, operator } = this.state;
    const { value } = e.target;
    switch (value) {
      case 'C':
        this.setState({ result: 0, number: null, operator: null });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({ operator: value, number: result });
        break;
      case '=':
        if (!number || !operator) {
          return;
        }
        this.setState({ operator, number: result });
        break;
      default:
        if (result === 0) {
          this.setState({ result: value });
        } else {
          this.setState({ result: result + value });
        }
        break;
    }
    console.log(this.state);
  };

  render() {
    const { result } = this.state;

    return (
      <div>
        <article className="calc-result">
          { result }
        </article>
        <section className="calc-input">
          <button type="submit" onClick={this.clickHandler} className="calc-btn frstRow Operator init">0</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn frstRow Operator">.</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn frstRow calci">=</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn secondRow Operator">1</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn secondRow Operator">2</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn secondRow Operator">3</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn secondRow calci">+</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn thirdRow Operator">4</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn thirdRow Operator">5</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn thirdRow Operator">6</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn thirdRow calci">-</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn forthRow Operator">7</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn forthRow Operator">8</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn forthRow Operator">9</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn forthRow calci">x</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn fifthRow Operator">AC</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn fifthRow Operator">+/-</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn fifthRow Operator">%</button>
          <button type="submit" onClick={this.clickHandler} className="calc-btn fifthRow calci">^</button>
        </section>
      </div>
    );
  }
}

export default Calculator;
