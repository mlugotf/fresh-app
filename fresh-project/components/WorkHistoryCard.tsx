/**
 * Purpose: Generates the card for the work history page
 * 
 * Author: Michael Lugo
 */

type HistoryCard = {
  cardName: string;
  cardDescription: string;
  cardImg: string;
};

export default function WorkHistoryCards(
  props: { historyCards: HistoryCard[] },
) {
  return (
    <div className="flex flex-wrap gap-4">
      {props.historyCards.map((card) => (
        <div
          key={card.cardName}
          className="card bg-transparent w-full shadow-sm"
        >
          <figure>
            <img
              src={card.cardImg}
              alt={card.cardName}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {card.cardName}
            </h2>

            <p>{card.cardDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
}