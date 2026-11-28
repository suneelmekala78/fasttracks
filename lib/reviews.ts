export type Review = {
  name: string;
  role: string;
  car: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Arjun Mehta",
    role: "Fortuner owner",
    car: "Toyota Fortuner",
    quote:
      "Booked a recliner install with a week's notice. The cabin feels first class — leather, fitment, and finish are exactly what we asked for.",
    rating: 5,
    avatar: "/images/avatars/arjun-mehta.png",
  },
  {
    name: "Sneha Reddy",
    role: "Vellfire owner",
    car: "Toyota Vellfire",
    quote:
      "Full-body PPF and a cabin refresh in Jubilee Hills. Transparent quote, clean bay, and the car left looking factory-new.",
    rating: 5,
    avatar: "/images/avatars/sneha-reddy.png",
  },
  {
    name: "Karthik Rao",
    role: "Defender owner",
    car: "Land Rover Defender",
    quote:
      "SRS correction brought the black paint back to a mirror. Rakesh's floor still runs the job personally — that shows.",
    rating: 5,
    avatar: "/images/avatars/karthik-rao.png",
  },
  {
    name: "Priya Nair",
    role: "Carnival owner",
    car: "Kia Carnival",
    quote:
      "Recliners for the family Carnival. Kids love the lounge seats. WhatsApp booking was simple and the timeline held.",
    rating: 5,
    avatar: "/images/avatars/priya-nair.png",
  },
  {
    name: "Vikram Shah",
    role: "GLS owner",
    car: "Mercedes-Benz GLS",
    quote:
      "Custom audio and tint in one visit. Concert-hall sound without rattles. Fasttracks is the only studio we trust in Hyderabad.",
    rating: 5,
    avatar: "/images/avatars/vikram-shah.png",
  },
  {
    name: "Ananya Iyer",
    role: "X7 owner",
    car: "BMW X7",
    quote:
      "Deep interior clean before a trip — done in under two hours. Cabin smelled new. Open on Sunday helped a lot.",
    rating: 5,
    avatar: "/images/avatars/ananya-iyer.png",
  },
];
