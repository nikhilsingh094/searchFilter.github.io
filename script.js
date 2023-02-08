const users = document.querySelector(".user-list");
const userName = document.querySelector("#user");

let userArray = [];
const getData = async () => {
  try {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    // console.log(data);

    if (data) {
      users.innerHTML = "";
    }

    data.map((user) => {
      const li = document.createElement("li");

      userArray.push(li);

      li.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="user-data">
                <img src=${user.avatar_url} alt=${user.avatar_url}/>
                <div>
                    <p>${user.login}</p>
                    <a href=${user.html_url} target="_blank">${user.html_url}</a>
                </div>
            </div>
        `
      );

      users.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
};

// search functionality

userName.addEventListener("input", (e) => {
  const val = e.target.value;
  userArray.filter((currElm) => {
    currElm.innerText.toLowerCase().includes(val.toLowerCase())
      ? currElm.classList.remove("hide")
      : currElm.classList.add("hide");
  });
});

getData();
