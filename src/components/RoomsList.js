import React from 'react';
import Room from './Room';

export default function RoomsList({ sortedrooms }) {
  // console.log(sortedrooms);
  if (sortedrooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className='roomlist'>
      <div className='roomlist-center'>
        {sortedrooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
