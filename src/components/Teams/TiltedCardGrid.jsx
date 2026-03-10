import TiltedCard from "./TiltedCard";

const cards = [
  //Final year
  {
    imageSrc: "/images/Teams/KritiUniyal.jpg",
    altText: "Kriti Uniyal",
    captionText: "Kriti Uniyal",
  },
  {
    imageSrc: "/images/Teams/YuvrajSinghMakhloga.png",
    altText: "Yuvraj Singh Makhloga",
    captionText: "Yuvraj Singh Makhloga",
  },
  {
    imageSrc: "/images/Teams/ManasKiranSinghRathore.jpg",
    altText: "Manas Kiran Singh Rathore",
    captionText: "Manas Kiran Singh Rathore",
  },
  {
    imageSrc: "/images/Teams/HarshGupta.jpg",
    altText: "Harsh Gupta",
    captionText: "Harsh Gupta",
  },
  {
    imageSrc: "/images/Teams/AayushiKulashri.heif",
    altText: "Aayushi Kulashri",
    captionText: "Aayushi Kulashri",
  },
  {
    imageSrc: "/images/Teams/AbhinavPatwal.jpg",
    altText: "Abhinav Patwal",
    captionText: "Abhinav Patwal",
  },
  {
    imageSrc: "/images/Teams/ShobhitBangwal.jpeg",
    altText: "Shobhit Bangwal",
    captionText: "Shobhit Bangwal",
  },
  {
    imageSrc: "/images/Teams/AyushNegi.jpg",
    altText: "Ayush Negi",
    captionText: "Ayush Negi",
  },
  {
    imageSrc: "/images/Teams/GauravPal.jpg",
    altText: "Gaurav Pal",
    captionText: "Gaurav Pal",
  },
  //Third year
  {
    imageSrc: "/images/Teams/ShivaniBhardwaj.jpg",
    altText: "Shivani Bhardwaj ",
    captionText: "Shivani Bhardwaj ",
  },
  {
    imageSrc: "/images/Teams/RajeshRawat.jpg",
    altText: "Rajesh Rawat",
    captionText: "Rajesh Rawat",
  },
  {
    imageSrc: "/images/Teams/SuhaniJanoti.jpg",
    altText: "Suhani Janoti",
    captionText: "Suhani Janoti",
  },
  {
    imageSrc: "/images/Teams/ParushSinha.jpg",
    altText: "Parush Sinha",
    captionText: "Parush Sinha",
  },
  {
    imageSrc: "/images/Teams/AasthaJoshi.JPG",
    altText: "Aastha Joshi",
    captionText: "Aastha Joshi",
  },
  {
    imageSrc: "/images/Teams/Krishna.jpg",
    altText: "Krishna",
    captionText: "Krishna",
  },
  {
    imageSrc: "/images/Teams/Priyanshu.jpg",
    altText: "Priyanshu",
    captionText: "Priyanshu ",
  },
  {
    imageSrc: "/images/Teams/RitikNegi.jpg",
    altText: "Ritik Negi",
    captionText: "Ritik Negi",
  },
  //Second year
  {
    imageSrc: "/images/Teams/MananLakhera.jpeg",
    altText: "Manan Lakhera",
    captionText: "Manan Lakhera",
  },
  {
    imageSrc: "/images/Teams/Aastha.jpg",
    altText: "Aastha",
    captionText: "Aastha",
  },
  {
    imageSrc: "/images/Teams/NidhiSingh.jpg",
    altText: "Nidhi Singh",
    captionText: "Nidhi Singh",
  },
  {
    imageSrc: "/images/Teams/MonikaNegi.jpg",
    altText: "Monika Negi",
    captionText: "Monika Negi",
  },
  {
    imageSrc: "/images/Teams/GunjanPurohit.jpg",
    altText: "Gunjan Purohit",
    captionText: "Gunjan Purohit",
  },
  {
    imageSrc: "/images/Teams/AyushDilwan.jpeg",
    altText: "Ayush Dilwan",
    captionText: "Ayush Dilwan",
  },
  {
    imageSrc: "/images/Teams/AnchalChaudhary.webp",
    altText: "Anchal Chaudhary",
    captionText: "Anchal Chaudhary",
  },
  {
    imageSrc: "/images/Teams/AkashRawat.jpg",
    altText: "Akash Rawat",
    captionText: "Akash Rawat",
  },
  {
    imageSrc: "/images/Teams/NeerajVerma.jpeg",
    altText: "Neeraj Verma",
    captionText: "Neeraj Verma",
  },
  // {
  //   imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
  //   altText: "Kendrick Lamar - GNX",
  //   captionText: "Kendrick Lamar - GNX",
  // },
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