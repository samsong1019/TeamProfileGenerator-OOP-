function engineerMarkdown(data) {
  return `<div class="card m-2" style="width: 18rem">
    <div class="card-body bg-success">
    //ENGINEER NAME
      <h5 class="card-title">${engineerName}</h5>
      <h6 class="card-title">Engineer</h6>
    </div>
    <ul class="list-group list-group-flush">
    //ENGINEER ID
      <li class="list-group-item">${engineerId}</li>
      <li class="list-group-item">
      // EGNINEER EMAIL
        Email: <a href="mailto:${data.engineerEmail}" class="card-link">${data.engineerEmail}</a>
      </li>
      <li class="list-group-item">
      //EGNINEER GITHUB
        GitHub: <a href="github.com/${github}" class="card-link">${github}</a>
      </li>
    </ul>
  </div>`;
}

module.exports = engineerMarkdown;
