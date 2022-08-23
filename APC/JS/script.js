

function Services() {
    document.getElementById("servicesID").style.display = "block";
    document.getElementById("AccountID").style.display = "none";
    document.getElementById("DocsID").style.display = "none";
    document.getElementById("OrderID").style.display = "none";
    document.getElementById("FotoID").style.display = "none";  
}


function Account() {
    document.getElementById("AccountID").style.display = "block";
    document.getElementById("servicesID").style.display = "none";
    document.getElementById("DocsID").style.display = "none";
    document.getElementById("OrderID").style.display = "none";
    document.getElementById("FotoID").style.display = "none";
}

function Docs() {
    document.getElementById("AccountID").style.display = "none";
    document.getElementById("servicesID").style.display = "none";
    document.getElementById("DocsID").style.display = "block";
    document.getElementById("OrderID").style.display = "none";
    document.getElementById("FotoID").style.display = "none";
}

function Order() {
    document.getElementById("AccountID").style.display = "none";
    document.getElementById("servicesID").style.display = "none";
    document.getElementById("DocsID").style.display = "none";
    document.getElementById("OrderID").style.display = "block";
    document.getElementById("FotoID").style.display = "none";
}


function Foto() {
    document.getElementById("AccountID").style.display = "nobe";
    document.getElementById("servicesID").style.display = "none";
    document.getElementById("DocsID").style.display = "none";
    document.getElementById("OrderID").style.display = "none";
    document.getElementById("FotoID").style.display = "block";
}




// IMEGE

const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});



// 
const image_inputq = document.querySelector("#image-input1");

image_inputq.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image1").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});



// Order 

var DateToday = new Date().toLocaleDateString();


function Save() {
    // string p = document.getElementById("textarea").value;
    // string Name = document.getElementById("ReviewsWriteName").value;
  
    let text = $("textarea").val();
    let name = $(".ReviewsWriteName").val();

    let newReview = ` <div class="info">
    <h2> Hello </h1>
    <p3> ${DateToday} </p3>
  </div>`;
  
  $(".info").before(newReview);
  
  };