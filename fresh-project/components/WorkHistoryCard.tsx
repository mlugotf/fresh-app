/**
 * Purpose: Generates a single card for the work history carousel
 * Author: Michael Lugo
 */

export type HistoryCard = {
  cardName: string;
  cardDescription: string;
  cardImg: string;
};

export default function WorkHistoryCard(props: { card: HistoryCard }) {
  const { card } = props;
  return (
    <div className='card bg-transparent w-full shadow-sm border border-gray-700'>
      <figure className='px-4 pt-4'>
        <img
          src={card.cardImg}
          alt={card.cardName}
          className='rounded-xl h-[70%] w-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title text-white'>{card.cardName}</h2>
        <p className='text-gray-400'>{card.cardDescription}</p>
      </div>
    </div>
  );
}
