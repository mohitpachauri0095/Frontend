let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

const jobList = document.getElementById("jobList");
const form = document.getElementById("jobForm");

function saveJobs() {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

function updateDashboard() {
  document.getElementById("total").innerText = jobs.length;
  document.getElementById("applied").innerText =
    jobs.filter(j => j.status === "Applied").length;
  document.getElementById("interview").innerText =
    jobs.filter(j => j.status === "Interview").length;
  document.getElementById("selected").innerText =
    jobs.filter(j => j.status === "Selected").length;
}

function renderJobs(data = jobs) {
  jobList.innerHTML = "";
  data.forEach(job => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${job.company} - ${job.role}</span>
      <strong>${job.status}</strong>
    `;
    jobList.appendChild(li);
  });
  updateDashboard();
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const company = company.value;
  const role = role.value;
  const status = document.getElementById("status").value;

  jobs.push({ company, role, status });
  saveJobs();
  renderJobs();
  form.reset();
  
});

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = jobs.filter(j =>
    j.company.toLowerCase().includes(value)
  );
  renderJobs(filtered);
});

renderJobs();
