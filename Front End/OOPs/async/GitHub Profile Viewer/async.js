let searchbnt = document.querySelector('.search')
let usernameInput = document.querySelector('#usernameInput')
let Card = document.querySelector('.card')

function getData(username)
{
    return  fetch(`https://api.github.com/users/${username}`)
    .then((raw) => {
        if(!raw.ok) throw new Error("User not found");
        return raw.json()
    });
}
function getRepos(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then((raw) => {
        if(!raw.ok) throw new Error("failed to fetch repos...");
        return raw.json()
    });;
}

function decoration(details){
    console.log(details);
    let data =
     `<div class="flex items-center gap-4">
        <img
          id="avatar"
          src="${details.avatar_url}"
          alt="Avatar"
          class="w-20 h-20 rounded-full border border-gray-300 object-cover"
        />
        <div>
          <h2 id="name" class="text-xl font-bold text-white">${details.name}</h2>
          <p id="username" class="text-gray-300">${details.login}</p>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <p id="repos" class="text-lg font-bold text-white">${details.public_repos}</p>
          <p class="text-gray-400 text-sm">Repos</p>
        </div>
        <div>
          <p id="followers" class="text-lg font-bold text-white">${details.followers}</p>
          <p class="text-gray-400 text-sm">Followers</p>
        </div>
        <div>
          <p id="following" class="text-lg font-bold text-white">${details.following}</p>
          <p class="text-gray-400 text-sm">Following</p>
        </div>
      </div>

      <!-- Bio & Other Info -->
      <div class="mt-6 space-y-2">
        <p id="bio" class="text-gray-200">${details.bio ? details.bio : "" }</p>
        <p><span class="text-gray-400">Location:</span> ${details.location ? details.location : ""}</p>
        <p><span class="text-gray-400">Company:</span> ${details.company ? details.company : "N/A"}</p>
        <p><span class="text-gray-400">Blog:</span> <a href="https://github.blog" class="text-blue-400 hover:underline">github.blog</a></p>
        <a
          id="profileLink"
          href="${details.html_url}"
          target="_blank"
          class="text-blue-400 hover:underline inline-block mt-2"
        >
          View Full GitHub Profile →
        </a>
      </div>`

    Card.innerHTML = data;
}




searchbnt.addEventListener('click',function(event){
    event.preventDefault();
    let user = usernameInput.value.trim();
    if(user.length > 0){
        getData(user).then(data => {
             
            decoration(data); 
        })
        .catch(err => {
                Card.innerHTML = `<p class="text-red-400 font-semibold">❌ ${err.message}</p>`;
            });
    }
})

