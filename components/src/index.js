import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        avatarImg={faker.image.avatar()} 
        author="Sam" 
        timeAgo="Friday at 12:00 PM"
        userComment="Nice blog post!"
      />
      <CommentDetail 
        avatarImg={faker.image.avatar()} 
        author="Alex" 
        timeAgo="Saturday at 6:00 PM"
        userComment="I am signing up now."
      />
      <CommentDetail 
        avatarImg={faker.image.avatar()} 
        author="Jane" 
        timeAgo="Saturday at 9:00 PM"
        userComment="Let's start a meetup!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));