var onsens;
var JSON_FILE_URL = 'onsens.json';
$(document).ready(function(){
  $.getJSON(JSON_FILE_URL, function(data) {
    onsens=data;
  });
});

function displayOnsens() {
  var root=document.getElementById('onsens');
  var tab=document.createElement('table');
  var tbo=document.createElement('tbody');
  var row, cell;
  for(var i=0;i<onsens.length;i++){
    row=document.createElement('tr');
    cell=document.createElement('td');
    var aTag = document.createElement('a');
    aTag.setAttribute('href',onsens[i].url);
    aTag.innerHTML=onsens[i].name;
    cell.appendChild(aTag);
    row.appendChild(cell);
    cell=document.createElement('td');
    cell.appendChild(document.createTextNode(onsens[i].type));
    row.appendChild(cell);
    tbo.appendChild(row);
  }
  tab.appendChild(tbo);
  root.appendChild(tab);
  
  $("button").hide();   
}
