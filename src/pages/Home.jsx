import React from 'react';
import { Link } from 'react-router-dom';
import Cinema from "../img/cinema.jpg";
import Art from "../img/art.jpg";
import Food from "../img/food.jpg";
import Science from "../img/science.jpg";

const Home = () => {

  const post = [
    {
      id: 1,
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore laudantium quod dignissimos distinctio, ipsam cumque voluptates asperiores quam repudiandae non, fugiat vero, voluptate minus modi voluptatibus harum facere officiis?",
      img: Food,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore laudantium quod dignissimos distinctio, ipsam cumque voluptates asperiores quam repudiandae non, fugiat vero, voluptate minus modi voluptatibus harum facere officiis?",
      img: Cinema,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore laudantium quod dignissimos distinctio, ipsam cumque voluptates asperiores quam repudiandae non, fugiat vero, voluptate minus modi voluptatibus harum facere officiis?",
      img: Art,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore laudantium quod dignissimos distinctio, ipsam cumque voluptates asperiores quam repudiandae non, fugiat vero, voluptate minus modi voluptatibus harum facere officiis?",
      img: Science,
    },
  ];

  return (
    <div className='home'>
      <div className="posts">
        {post.map(post => (
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button> Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;