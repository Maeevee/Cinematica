import React, { useEffect, useState } from 'react'
import { getReview } from '../../../../servises/servises';
import { useParams } from 'react-router';
import { IReview } from '../../../../utils/interfaces';

const Review = () => {

  const {filmId} = useParams();
  const [reviews, setReviews] = useState<[]|IReview[]>([]);

  useEffect ( ()  =>{
    getReview(filmId as string).then (setReviews).catch(console.log)
  }, [filmId])

  console.log(reviews);

  if (reviews.length === 0) {
    return <div>Loading...</div>;
  }

//   const rating = (reviews[0] as IReview).author_details.rating as number;
//   const generateStars = (rating: number) => {
//     const stars = [];
//     const fiveStar = rating / 2;
//     console.log(fiveStar);
    
//     for (let i = 0; i < 5; i++) {
//         if (i < fiveStar) {
//             stars.push(<span key={i} className={`text-yellow-400 text-2xl`}>★</span>)
//         } else {
//             stars.push(<span key={i} className={`text-gray-400 text-2xl`}>★</span>)
//         }
//     }
//     return stars;
// }




  return (
    <ul className={`p-5`}>
      {reviews.map((review, rating) =>
      <li className={`border-b-2 border-cyan-700/30`} key={rating}>
        <img className={`rounded-full w-16 h-16`} src={review.author_details?.avatar_path?.startsWith("/https://secure.gravatar.com/avatar/") ? review.author_details.avatar_path.slice(1) : `https://image.tmdb.org/t/p/w300/${review.author_details.avatar_path}`} alt={review.author_details?.username} onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              (e.target as HTMLImageElement).src =
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWMHsOFSpe0SQ9au-xUAPizVVualR_yqqMg&usqp=CAU';
              (e.target as HTMLImageElement).alt = 'placeholder';
            }} />
        <div>
          <h3>{review.author_details.username}</h3>
          <p> {new Date(review.created_at).toLocaleDateString()}</p>
        </div>
        {/* <p>{generateStars(rating)}</p> */}
        <p>{review.content}</p>
      </li>)}
    </ul>
  )
}

export default Review
