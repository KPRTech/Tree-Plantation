import React, { useState, useEffect } from 'react';

// finction for companies and tree each

const Counter = ({ maxCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    const incrementCount = () => {
      setCount((prevCount) => {
        if (prevCount >= maxCount) {
          clearInterval(intervalId);
          return maxCount;
        } else {
          return prevCount + 2;
        }
      });
    };
    intervalId = setInterval(incrementCount, 0.1);
    return () => {
      clearInterval(intervalId);
    };
  }, [maxCount]);

  return <div className="text-4xl">{count}</div>;
};
// finction for companies and tree each end

// finction for tree challenge start

const Counter1 = ({ maxCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    const incrementCount = () => {
      setCount((prevCount) => {
        if (prevCount >= maxCount) {
          clearInterval(intervalId);
          return maxCount;
        } else {
          return prevCount + 100;
        }
      });
    };
    intervalId = setInterval(incrementCount, 0.1);
    return () => {
      clearInterval(intervalId);
    };
  }, [maxCount]);

  return <div className="text-4xl">{count}</div>;
};
// finction for tree challenge end



//scrolling effect

const ScrollingEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-x-52  pb-16 mt-32">
      <div className="py-4 font-bold">
        <img
          src="https://cdn.shopify.com/s/files/1/0326/7189/files/companies.svg?v=1625082718"
          alt="icon 1"
          className="h-32 mb-4"
        />
        <Counter maxCount={100} />
        <p className='font-normal text-2xl'>COMPANIES</p>
      </div>
      <div className=" py-4 font-bold">
        <img
          src="https://cdn.shopify.com/s/files/1/0326/7189/files/trees_fe34f898-be80-409d-a1bc-60c0bff410a1.svg?v=1624467243"
          alt="icon 2"
          className="h-32 mb-4"
        />
        <Counter maxCount={1000} />
        <p className='font-normal text-2xl'>TREES EACH</p>
      </div>
      <div className="py-4 font-bold">
        <img
          src="https://cdn.shopify.com/s/files/1/0326/7189/files/earth.svg?v=1625082792"
          alt="icon 3"
          className="h-32 mb-4 pl-6 "
        />
        <Counter1 maxCount={100000} />
        <p className='font-normal text-2xl'>TREE CHALLENGE</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container-fluid mx-auto p-4 bg-gray-100">
      <ScrollingEffect />
    </div>
  );
};

export default App;

