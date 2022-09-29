function generateMarkdown(data) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <link rel="icon" href="./(PUT ICON PATH HERE)" />
        <title>Employee Roster</title>
      </head>
      <body>
        <header class="container-fluid text-white bg-primary vstack gap-3 p-4">
          <h1 id="title" class="text-center">My Team!</h1>
        </header>
        <!-- top div controls the page overall -->
        <div class="d-flex flex-wrap justify-content-center">
        // 

        INSERT ALL THE OTHER MARKDOWNS HERE!!!!!!

        //
        </div>
      </body>
    </html>`;
}
module.exports = generateMarkdown;
