function internMarkdown(data) {
    return `<div class="card m-2" style="width: 18rem">
    <div class="card-body bg-danger">
    <!-- Interns name -->
      <h5 class="card-title">${data.internName}</h5>
      <h6 class="card-title">Intern</h6>
    </div>
    <ul class="list-group list-group-flush">
    <!--Interns ID NUMBER-->
      <li class="list-group-item">${internId}</li>
      <li class="list-group-item">
      <!--Interns email-->
        Email: <a href="mailto:${data.internsEmail}" class="card-link">${data.internsEmail}</a>
      </li>
      <li class="list-group-item">
        School: ${data.school}
      </li>
    </ul>
  </div>`
}

module.exports = internMarkdown;