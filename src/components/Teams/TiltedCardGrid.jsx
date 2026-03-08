import TiltedCard from "./TiltedCard";

const cards = [
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    captionText: "Kendrick Lamar - GNX",
  },
];

export default function TiltedCardGrid() {
  return (
    <div className="w-full px-5 lg:px-50 py-16 md:py-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 place-items-center">
        {cards.map((card, index) => (
          <TiltedCard
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            captionText={card.captionText}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={
              <p className="tilted-card-demo-text">
                {card.captionText}
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
}