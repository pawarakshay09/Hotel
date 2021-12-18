function sendInterest(id){
	$("#interestModal").html("Please wait...");
	$.get("./services/send_interest_confirmation.php?userid="+id,
	function(data){
		$("#interestModal").html(data);
	});
}
function checkcontactcount(toid){
	$("#viewContact").html("Please wait...");
			$.get("./parts/modal/view_contact_count_modal.php?toid="+toid,
			function(data){
				$("#viewContact").html(data);
			});
}
function getContactDetail(toid){
	$("#viewContact").html("Please wait...");
		$.get("./services/view_contact_details.php?toid="+toid,
		function(data){
			$("#viewContact").html(data);
	});
}



