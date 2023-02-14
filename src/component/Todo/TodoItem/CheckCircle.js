import { MdCheck } from 'react-icons/md';

import classes from './CheckCircle.module.css';

const CheckCircle = (props) => {
  return (
    <div className={classes.circle} onClick={props.onClick}>
      {props.check && <MdCheck />}
    </div>
  );
};

export default CheckCircle;
