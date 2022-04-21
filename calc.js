//Jordan Gibson
var URL="https://api.clearllc.com/api/v2/math/";
var URL2="?api_key=bed859b37ac6f1dd59387829a18db84c22ac99c09ee0f5fb99cb708364858818&";
var n1 = "";
var n2 = "";
var operator = "";
var numFlag = 0;

$( document ).ready(function() {
	getRootProc();
});

function add() {

	a=$.ajax({
		url: URL + 'vi/api/ps',
		method: "GET"
	}).done(function(data) {
		rootProcCount += 1;
		$("#processRun").html(rootProcCount);
		len = data.ps.length;
		$("#processes").html("");
		for (i=0;i<len;i++) {
			$("#processes").append("<tr><td>" + data.ps[i].user+"</td><td>" + data.ps[i].pid + "</td><td>" + data.ps[i].runTime + "</td><td>" + data.ps[i].cmd + "</td></tr>");
		}
		setTimeout(getRootProc,5000);
	}).fail(function(error) {
		errorCounter++;
		$("#logRun").html(errorCounter);
		console.log("error",error.statusText);
		$("#log").prepend("ps error "+new Date()+"<br>");
		setTimeout(getRootProc,5000);
	});
}
