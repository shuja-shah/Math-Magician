import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    const { innerText } = e.target;
    const calculateData = calculate(this.state, innerText);
    this.setState(calculateData);
  };

  render() {
    const { total, next, operation } = this.state;

    return (
      <div>
        <article className="calc-result">
          { total }
          { operation }
          { next }
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
          <button type="submit" onClick={this.clickHandler} className="calc-btn fifthRow calci">÷</button>
        </section>
      </div>
    );
  }
}

export default Calculator;
