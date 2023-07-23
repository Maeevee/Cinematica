import Iframe from 'react-iframe';

export const Videoplayer = ({ data }: { data: Array<any> }) => {
  return (
    <ul>
      {data.map(({ id, key, name }: { id: string; key: string; name: string }) => (
        <li key={id}>
          <div style={{ overflow: 'hidden' }}>
            <Iframe
              title={name}
              url={`https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`}
              width="100%"
              height="320px"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export {};