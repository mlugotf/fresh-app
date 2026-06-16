import WorkHistoryCard from "../components/WorkHistoryCard.tsx";

type HistoryCard = {
  cardName: string;
  cardDescription: string;
  cardImg: string;
};

export default function HistoryCarousel(
  props: { historyCards: HistoryCard[] },
) {
  return (
    <>
      <div className="carousel w-full">
        {props.historyCards.map((card, index) => (
          <div
            key={card.cardName}
            id={`item${index + 1}`}
            className="carousel-item w-full justify-center"
          >
            <WorkHistoryCard card={card} />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        {props.historyCards.map((_, index) => (
          <a
            key={index}
            href={`#item${index + 1}`}
            className="btn btn-xs"
          >
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
}