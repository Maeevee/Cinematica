import React from 'react'

const Review = () => {

  const {filmId} = useParams();
  const [reviews, setReviews] = useState<[]|IReview[]>([]);

  useEffect ( ()  =>{
    getReview(filmId as string).then (setReviews).catch(console.log)
  }, [filmId])

  return (
    <div>
      
    </div>
  )
}

export default Review
