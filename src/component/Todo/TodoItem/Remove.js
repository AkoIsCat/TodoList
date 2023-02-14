import { MdDelete } from 'react-icons/md';

import classes from './Remove.module.css';

const Remove = (props) => {
  return (
    <div className={classes.remove} onClick={props.onClick}>
      <MdDelete />
    </div>
  );
};

export default Remove;
