import "./SearchResults.css";
import Searchlist from "./Searchlist";

function SearchResults({ results }) {
    return (
        <div className="results-body">
            <div className="results-list">
                <Searchlist users={results} />
            </div>
        </div>
    );
}

export default SearchResults;