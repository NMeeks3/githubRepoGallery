// profile info
const overview = document.querySelector(".overview");
const username = "NMeeks3";
const repoList = document.querySelector(".repo-list");

const gitUserProfile = async function() {
   const userProfile = await fetch(`https://api.github.com/users/${username}`);
   const data = await userProfile.json();
//    console.log(data);
   displayUserProfile(data);
};

gitUserProfile();

const displayUserProfile = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
        <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of Public Repos:</strong> ${data.public_repos}</p>
    </div>`;
    overview.append(div);
    gitRepos();
};

const gitRepos = async function () {
    const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=update&per_page=100`);
    const repoData = await fetchRepos.json();
    displayRepos(repoData);
};

const displayRepos = function (repos) {
    for (const repo of repos) {
        const repoItem = document.createElement("li");
        repoItem.classList.add("repo");
        repoItem.innerHTML = `<h2>${repo.name}</h2>`;
        repoList.append(repoItem);
    }
};

       
