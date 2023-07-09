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
    <div>
      
    </div>
  )
}

export default Review
