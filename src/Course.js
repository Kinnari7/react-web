import React from 'react';

const Course = (props) => {
    return (
        <div key={props.product.id}>
            <p>{`${props.product.id} by ${props.product.name}`}</p>
        </div>
    );
};
export default Course;