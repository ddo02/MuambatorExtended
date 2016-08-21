var rows = $('tbody:eq(0) tr');

var rast = $("span:contains('Detalhes do pacote')").next()

rows.each(function() {
  $this = $(this)
  var codeCol = $this.find("td:eq(0)");
  
  var validateCol = $this.find("td:eq(2)");

  if(validateCol.length > 0) {
    $('<a href=http://websro.correios.com.br/sro_bin/txect01$.QueryList?P_LINGUA=001&P_TIPO=001&P_COD_UNI=' + rast.text() +' target="_blank"><img src="' + chrome.extension.getURL("img/correios_icon.jpg") + '"></a>').prependTo(codeCol);
  }
});