import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Menu = ({ cat }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    // const post = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    //         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore laudantium quod dignissimos distinctio, ipsam cumque voluptates asperiores quam repudiandae non, fugiat vero, voluptate minus modi voluptatibus harum facere officiis?",
    //         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    //         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore laudantium quod dignissimos distinctio, ipsam cumque voluptates asperiores quam repudiandae non, fugiat vero, voluptate minus modi voluptatibus harum facere officiis?",
    //         img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    //         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore laudantium quod dignissimos distinctio, ipsam cumque voluptates asperiores quam repudiandae non, fugiat vero, voluptate minus modi voluptatibus harum facere officiis?",
    //         img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, dolorum.",
    //         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum labore laudantium quod dignissimos distinctio, ipsam cumque voluptates asperiores quam repudiandae non, fugiat vero, voluptate minus modi voluptatibus harum facere officiis?",
    //         img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    // ];

    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {
                posts.map(posts => (
                    <div className='post' key={posts.id}>
                        <img src={posts.img} alt="img" />
                        <h2>{posts.title}</h2>
                        <button>Read More</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Menu;