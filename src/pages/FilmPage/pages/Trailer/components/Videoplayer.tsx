import Iframe from 'react-iframe';
import { ITrailer } from '../../../../../utils/interfaces';

interface Props{data:ITrailer[]};

export const Videoplayer = ({ data }: Props) => {
  return (
    <ul>
      {data.map(({ key, name }) => (
        <li key={key}>
            <Iframe
              title={name}
              url={`https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`}
              width="100%"
              height="320px"
              overflow="cover"
            />
        </li>
      ))}
    </ul>
  );
};

export {};