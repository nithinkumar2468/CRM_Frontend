import "./SearchResults.css";
import Searchlist from "./Searchlist";

function SearchResults({results}){
    return(
        <div className="results-body">
    <div className="results-list">
        {
            results.map((result,id)=>
            {
                return <Searchlist result={result} key={id}/>
            })
        }
    </div>
    </div>
    )
}
export default SearchResults;