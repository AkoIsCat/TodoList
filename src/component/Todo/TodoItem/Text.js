import classes from './Text.module.css';

import { Fragment } from 'react';

const Text = (props) => {
  return (
    <Fragment>
      <div
        className={`${classes.text} ${props.check ? classes.line : ''}`}
        onClick={props.onClick}
      >
        {props.text}
      </div>
    </Fragment>
  );
};

export default Text;
