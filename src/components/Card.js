import React from 'react'
import test from '../assets/images/test.jpg'
import "../style/style.css"

function Card({meal}) {
  return (
    <div className='card'>
        <img src={test} alt="" />
        <div className="infos">
          <span><strong>Nom du plat :</strong> Nom</span>
          <span><strong>Origine :</strong> origine</span>
          <p id='recette'>
          <strong>Recette : </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, harum consequatur! Eos voluptates porro, iste aspernatur rem qui dolorem est neque facere, distinctio dolores ipsum vero ipsam at? Repellendus, quos!
          Architecto voluptates sit quam ut tempore earum quos quasi nisi est ea quibusdam voluptatum quisquam, soluta animi possimus dicta rem repudiandae fugiat quis unde quas. Dolor deleniti qui pariatur quis!
          Iusto vero voluptate debitis ducimus laborum autem eligendi, eaque suscipit saepe dignissimos, est dolorem maxime quisquam fugiat nobis atque! Optio sequi eum quo hic quae laboriosam, enim nam incidunt odit.</p>
        </div>

    </div>
  )
}

export default Card