import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1373202794/y.jpg",
      id: 1,
      name: "5o5a",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://i.pinimg.com/474x/ec/44/81/ec44818e105fd312ec3e3abfff8529e9.jpg",
      id: 2,
      name: "Ez",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWiTq7B19j-LyBCYl_YpPEaW4pJduW1EFYkAK82tvO07q_7_7EHIhEdQQppQBcEyzWWE&usqp=CAU",
      id: 3,
      name: "Araja",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPl-ZvPqmKKZqVSvP7R_LdU-IaJNEVnnGAZRMgHU2OoHritoTIkqZpkKzZ4n3ysmyAMRo&usqp=CAU",
      id: 4,
      name: "Rewan",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://i.pinimg.com/736x/df/d4/0e/dfd40e399e0bcf9a6df2a3f5108b36ea.jpg",
      id: 5,
      name: "Mrs. Owl",
      active: false,
      isOnline: false,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
