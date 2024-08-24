import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import { fetchReviewsById } from "../../services/api";

const MovieReviews = () => {
  const [review, setReview] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchReviewsById(params.movieId).then((data) => setReview(data));
  }, [params.movieId]);
  return (
    <div>
      <ul className={s.list}>
        {review.map((item) => (
          <li key={item.id} className={s.listItem}>
            <p className={s.author}>Author: {item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
