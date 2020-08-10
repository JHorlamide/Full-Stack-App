import React from "react";
import moment from 'moment';

const Notification = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notification">
            {notifications && notifications.map((item) => {
              return (
                <li key={item.id}>
                  <span className='pink-text'>{item.user} </span>
                  <span>{item.content}</span>
                  <div className='grey-text'>
                    {moment(item.time.toDate()).fromNow}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
