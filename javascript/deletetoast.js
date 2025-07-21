function deleteToast() {
  const toast = document.getElementById("deletetoast");
  const progress = document.getElementById("deleteprogressBar");
  const closeIcon = document.getElementById("closedeleteToast");

  if (!toast || !progress || !closeIcon) {
    console.error("Toast elements not found");
    return;
  }

  // Remove any previous click listeners to avoid duplicates
  closeIcon.onclick = null;

  // Close functionality
  closeIcon.onclick = () => {
    toast.classList.remove("active");
    toast.style.display = "none";
    progress.classList.remove("active");
    clearTimeout(timer1);
    clearTimeout(timer2);
  };

  // Display and animate the toast
  toast.style.display = "block";
  toast.classList.add("active");

  // Reset and restart progress animation
  progress.style.transition = "none";
  progress.classList.remove("active");
  void progress.offsetWidth; // Trigger reflow
  progress.style.transition = "transform 2s linear";
  progress.classList.add("active");

  // Set timeouts for hiding
  const timer1 = setTimeout(() => {
    toast.classList.remove("active");
    toast.style.display = "none";
  }, 2000);

  const timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 2000);
}
