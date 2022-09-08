import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;

    return (
      <div>
        <article className="calc-result">
          { result }
        </article>
        <section className="calc-input">
          <button type="submit" className="calc-btn frstRow Operator">0</button>
          <button type="submit" className="calc-btn frstRow Operator">.</button>
          <button type="submit" className="calc-btn frstRow calci">=</button>
          <button type="submit" className="calc-btn secondRow Operator">1</button>
          <button type="submit" className="calc-btn secondRow Operator">2</button>
          <button type="submit" className="calc-btn secondRow Operator">3</button>
          <button type="submit" className="calc-btn secondRow calci">+</button>
          <button type="submit" className="calc-btn thirdRow Operator">4</button>
          <button type="submit" className="calc-btn thirdRow Operator">5</button>
          <button type="submit" className="calc-btn thirdRow Operator">6</button>
          <button type="submit" className="calc-btn thirdRow calci">-</button>
          <button type="submit" className="calc-btn forthRow Operator">7</button>
          <button type="submit" className="calc-btn forthRow Operator">8</button>
          <button type="submit" className="calc-btn forthRow Operator">9</button>
          <button type="submit" className="calc-btn forthRow calci">x</button>
          <button type="submit" className="calc-btn fifthRow Operator">AC</button>
          <button type="submit" className="calc-btn fifthRow Operator">+/-</button>
          <button type="submit" className="calc-btn fifthRow Operator">%</button>
          <button type="submit" className="calc-btn fifthRow calci">^</button>
        </section>
      </div>
    );
  }
}

export default Calculator;
