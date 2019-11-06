var Search = ({handleSearchInputEvent}) => (
  <div className="search-bar form-inline">
    <input
    className="form-control"
    type="text"
    onChange={() => handleSearchInputEvent(YOUTUBE_API_KEY, this.input.text.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
import YOUTUBE_API_KEY from '../config/youtube.js'
export default Search;
