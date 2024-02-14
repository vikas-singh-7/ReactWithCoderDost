import React, { useState } from "react";

const Clock = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setTimeout(() => {
            setCount((prev) => prev + 1);
          }, 1000);
          console.log(count);
        }}
      >
        click to incre
      </button>
    </div>
  );
};

export default Clock;

// so even if i click twice or thrice at the same time my count is going to remain the same how ?
// well see when the first click happens it says increment the count after a sec and make it 0 to 1
// but i have clicked teice or thrice so the second and third click are scheduled to click after their time but remember before the count was updated by first click these noob second and third click holds the same value of count which was initial value so the output is same as
// first is also going to make 0 to 1
// second is also going to make 0 to 1 { as before a sec of first click count was 0 and poor second click pics the 0 instead of updated count }
