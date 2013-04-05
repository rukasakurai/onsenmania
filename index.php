<html>
<?php include_once("head.html"); ?>
<body>
<?php include_once("top_part.html"); ?>
<div id="widewrapper"><div id="contentsArea"><div id="mainArea">
<?php 
if(isset($_GET["area"])){
  include_once($_GET["area"].".html");
} else {
  include_once("metropolitanarea.html");
}
?>
</div></div></div>
</body>
</html>
