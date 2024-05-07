const user_names = ["pankajinos","Ram9525","LakshyaxGupta","lokii9024","vaishnavi2408"];
// const user_names = ["CodeWithHarry"];
let repoCounts = []; 
async function repo_count(username) {
    
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        const repoCount = userData.public_repos;
    return { username, repoCount };
   
    
}


async function ranking_repocount() {
    
    for (let username of user_names) {
        const userRepoCount = await repo_count(username);
            repoCounts.push(userRepoCount);
            console.log(repoCounts);

    }

    // Sort the repoCounts array 
    repoCounts.sort((a, b) => b.repoCount - a.repoCount);

    
    let rankListHTML = '';
    repoCounts.forEach((entry, index) => {
        rankListHTML += `<li>Rank ${index + 1}: ${entry.username} - ${entry.repoCount} repositories</li>`;
    });

   
    document.querySelector(".rank-list").innerHTML = `<ol>${rankListHTML}</ol>`;
    document.querySelector(".loading").setAttribute("style", "display:none");
}

ranking_repocount(); 
