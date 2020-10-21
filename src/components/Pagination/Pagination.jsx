import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
    const { pagination, onChangePage } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);
    const handleChangePage = (page) => {
        if (!onChangePage) {
            return;
        }
        onChangePage(page);
    };
    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handleChangePage(_page - 1)}
            >
                Prev
            </button>
            {[...Array(totalPages)].map((num, index) => (
                <button key={index} onClick={() => handleChangePage(index + 1)}>
                    {index + 1}
                </button>
            ))}
            <button
                disabled={_page >= totalPages}
                onClick={() => handleChangePage(_page + 1)}
            >
                Next
            </button>
        </div>
    );
};

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onChangePage: PropTypes.func,
};

Pagination.defaultProps = {
    onChangePage: null,
};

export default Pagination;
