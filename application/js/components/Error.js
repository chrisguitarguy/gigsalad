import React from 'react';

export default function Error(props) {
    return (
        <div className="error container-fluid">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
}
