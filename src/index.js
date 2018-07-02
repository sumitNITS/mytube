import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import loadash from 'lodash';

const API_KEY = 'AIzaSyAyazK-2spYFqtOyrCM89vsEYEUpiObYR4';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {videos : [],
            selectedVideo : null
        };
        this.videoSearch('Binging With Babish');
    }
    videoSearch(term){
        
        YTSearch ({key : API_KEY, term : term}, 
        (videos) => {this.setState({ videos : videos,
        selectedVideo :videos[0] 
    }); 
    });
    }
    
render(){
    const videoSearch = loadash.debounce( (term) => { this.videoSearch(term) },200 );
return (
    <div>
    <SearchBar onSearchTermChange = { videoSearch} />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList onVideoSelect={selectedVideo => 
    this.setState({selectedVideo})}
    videos={this.state.videos} />
    </div>
    );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

