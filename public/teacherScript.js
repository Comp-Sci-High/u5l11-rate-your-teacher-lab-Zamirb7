// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page
const createForm= document.querySelector("form");
createForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const teacherData= new FormData(createForm);
    const reqBody=Object.fromEntries(teacherData);
})
await fetch("/add", {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify("req.body"),
});
window.location.href="/";