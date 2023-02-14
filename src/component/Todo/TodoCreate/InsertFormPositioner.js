import classes from './InsertFormPositioner.module.css';

const InsertFormPositioner = (props) => {
  return <div className={classes.insert}>{props.children}</div>;
};

export default InsertFormPositioner;
