import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Enhancing your adventures affordably and sustainably with minimal expenditure.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Safety measures enhances the enjoyment and connection with nature.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Ensure the best service and comfort throughout your travels.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2024",
    title: "Tibet Adventure",
    info: "Great Tibet Tour is a local tour company based in Lhasa, Tibet. It was founded in 2005 and recommended by Lonely Planet as one of the best-reputed local Tibet travel agencies. With great responsibility, professional know-how and passion for innovation, Great Tibet Tour endeavors to provide clients with enjoyable, thoughtful service, and authentic culture discovery.",
    location: "china",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2024",
    title: "best of java",
    info: "Explore Java island for 7 days 6 nights and discover the beauty of nature, culture, history and heritage on the Java Island. Enjoy a private overland tour with all the conveniences, this tour package includes comfortable vehicles, lunch with traditional dishes, accommodation, train tickets, entrance tickets and all your needs while on the trip. Easy way to enjoy the beauty of Java Island.",
    location: "indonesia",
    duration: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2024",
    title: "explore hong kong",
    info: "Get a proper introduction to Hong Kong at night without worrying about getting lost in the dark during this Sin City night tour of Hong Kong. You’ll hear stories of the popular horse-race and lottery betting in the region, as well as tales about its parlors and pawn shops. Sip on drinks at a local bar, and chat with local business owners before your night ends.",
    location: "hong kong",
    duration: "8 days",
    cost: "from $5000",
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2024",
    title: "kenya highlights",
    info: "This safari is designed to cover the most touristic attractions in Kenya within a short. Visit the northern Kenya and Maasai Mara",
    location: "kenya",
    duration: "20 days",
    cost: "from $3300",
  },
];
