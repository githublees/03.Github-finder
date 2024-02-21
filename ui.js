class UI {
  constructor() {
    this.profiles = document.getElementById("profiles");
    this.repos = document.getElementById("repos");
    this.jandis = document.getElementById("jandis");
  }

  showProfile(user) {
    console.log(user);
    let profileHTML = "";

    profileHTML += `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}" />
                        <a href="${user.html_url}" target="_black" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Public Followers: ${user.followers}</span>
                        <span class="badge badge-info">Public Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
        `;

    this.profiles.innerHTML = profileHTML;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
        `;
    });

    this.repos.innerHTML = output;
  }

  showJandi(userText) {
    let jandiHTML = "";

    jandiHTML = `
            <div class="card card-body mb-1">
                <img class="grass" src="https://ghchart.rshah.org/${userText}"/>
            </div>
        `;

    this.jandis.innerHTML = jandiHTML;
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement("div");

    div.className = className;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".searchContainer");

    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    //     if (this.profiles) {
    //       this.profiles.remove();
    //     }
    //     if (this.repos) {
    //       this.repos.remove();
    //     }
  }
}
