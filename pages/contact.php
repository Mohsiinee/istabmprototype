<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ISTA Beni Mellal</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>    
    <header class="page">
    <?php include("assets/php/navbar.html");?>
        
        <div class="page-header">
            <h1>Contact</h1>
        </div>
        
    </header>


    <div class="container">
      <div class="map-container">
        <iframe src="https://maps.google.com/maps?q=32.33563515320006, -6.374296386570466&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="contact-container">
        <div class="contact-form">
          <form>
            <div class="form-group">
              <label for="nom">Nom:</label>
              <input type="text" class="form-control" id="nom" placeholder="Enter Nom">
            </div>
            <div class="form-group">
              <label for="prenom">Prénom:</label>
              <input type="text" class="form-control" id="prenom" placeholder="Enter Prénom">
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="objet">Objet:</label>
              <input type="text" class="form-control" id="objet" placeholder="Enter objet">
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea class="form-control" id="message" placeholder="Enter message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="contact-info">
          <p><strong>Telephone:</strong> 05234-83963</p>
          <p><strong>Email:</strong> info@istabm.com</p>
          <p><strong>Adresse:</strong> Bd. 20 Août B.P. 142 route Fquih Ben Salah 23000 Beni Mellal</p>
        </div>
      </div>
    </div>
    
    <?php include("assets/php/footer.html");?>

    <script src="assets/script.js"></script>
</body>
</html>
