import CircleButton from './CircleButton';
import InsertForm from './InsertForm';
import InsertFormPositioner from './InsertFormPositioner';
import { Fragment, useState } from 'react';

import { MdAdd } from 'react-icons/md';

const TodoCreate = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <CircleButton openHandler={openHandler} open={open}>
        <MdAdd size="80px" />
      </CircleButton>
      {open && (
        <InsertFormPositioner>
          <InsertForm openHandler={openHandler} />
        </InsertFormPositioner>
      )}
    </Fragment>
  );
};

export default TodoCreate;
