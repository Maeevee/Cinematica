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

  return (
    <div>
      
    </div>
  )
}

export default Review
