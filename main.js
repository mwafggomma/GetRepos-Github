

// //  main varibalbes

// let theInput = document.querySelector(".get-repos input")
// let getButton = document.querySelector(".get-button")
// let reposData = document.querySelector(".show-data")



// getButton.onclick = function(){
//     GetRepos( )
// }

// // Get Repos
// function GetRepos(){

//     if(theInput.value === ""){
//         reposData.innerHTML = "<spn>Please write Github UserName</spn>"
//     } else {
//         fetch(`https://api.github.com/users/${theInput.value}/repos`)
//         .then((repos) => {return repos.json()})
//         .then((allRepo) => {
//             // empty container
//             reposData.innerHTML = "";
//             // loop on items
//             allRepo.forEach(repo => {
//                // create the main div
//                 let mainDiv = document.createElement("div") 
//                 // create repo name text
//                 let repoName = document.createTextNode(repo.name)
//                 // append the text to main Div
//                 mainDiv.appendChild(repoName)
//                 // create a repo URL
//                 let theUrl = document.createElement("a")
//                 // crete Text url
//                 let TheUrlText = document.createTextNode("Visit")
//                 // append the text
//                 theUrl.appendChild(TheUrlText)
//                 // add the href
//                 theUrl.href=`https://github.com/${theInput.value}/${repo.name}`
//                 // set Attribute blank
//                 theUrl.setAttribute("target","_blank")
//                 // append url to main div
//                 mainDiv.appendChild(theUrl)
//                 // create start count span
//                 let startSpan = document.createElement("span")
//                 // create the span text
//                 let startText = document.createTextNode(`Stars ${repo.stargazers_count}`)
//                 // append the text to spans
//                 startSpan.appendChild(startText)
//                 // append the span to main div
//                 mainDiv.append(startSpan)
//                 //add class on main div
//                 mainDiv.className = "repo-box"
//                 // append The mai div to container
//                 reposData.appendChild(mainDiv)
//             })
//         })
//     }

// }

let repoInput = document.querySelector(".get-data input")
let repoButton = document.getElementById("btn")
let repoData = document.getElementById("show-data")


repoButton.onclick = () => {GetRepos()}


function GetRepos () {
    if(repoInput.value === "") {
        repoData.innerHTML = `<p>Please write Github UserName</p>`;
        setTimeout(() => {
            repoData.innerHTML = `<span>No Repos Found</span>`;
        }, 3000)
    } else {
        fetch(`https://api.github.com/users/${repoInput.value}/repos`)
        .then((repos) => {return repos.json()})
        .then((item) => {
            repoData.innerHTML = "";
            item.forEach(element => {
                // create The div
                let mainDiv = document.createElement("div");

                // create Repo name text
                let repoName = document.createTextNode(element.name);

                // Append The Text to mainDiv
                mainDiv.appendChild(repoName);

                // create a repo URL
                let theLink = document.createElement("a");

                // create a text for theLink
                let theLinkText = document.createTextNode("Visit");

                // append the linkText To theLink
                theLink.appendChild(theLinkText);

                // crate the href
                theLink.href = `https://github.com/${repoInput.value}/${element.name}`;

                // add attribute blank
                theLink.setAttribute('target', '_blank');

                // append theLink to mainDiv
                mainDiv.appendChild(theLink);

                // append mainDiv to container
                repoData.append(mainDiv)
            });
        })
    }
}