import React, { Component, useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const clickHandler = (e) => {
    setState(calculate(state, e.target.innerHTML));
  };
  const { total, next, operation } = state;
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
};

export default Calculator;
