
# Readable app frontend

## Project files

The app is built using create-react-app.The interface is implemented with React JS,with state management done with Redux and using 
react-bootstrap components for the layout. It includes the following files:

```
+--public/    
 |-- index.html - Updated to include the bootstrap css and to change the app title
 |-- favicon.ico - React Icon
+-- src/
 +-- actions/ - action types and action creators used in the app.
  |-- actionTypes.js - list of the application action types
  |-- index.js - application action creators
 +-- reducers/ - application reducers (for posts,comments and categories)
  |-- index.js - application reducers
 +-- utils
  |-- api.js - calls to the backend API for retrieving and management of categories,comments and posts 
 +-- components
  |-- App.js - Main application component.Renders the header,categories and posts components
  |-- Categories.js - Display of the posts' categories.Calls the action for filtering of posts by category
  |-- CommentDetails.js - Contains details for a comment and the buttons for edit,delete and voting for a comment
  |-- Comments.js - Main component for the comments.Contains a panel with comments header ,
  count of comments for a given post and a button for comments addition
  |-- CreateUpdateCommentDialog.js - Dialog for create/update of comments
  |-- CreateUpdatePostDialog.js - Add/edit posts dialog
  |-- Header.js - Page Header components.Contains buttons for sorting of posts by vote and date
  |-- NotFound.js - 404 page of the app
  |-- PostDetail.js - posts detail view component.Contains the author and body of a post and is rendered 
  inside the post's panel 
  |-- Posts.js - Main component for viewing the posts.Contains a panel with nested collapsible panels 
  for the posts.The button for new posts addition is on the panel's header.At the posts panels' footer 
  are the buttons for post edit,deletion and voting.
|-- .gitignore 
|-- README.MD - This README file.
|-- package.json - npm package manager file.
|-- package-lock.json - npm package manager file.Contains description of the dependencies of the modules 
used in the project.
```

## Readable frontend app functional description

