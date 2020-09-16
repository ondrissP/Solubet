<?php $page_name = basename ($_SERVER["SCRIPT_NAME"],".php");
      if ($page_name == "index")
          $page_name = "Poistenie";
      elseif ($page_name == "financie")
          $page_name = "Finančné produkty";
      elseif ($page_name == "reality")
          $page_name = "Reality";
      else ($page_name = "O nás");
?>

<!doctype html>
  <html>
    <head>
    <meta charset = "utf-8">
    <title>Solubet <?php echo ucfirst("$page_name");?> </title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/b1eca51da3.js"></script>
    </head>
    <body>
      <div id="container">
        <header class="header">
          <div class="header-text-box">
            <h1 ID="logo"><span>Solubet </span>s.r.o.</h1>
            <p class="header-text">Naša spoločnosť SOLUBET, s.r.o. vznikla 3.1.2014, s cieľom poskytnúť každému klientovi,
              to najlepšie z možností finančného, poistného a od roku 2019 i realitného trhu. Našou devízou je vždy profesionálny a otvorený prístup.</p>
          </div>
          <ul class="contact">
            <li><a href="tel:00421907701276"><i class="fas fa-phone"></i>+421 907 701 276</a></li>
            <li><a href="tel:00421907701062"><i class="fas fa-phone"></i>+421 907 701 062</a></li>
            <li><a href="mailto:info@solubet.sk"><i class="fas fa-envelope"></i> info@solubet.sk</a></li>
          </ul>
          <nav>
             <ul class="menu">
               <li><a href="index.php">Poistenie</a></li>
               <li><a href="financie.php">Finančné produkty</a></li>
               <li><a href="reality.php">Reality</a></li>
               <li><a href="o_nas.php">O nás</a></li>
               <li><a href="javascript:void(0);" class="icon" onclick="menuRespons()">
                    <i class="fa fa-bars"></i>
                  </a>
               </li>
             </ul>
          </nav>
        </header>
