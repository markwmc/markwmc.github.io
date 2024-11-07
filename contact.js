document.addEventListener("DOMContentLoaded", () => {
 // const form = document.querySelector("form");
  const modal = document.getElementById("modal");
 // const modalMessage = document.getElementById("modal-message");
  const closeModal = document.querySelector(".close");

  // form.addEventListener("submit", onFormSubmit);

  // function onFormSubmit(e) {
  //   e.preventDefault();
  //   console.log("onFormSubmit called");

  //   const formData = new FormData(form);

  //   const data = Object.fromEntries(formData.entries());

  //   fetch("/formHandler", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "allow-origin",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log("Form successfully submitted!");
  //         modalMessage.textContent = 'Your message has been sent!';
  //         modal.style.display = 'block';
  //         form.reset();
  //         return response.json();
  //       } else {
  //         console.error("Form failed");
  //         modalMessage.textContent = 'Github Pages does not support Dynamic websites; I am working on another option.';
  //         modal.style.display = 'block';
  //         throw new Error("form submission error");
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => console.error("Error: " + error));
  // }

  closeModal.onclick = function () {
    modal.style.display = 'none';
  }

  window.click = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none;'
    }
  }
});
