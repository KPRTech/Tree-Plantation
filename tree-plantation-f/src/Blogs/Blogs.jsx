import React from 'react';
import cardData from './BlogsList';



function CardList() {
  return (
    <div className="flex flex-wrap -mx-2 mx-4 justify-center xl:ml-8 xl:justify-center">
      {cardData.map((card, index) => (
        <div className="w-1/1 px-2 px-2 my-4 md:w-1/3 lg:w-1/3 " key={index}>
          <div className="bg-white rounded-lg crd2">
            <img src={card.image} alt={card.title} className="w-full" />
            <h3 className="text-sm md:text-base  my-2 text-start font-sans">{card.title}</h3>
            <div className=" text-gray-600 text-start ">
              <span className="mr-2 text-xs">{card.author}</span>
              <span className='text-xs'>* {card.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3

export default CardList;




















// import React from 'react';
// import { Card } from 'react-bootstrap';
// import './Blogs.css'

// const cardData = [
//   {
//     title: 'Card 1',
//     image: 'https://cdn.shopify.com/s/files/1/0326/7189/articles/One_Tree_Planted_drone_shot_400x.png?v=1674237532',
//     author: 'Author 1',
//     date: 'January 1, 2020'
//   },
//   {
//     title: 'Card 2',
//     image: 'https://cdn.shopify.com/s/files/1/0326/7189/articles/One_Tree_Planted_Reforestation_India_2022_400x.jpg?v=1674161715',
//     author: 'Author 2',
//     date: 'February 1, 2020'
//   },
//   {
//     title: 'Card 3',
//     image: 'https://cdn.shopify.com/s/files/1/0326/7189/articles/one_tree_planted_africa_reforestation_planting_tree_400x.jpg?v=1672954177',
//     author: 'Author 3',
//     date: 'March 1, 2020'
//   }
// ];

// function CardList() {
//   return (
//     <div className="row">
//       {cardData.map((card, index) => (
//         <div className="col-4 flex flex-row ..." key={index}>
//           <Card>
//           <div className='card' style={{width: "18rem"}}>
//             <img src={card.image} class="card-img-top" alt="" />
//             <div className='card-body'>
//               <div className='card-title'>{card.title}</div>
//               <div className='card-text'>{card.author} * {card.date}</div>
//             </div>
//             </div>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CardList;