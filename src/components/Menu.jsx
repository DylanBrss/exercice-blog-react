import React from 'react';
import Cinema from "../img/cinema.jpg";
import Art from "../img/art.jpg";
import Food from "../img/food.jpg";
import Science from "../img/science.jpg";

const Menu = () => {

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
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {
                post.map(post => (
                    <div className='post' key={post.id}>
                        <img src={post.img} alt="img" />
                        <h2>{post.title}</h2>
                        <button>Read More</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Menu;