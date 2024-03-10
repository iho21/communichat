
document.getElementById("loginForm").addEventListener("submit", function(event) {
   
    event.preventDefault();
   
    window.location.href = "actual_page.html";
    
    setTimeout(function() {
        window.location.href = "actual_page.html"; 
    }, 3000); 
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
   
    event.preventDefault();
    
    window.location.href = "actual_page.html";
    
    setTimeout(function() {
        window.location.href = "actual_page.html"; 
    }, 3000); 
});



const addButton = document.getElementsByClassName('.add-button');
const formDialog = document.querySelector('.form-dialog');


addButton.addEventListener('click', () => {
    
    formDialog.style.display = 'block';
});


document.getElementById('issueForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }

   
    formDialog.style.display = 'none';
});

