import React from 'react';

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">
        Are you sure?
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;