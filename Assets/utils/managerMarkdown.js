function managerMarkdown(data) {
  return ` <div class="card m-2" style="width: 18rem">
    <div class="card-body bg-primary">
    //MANAGER NAME
      <h5 class="card-title">${manager}</h5>
      <h6 class="card-title">Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
    //MANAGER ID
      <li class="list-group-item">ID: ${managerId}</li>
      <li class="list-group-item">
      //MANAGER EMAIL
        Email: <a href="mailto:${managerEmail}" class="card-link">${managerEmail}</a>
      </li>
      <li class="list-group-item">
      //OFFICE NUMBER
        Office Number: ${number}
      </li>
    </ul>
  </div>`;
}

module.exports = managerMarkdown;
