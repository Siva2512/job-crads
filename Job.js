const jobs = [
  {
    company: "Amazon",
    logo: "image/Amazon.png",
    days: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior Level",
    price: "$120/hr",
    location: "Mumbai, India"
  },
  {
    company: "Google",
    logo: "image/google.jpg",
    days: "30 days ago",
    role: "Graphic Designer",
    type: "Part-time",
    level: "Flexible Schedule",
    price: "$150-220k",
    location: "Kochi, India"
  },
  {
    company: "Dribbble",
    logo: "image/dribbble.webp",
    days: "18 days ago",
    role: "Senior Motion Designer",
    type: "Contract",
    level: "Junior Level",
    price: "$85/hr",
    location: "Chennai, India"
  },
  {
    company:"Figma",
    logo: "image/figma.jpg",
    days: "5 days ago",
    role: "UI/UX Designer",
    type: "Full-time",
    level: "In office",
    price: "$200-250k",
    location: "Bangalore, India"
  },
  {
    company: "Airbnb",
    logo: "image/airbnb.png",
    days: "5 days ago",
    role: "Junior UI/UX Designer",
    type: "Contract",
    level: "Remote",
    price: "$100/hr",
    location: "Delhi, India"
  },
  {
    company: "Apple",
    logo: "image/apple.jpg",
    days: "5 days ago",
    role: "Graphic Designer",
    type: "Full-time",
    level: "Flexible Schedule",
    price: "$85-120k",
    location: "Kerala, India"
  }
];

const container = document.getElementById("jobContainer");

container.innerHTML = jobs.map(job => `
  <div class="card">
    <div class="card-top">
      <div class="icon">
        <img src="${job.logo}" alt="${job.company}">
      </div>
      <button>Save <i class="fa-regular fa-bookmark"></i></button>
    </div>

    <p class="company">
      <strong>${job.company}</strong>
      <span class="days">${job.days}</span>
    </p>

    <h4 class="role">${job.role}</h4>

    <div class="tag">
      <span>${job.type}</span>
      <span>${job.level}</span>
    </div>

    <div class="card-footer">
      <div>
        <p class="price">${job.price}</p>
        <p class="location">${job.location}</p>
      </div>
      <button class="apply">Apply Now</button>
    </div>
  </div>
`).join("");
