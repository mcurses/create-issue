const repoOwner = 'mcurses';
const repoName = 'cars'
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;

const issueData = {
  title: 'New issue title',
  body: 'New issue description',
  labels: ['bug']
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.API_TOKEN}`
  },
  body: JSON.stringify(issueData)
};

fetch(apiUrl, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));




