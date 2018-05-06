function myfunction()
		{
		var form = document.getElementById('applystatus').value;
		var flag = form.substr(form.length-6)
		if(flag == "310401")
			{
				alert(11);
			}
			else if(flag == "931501")
			{
				alert(23);
			}
			else if(flag == "bada01")
			{
				alert(12);
			}
			else if(flag == "e68501")
			{
				alert(8);
			}
			else if(flag == "14c001")
			{
				alert(22);
			}
			else if(flag == "d2c301")
			{
				alert(10);
			}
			else
			{
				alert("无法识别，请确认输入正确");
			}
		}