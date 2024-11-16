import React from 'react';
import InnerComp from './InnerComp';

function MyComp1() {
  return (
    <div>
      <h1>My Component 1</h1>
      <MyComp2 />
    </div>
  );
}

function MyComp2() {
  return (
    <>
      <h2>My Component 2</h2>
      <InnerComp />
    </>
  );
}

export default MyComp1;