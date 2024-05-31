// $(document).ready(function(){
//     $('#viewCvBtn').click(function(){
//       Replace 'your-cv-url.pdf' with the actual URL of your CV PDF file
//       window.open('Sam_Resume.pdf', '_blank');
//     });
//   });

document.getElementById("viewCvBtn").addEventListener("click", function() {
  document.getElementById("cvModal").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("cvModal").style.display = "none";
});
