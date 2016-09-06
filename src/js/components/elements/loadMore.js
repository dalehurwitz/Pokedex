import React, { PropTypes } from "react";
import Button from "./button";

const LoadMore = ({ loading, onClick }) => {
    return (
        <div className="load-more__container">
            <Button onClick={onClick} disabled={loading}>
                Load More Pokemon!
            </Button>
        </div>
    );
};

export default LoadMore;
