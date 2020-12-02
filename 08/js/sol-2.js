		var buttons = document.querySelectorAll(".check");
		var ref = true;
		
		for(var i=0; i<buttons.length; i++) {
			buttons[i].addEventListener("click", function() {
				if(ref == true)	{
					this.parentNode.style.color = "#ccc";
						ref = false;
				}
				else {
					this.parentNode.style.color = "#111";
						ref = true;
				}					
			});
			}