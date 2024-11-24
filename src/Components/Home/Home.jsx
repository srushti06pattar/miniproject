import React from 'react';
import './Home.scss'; // Create a separate CSS file for custom styling
// import '../../App.scss'

import {FiHome} from 'react-icons/fi'
import {BsSendCheck} from 'react-icons/bs'
import {RiFolderReceivedLine} from 'react-icons/ri'

const Home = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>FileIt</h2>
        </div>
        <nav>
          <ul>
          <li className="nav-item active"><FiHome className="icon"/>Home</li>
            <li className="nav-item"><BsSendCheck className="icon"/>Send</li>
            <li className="nav-item"><RiFolderReceivedLine className='icon'/>Received</li>
          </ul>
        </nav>
        <div className="account-section">
          <button className="account-button">Account</button>
        </div>
      </aside>

      <main className="main-content">
        <div className="search-bar">
       <input type="text" placeholder="Search 'wallet address'"></input>
       
          <button className="send-file-button">Send File ➔</button>
        </div>

        <div className="content-section">
          <div className="draft-section">
            <h3>Drafts</h3>
            <div className="draft">
              <p>Draft to Suhas</p>
              <button className="resend-button">Re-send</button>
              <span className="date">Sept 13</span>
            </div>
            <div className="draft">
              <p>Draft to Habib</p>
              <button className="resend-button">Re-send</button>
              <span className="date">Sept 13</span>
            </div>
          </div>

          <div className="add-receiver-section">
            <h3>Add Receiver</h3>
            <div className="receiver">
              <span>Suhas</span>
            </div>
            <div className="receiver">
              <span>Habib</span>
            </div>
          </div>

          <div className="recent-shared-section">
            <h3>Recent Shared</h3>
            <div className="shared-item">
              <p>Filename: Suhas.S</p>
              <p>Type: PDF</p>
              <p>Date: 13-Sept-2023</p>
              <p>Status: Sent</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
