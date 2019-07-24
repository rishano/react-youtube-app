import React from 'react';

class Searchbar extends React.Component {

    // default text in searchbox
    state = {
        term: 'Search video'
    };
    handleChange = (event) => {
        // change state with the value
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {

        // handle filled input
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            // search input
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;