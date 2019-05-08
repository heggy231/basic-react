import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          avatarImg={faker.image.avatar()} 
          author="Sam" 
          timeAgo="Friday at 12:00 PM" 
          content="Nice blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
        avatarImg={faker.image.avatar()} 
        author="Alex" 
        timeAgo="Saturday at 6:00 PM"
        content="I am signing up now."
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
        avatarImg={faker.image.avatar()} 
        author="Jane" 
        timeAgo="Saturday at 9:00 PM"
        content="Let's start a meetup!"
        />
      </ApprovalCard>
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));