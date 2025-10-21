// RoomList.jsx
import standard from '../data/standard.json';
import deluxe from '../data/deluxe.json';
import suite from '../data/suite.json';

const categories = {
  standard,
  deluxe,
  suite,
};

const Places = ({ category }) => {
  const rooms = categories[category] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <div key={room.id} className="border rounded-xl p-4 shadow-md">
          <img src={room.image} alt={room.name} className="rounded-xl mb-2" />
          <h3 className="text-xl font-semibold">{room.name}</h3>
          <p>{room.description}</p>
          <p className="font-bold mt-2">${room.price} / night</p>
          <a
            href={room.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Book Now
          </a>
        </div>
      ))}
    </div>
  );
}

export default Places