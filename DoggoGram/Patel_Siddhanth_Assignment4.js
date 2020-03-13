// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
   var a = document.getElementById("formUsername").value;
   var b = document.getElementById("formCaption").value;
   var c = document.getElementById("formImg").value;

 addNewPost(a,b,fileLocations[c]);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the posta
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   var newdiv = document.createElement("div");
   newdiv.classList.add("post");
   // Create a span for the user
   var span = document.createElement("span");
   span.innerText = username;
   // Create image element
   var img1 = document.createElement("img");
   img1.src = imgLocation
   img1.alt = caption
   // Create overlay element
   var overlay = document.createElement("div");
   overlay.classList.add("postOverlay");
   overlay.innerText = caption;
   // Add all child elements (order matters)
   newdiv.appendChild(span);
   newdiv.appendChild(img1);
   newdiv.appendChild(overlay);
   // Add event listeners to post
   newdiv.addEventListener("mouseover", () => overlay.style.opacity = "1")
   newdiv.addEventListener("mouseleave", () => overlay.style.opacity = "0")
   // Add post element to post list
   document.getElementById("postList").appendChild(newdiv);
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};