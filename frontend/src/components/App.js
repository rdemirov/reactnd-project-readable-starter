import React, { Component } from 'react';
import {Switch,Route,withRouter,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Readable from './Readable';
import PostDetail from './PostDetail';
import NotFound from './NotFound';
import { connect } from 'react-redux'
import {fetchCategories,fetchPosts} from '../actions'


class App extends Component {
componentDidMount() {
	if(this.props.categories.length===0) this.props.fetchCategories();
	if(this.props.posts.length===0) this.props.fetchPosts();
}

	render() {
		const {categories,posts} = this.props;
		return (
			<Switch>
			<Route exact path='/' component={Readable} />
			{categories.length>0&& <Route exact path='/:category' render={
				(props)=>{
					if(categories.indexOf(props.match.params.category)===-1) return <NotFound />
					else if(props.match.params.category==='all') return <Redirect to='/' />
					else return <Readable {...{...props, categoryChange:true}} />
				}
			} />}
			{categories.length>0&& posts.length>0&&<Route exact path='/:category/:postId'  render={
				(props)=>{
					if(posts.indexOf(props.match.params.postId)===-1 || categories.indexOf(props.match.params.category)===-1) return <NotFound />
					else return <PostDetail {...props} />
				}
			} />}
		</Switch>
		);
	}
}

App.propTypes = {
	categories: PropTypes.array.isRequired,
	posts: PropTypes.array.isRequired,
	fetchPosts: PropTypes.func.isRequired,
	fetchCategories: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	categories:state.categories.map((element)=>(element.path)),
	posts:state.posts.postsArray.map((element)=>(element.id))
})


const mapDispatchToProps = {
	fetchCategories,
	fetchPosts
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
