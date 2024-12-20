const FilterArticles = ({ sortBy, order, onSortByChange, onOrderChange }) => {

    const handleChange = (e) => {
        const [sortByChoice, orderChoice] = e.target.value.split("-");
        onSortByChange(sortByChoice);
        onOrderChange(orderChoice);
    };

    return (
        <div className="filter-menu">
            <select name="sort-by-select" value={`${sortBy}-${order}`} onChange={handleChange}>
                <option value="created_at-desc">DATE PUBLISHED (Newest to Oldest)</option>
                <option value="created_at-asc">DATE PUBLISHED (Oldest to Newest)</option>
                <option value="votes-desc">VOTES (Highest to Lowest)</option>
                <option value="votes-asc">VOTES (Lowest to Highest)</option>
                <option value="comment_count-desc">COMMENTS (Most to Least)</option>
                <option value="comment_count-asc">COMMENTS (Least to Most)</option>
            </select>
        </div>
    )
}

export default FilterArticles;