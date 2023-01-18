import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
    if(count <= 0) {
      amount = 1;
    };
    if(count > 8 ) {
      amount = 8;
    };

  }
  return (
    <section className='section-center'>
      <h3>tired of boring ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input
          type='number'
          id='amount'
          name='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)} />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index)=> {
          return(
            <p key={index}>{item}</p>
          )
        })}

      </article>
    </section>
  )
}

export default App;
