import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

import { useLocation } from "react-router-dom";
import "./gamereview.css";
import GameCard from "../../components/Card/Card";
import Card from "@mui/material/Card";

function GameReviews() {
  const location = useLocation();
  // const[ reviews , setReview ] = useState("");

  const [reviews, setReview] = useState({
    sentiment_reviews: [
      {
        prediction: "positive",
        review:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        prediction: "negative",
        review:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
    ],
    positive_reviews: "",
    negative_reviews: "",
    overall_sentiment: "Positive",
  });

  useEffect(() => {
    if (location.state) {
      setReview(location.state);
    }
  }, [location]);
  console.log(reviews);

  // useEffect(() => {
  //   if(reviews.length > 0){
  //     // console.log(reviews , "ggggggg")
  //   }

  //   }, [reviews]);

  // console.log(reviews)

  return (
    <m.div
      initial={{ y: "2%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75 }}
      className="g-main"
    >
      <div className="games-reviews-div">
        <Card variant="outlined">
          <div className="content">
            <h1>Overoll Sentiment: {reviews.overall_sentiment}</h1>
          </div>
        </Card>
        <div className="table-div">
          <div className="table-content">
            {reviews?.sentiment_reviews?.length > 0
              ? reviews?.sentiment_reviews?.map((review, id) => (
                  <GameCard
                    prediction={review.prediction}
                    description={review.review}
                  />
                ))
              : "No Reviews to show"}
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default GameReviews;

// const[ reviews , setReview ] = useState({
//   "sentiment_reviews": [
//     {
//     "prediction": "positive",
//     "review" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//   },
//   {
//     "prediction": "negative",
//     "review" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//   }
// ],
//       "positive_reviews": "",
//       "negative_reviews": "",
//       "overall_sentiment": "Positive"
// });
