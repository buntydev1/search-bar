import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './searchBar';
import ImageList from './imageList';


class App extends React.Component {

    state = { images: [] };
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;