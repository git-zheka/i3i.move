function Save() {
  // string p = document.getElementById("textarea").value;
  // string Name = document.getElementById("ReviewsWriteName").value;

  let text = $("textarea").val();
  let name = $(".ReviewsWriteName").val();
  let newReview = ` <div class="Reviews">
  <div class="Name"> ${name} </div>
  <div class="ReviewsText">${text}</div>
</div>`;

$(".firstReview").before(newReview);
$(".lastReview").after(newReview);

};