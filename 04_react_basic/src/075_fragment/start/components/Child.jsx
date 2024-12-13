import { Fragment } from 'react';
import './Child.css';

const Child = () => {
  return (
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odit
        animi sapiente ullam rem, quasi eum autem illo! Magni impedit similique
        quisquam! Doloremque, quos quasi officia neque officiis sequi ad!
      </p>
    </Fragment>
  );
};

export default Child;
