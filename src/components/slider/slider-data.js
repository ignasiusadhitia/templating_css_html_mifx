import { v4 as uuidv4 } from "uuid";

const endpoint = process.env.PUBLIC_URL;

const sliderData = [
  {
    id: uuidv4(),
    image: endpoint + `/assets/images/sample1.jpeg`,
    title: "Best PRICE",
    review:
      "We are so fortunate to have this place just a few minutes drive away from home. Food is stunning, both the tapas and downstairs restaurant. Cocktails wow, wine great and lovely selection of beers. Love this place and will continue to visit.",
    reviewer: "Peter Amar",
  },
  {
    id: uuidv4(),
    image: endpoint + `/assets/images/sample2.jpeg`,
    title: "Excellent FOOD",
    review:
      "Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.",
    reviewer: "Hall Cletis",
  },
  {
    id: uuidv4(),
    image: endpoint + `/assets/images/sample3.jpeg`,
    title: "Great EXPERIENCE",
    review:
      "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.",
    reviewer: "Ireland Tahlia",
  },
];

export default sliderData;
