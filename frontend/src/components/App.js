import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Readable from './Readable';
import NotFound from './NotFound';
import {fetchPosts, fetchCategories} from '../actions';

class App extends Component {
    componentDidMount() {
        const {fetchPosts,fetchCategories} = this.props;
        fetchPosts();
        fetchCategories();

    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Readable}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.postsArray,
    showModal: state.posts.showModal,
    categories: state.categories
});

const mapDispatchToProps = {
    fetchPosts,
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
