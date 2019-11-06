import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      currentVideo:
    };

    // This binding is necessary to make `this` work in the callback
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this)
    this.handleVideoListEntryTitleClick = this.handleVideoListEntryTitleClick.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('dogs in hats');
  }

  getYouTubeVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    }
    searchYouTube(options, (videos) => {
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      });
    });
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search getYouTubeVideos={this.getYouTubeVideos.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videoList}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;