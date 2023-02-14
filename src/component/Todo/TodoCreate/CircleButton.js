import classes from './CircleButton.module.css';

const CircleButton = (props) => {
  return (
    <div
      onClick={props.openHandler}
      className={`${classes.circle} ${props.open ? classes.open : ''}`}
    >
      {props.children}
    </div>
  );
};

export default CircleButton;
