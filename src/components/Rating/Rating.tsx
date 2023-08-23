import styles from './Rating.module.css'

interface StarRatingProps {
    rating: number;
}

const Rating: React.FC<StarRatingProps> = ({ rating }) => {
    const stars = [];
    const fiveStar = rating / 2;

    const raitingRound = Math.round(fiveStar);

    for (let i = 0; i < 5; i++) {
        if (i < raitingRound) {
        stars.push(<span key={i} className={styles.yellowStar}>★</span>);
        } else {
        stars.push(<span key={i} className={styles.greyStar}>★</span>);
        }
    }

    return <>{stars}</>;
};

export default Rating;
