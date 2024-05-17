import { forwardRef } from 'react';

function Audio({ ...rest }, ref) {
  return (
    <audio
      ref={ref}
      {...rest}
    ></audio>
  );
}

export default forwardRef(Audio);
