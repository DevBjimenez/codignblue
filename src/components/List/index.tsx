import React from 'react';
import { GiphList } from '../../services/giph.models';

interface IList {
  list: GiphList[];
}
const List = ({ list }: IList) => {
  return (
    <section>
      {list?.map((giph) => (
        <div key={giph.id}>
          <img src={giph.images.downsized_still.url} alt="" />
        </div>
      ))}
    </section>
  );
};

export default List;
