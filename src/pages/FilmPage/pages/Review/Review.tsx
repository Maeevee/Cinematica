import React, { useEffect, useState } from 'react'
import { getReview } from '../../../../servises/servises';
import { useParams } from 'react-router';
import { IReview } from '../../../../utils/interfaces';
import styles from './Review.module.css';
import Rating from '../../../../components/Rating/Rating'


const Review = () => {

  const {filmId} = useParams();
  const [reviews, setReviews] = useState<[]|IReview[]>([]);

  useEffect ( ()  =>{
    getReview(filmId as string).then (setReviews).catch(console.log)
  }, [filmId])

  if (reviews.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={styles.reviewContainer}>
      {reviews.map((review, index) =>
      <li className={styles.li} key={index}>
        <div className={styles.reviewHeadContainer}>
          <div className={styles.reviewData}>
            <img className={`rounded-full w-16 h-16`} src={review.author_details?.avatar_path?.startsWith("/https://secure.gravatar.com/avatar/") ? review.author_details.avatar_path.slice(1) : `https://image.tmdb.org/t/p/w300/${review.author_details.avatar_path}`} alt={review.author_details?.username} onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).src =
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWMHsOFSpe0SQ9au-xUAPizVVualR_yqqMg&usqp=CAU';
                  (e.target as HTMLImageElement).alt = 'placeholder';
                }} />
            <div>
              <h3>{review.author_details.username}</h3>
              <p className={styles.reviewCreatedAt}> {new Date(review.created_at).toLocaleDateString()}</p>
            </div>
          </div>
          <p className={styles.rating}><Rating rating={review.author_details.rating}/></p>
        </div>
        <p>{review.content}</p>
      </li>)}
    </ul>
  )
}

export default Review
