<html>
<?php include_once("head.html"); ?>
<body>
<div id="wrapper">
  <div id="topBar">
    <?php include_once("topBar.html"); ?>
  </div>
  <div id="inner">
    <div id="mainWrapper">
      <div id="widewrapper"><div id="contentsArea"><div id="mainArea">
<?php 
if(isset($_GET["area"])){
  include_once($_GET["area"].".html");
} else {
  include_once("metropolitanarea.html");
}
?>
      </div></div></div>
    </div> <!-- mainWapper -->

    <div class="sideWrapper" id="sideWrapper">
      <?php include_once("sideWrapper.html"); ?>
    </div>

    <div class="clear"><hr /></div>
  </div> <!-- inner -->
 
  <div id="footer">
  
  </div> <!-- /footer -->
</div><!-- /wrapper -->
</body>
</html>
