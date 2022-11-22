import React from 'react';
import '../../../styles/grid/grid.scss';

const Container = ( {children} ) => {
    return(
        <div className="container">
            {children}
        </div>
    )
}

const Row = ( {children} ) => {
    return(
        <div className="row">
            {children}
        </div>
    )
}

const Col = ( {children, classes} ) => {
    return(
        <div className={`col ${classes}`}>
            {/* {children} */}
            {
                <pre>{JSON.stringify(classes, null, 2)}</pre>
            }
        </div>
    )
}

export {Container, Row, Col};