var commentList = [
  {
    name: "Miyah Myles",
    designation: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    comment:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
  },
  {
    name: "June Cha",
    designation: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    comment:
      "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
  },
  {
    name: "Iida Niskanen",
    designation: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    comment:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
  },
  {
    name: "Renee Sims",
    designation: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    comment:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
  },
  {
    name: "Jonathan Nunfiez",
    designation: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    comment:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!"
  },
  {
    name: "Sasha Ho",
    designation: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    comment:
      "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
  },
  {
    name: "Veeti Seppanen",
    designation: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    comment:
      "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
  }
];
var currentCommentIndex = 0;
var progressEl = document.querySelector(".progress");
var commentContainerEl = document.querySelector(".comment-container");

window.addEventListener("load", showComment);

function showComment() {
  progressEl.classList.add("animate");
  var cardEl = getCommentCard(currentCommentIndex);
  displayCard(cardEl);
  setInterval(getCard, 10000);
}

function getCard() {
  currentCommentIndex = (currentCommentIndex + 1) % commentList.length;
  var cardEl = getCommentCard(currentCommentIndex);
  displayCard(cardEl);
}

function displayCard(cardEl) {
  commentContainerEl.innerHTML = cardEl;
}

function getCommentCard(index) {
  var { name, photo, comment, designation } = commentList[index];
  return `
    <p class="comment">${comment}</p>
  <div class="author-details">
    <img src="${photo}" alt="${name}" />
    <div class="info">
      <h4 class="name">${name}</h4>
      <p class="designation">${designation}</p>
    </div>
  </div>
  `;
}
