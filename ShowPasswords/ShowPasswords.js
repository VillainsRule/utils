document.querySelectorAll('input').forEach(input => {
  if (input.type === "password") input.type = "text";
});
