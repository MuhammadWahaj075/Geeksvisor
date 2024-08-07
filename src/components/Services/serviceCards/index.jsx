import { Card } from "../card";

export const ServiceCards = ({ cardsData }) => {
  return (
    <div className="mt-8 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center ">
        {cardsData.map((card) => (
          <Card
          className
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};
