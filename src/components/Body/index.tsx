import React from 'react';
interface IBody {
  children?: JSX.Element;
}
const Body = ({ children }: IBody) => {
  return (
    <section>
      Body section
      {children}
      below
    </section>
  );
};

export default Body;
