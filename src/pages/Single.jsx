import React from 'react';
import ArtImg from "../img/art.jpg";
import Profile from "../img/profile.jpg";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={ArtImg} alt="article" />

        <div className="user">
          <img src={Profile} alt="profile" />


          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, error.</h1>
        <p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto quo modi ex iste nobis earum est corrupti molestiae,
            excepturi provident, commodi accusamus, ab doloremque voluptas illo accusantium
            eveniet autem minus enim? Voluptates omnis ducimus vero? Quam, similique nihil.
            Harum, corporis.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto quo modi ex iste nobis earum est corrupti molestiae,
            excepturi provident, commodi accusamus, ab doloremque voluptas illo accusantium
            eveniet autem minus enim? Voluptates omnis ducimus vero? Quam, similique nihil.
            Harum, corporis.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, praesentium asperiores. Sit corporis quia ducimus,
            illo ipsum quos possimus, nulla laudantium nihil praesentium dignissimos
            fugit ipsam ea aliquam delectus nisi perspiciatis dolorem, explicabo rem cumque ad!
            Facilis fuga sequi recusandae sint minus? Eum illum quia aut,
            dolorum hic architecto nesciunt, ut sunt voluptas est provident officia voluptatum
            ipsa pariatur nostrum magnam excepturi autem doloribus aliquam tempore natus.
            Neque, velit unde temporibus dolorum atque corporis non minus aliquam fuga
            voluptatem cumque nemo alias in blanditiis sed ab provident. Aut, labore iusto!
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Debitis labore minima ipsa porro commodi, quae est magnam aperiam assumenda hic natus
            quod dolorem reiciendis nisi ratione fuga sed eaque. Autem id enim odio dicta unde
            totam hic qui omnis nemo quaerat, delectus corrupti iste nostrum dolore placeat!
            Doloribus nemo numquam facilis recusandae minus illum laboriosam laborum quas alias?
            Laboriosam aliquam assumenda voluptates alias tenetur, ratione quasi ut eligendi
            eveniet impedit numquam expedita non dolorum officiis dicta quia necessitatibus
            consequuntur asperiores doloribus odit distinctio vitae perferendis consequatur?
            Vitae, voluptatem eos? Officia vero quibusdam sit corrupti rem quia eos aliquid
            optio sed et aliquam modi voluptate obcaecati voluptatem deserunt magnam temporibus
            accusamus, dolore id voluptas necessitatibus? Tempore atque libero maiores veritatis
            sunt ullam recusandae iusto voluptatibus quis eius odio veniam tenetur, consequatur,
            aliquid quod temporibus blanditiis quisquam voluptatum. Vitae fugiat ratione eaque,
            exercitationem aliquid hic doloremque quibusdam? Beatae, vitae!
            Laborum dicta distinctio iure reiciendis, fuga sint, optio mollitia ipsam voluptatibus
            voluptas perspiciatis velit quae, corporis quo exercitationem! Tempore, ipsum
            exercitationem. Porro voluptatem tenetur quod sunt doloremque minus iusto dicta
            temporibus nobis est, perspiciatis quam aperiam nesciunt molestiae. Dolorem, rerum
            adipisci qui dolorum sunt fugit ducimus, sequi dignissimos consequuntur, quae ratione
            eius eos.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;