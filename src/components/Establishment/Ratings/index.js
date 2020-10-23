import React, { Fragment, useEffect, useState } from 'react';
import Form from './Form';

const Ratings = (props) => {
  return (
    <>
      <Form place={props.place}/>
    </>
  )
}

export default Ratings;