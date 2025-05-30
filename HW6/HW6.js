//ורד נגאר 325523017 
//מוחמד ריאן 327640835
// 'use strict';

const reviewText = document.getElementById("review-text");
const toggleBtn = document.getElementById("toggle-review");

const shortReview = `"This company exceeded my expectations in every way..."`;
const fullReview = `"This company exceeded my expectations in every way. Their team was professional, responsive, and incredibly skilled. I couldn't have asked for a better experience and result!"`;

let isExpanded = false;

toggleBtn.addEventListener("click", () => {
  if (isExpanded) {
    reviewText.textContent = shortReview;
    toggleBtn.textContent = "Read full review";
  } else {
    reviewText.textContent = fullReview;
    toggleBtn.textContent = "Read less";
  }
  isExpanded = !isExpanded;
});
