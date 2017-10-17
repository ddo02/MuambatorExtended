var rows = $('tbody:eq(0) tr');

// PO123456789BR
var regExp = /[a-zA-Z]{2}\d{9}[a-zA-Z]{2}/;

rows.each(function() {
	$this = $(this)
	
	var codeCol = $this.find("td:eq(0)");
	
	var validateCol = $this.find("td:eq(1)");
	
	if(validateCol.length > 0) {
		
		var rast = regExp.exec($this.html());
		
                flag = String(rast).slice(-2).toLowerCase();
                
                $(`<span class="flag-icon flag-icon-` + flag + `" style="vertical-align: initial;"></span>`).prependTo(codeCol);
                
		$(`<form style="display:inline" method="POST" target="_blank" action="http://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm">
		<input type="hidden" name="Objetos" value="` + rast + `">
		<input class="icone-categoria" style="width:20px;margin-bottom:-5px" type="image" value=" " src=` + chrome.extension.getURL("img/correios_icon.jpg") + `>
		</form>`).prependTo(codeCol);
	}
});