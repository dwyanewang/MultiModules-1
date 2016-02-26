$(document).ready(function () {

    $("input[type='text']").each(function(){
        var default_value = this.value;
        $(this).focus(function(){
               if(this.value == default_value) {
                       this.value = '';
               }
       });

        $(this).blur(function(){
               if(this.value == '') {
                       this.value = default_value;
               }
       });
    });

    $("#female").live("change",function(e){
    	  $("#female").attr("checked", "checked").checkboxradio("refresh");
    });
    
    $("#male").live("change",function(e){
    	$("#male").attr("checked", "checked").checkboxradio("refresh");
    });
    
    $("#yaiche").live("change",function(e){
  	  $("#yaiche").attr("checked", "checked").checkboxradio("refresh");
  	  $('#owncar_model').textinput('enable');
  	  $("input[name='owncar_model']").css("color","black");
    });
  
    $("#naiche").live("change",function(e){
    	$("#naiche").attr("checked", "checked").checkboxradio("refresh");
    	$('#owncar_model').textinput('disable');
    	$("input[name='owncar_model']").css("color","grey");
    });
 
    $('#registerForm').validate({

        submitHandler: function (form) { 
        	
			var errors = 0;
			var name = $("input[name='customer_name']").val(); //姓名
			var age = $("input[name='age']").val(); //年龄
			var phone = $("input[name='contact_mobile']").val();//手机号码
			var email = $("input[name='contact_email']").val();//电子邮件
			var address = $("input[name='customer_address']").val();//地址

			if(name=="姓名*" || $.trim( name ) == ''){ 
				$("input[name='customer_name']").css("color","red"); 
				errors++;
			}else{ 
				if(name.length>100){
					$("input[name='customer_name']").css("color","red"); 
					errors++;
				} else {
					$("input[name='customer_name']").css("color","black");  
				}
			}

			var agerex = /^(1[0-9][0-9]|[1-9][0-9])$/;
			if(age!='年龄' && !age.match(agerex)){
				errors++;
				$("input[name='age']").css("color","red"); 
			} else {
				$("input[name='age']").css("color","black");  
			}
	      	
			if(phone=="手机号码*"){ 
				$("input[name='contact_mobile']").css("color","red"); 
				errors++;
			}else{ 
				var mobilerex = /^1[3458][0-9]{9}$/;
				$("input[name='contact_mobile']").css("color","black");
				if(!phone.match(mobilerex)){ 
					$("input[name='contact_mobile']").css("color","red"); 
					errors++;
				} else {
					$("input[name='contact_mobile']").css("color","black"); 
				}
			}
  
			if(email=="电子邮箱*"){ 
				$("input[name='contact_email']").css("color","red"); 
				errors++;
			}else{
				var emailrex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
				if(email.length>80){
					$("input[name='contact_email']").css("color","red"); 
					errors++;
				} else{ 
					if(!email.match(emailrex)){ 
						$("input[name='contact_email']").css("color","red"); 
						errors++;
					} else {
						$("input[name='contact_email']").css("color","black");  
					}
				}
			}

			if(address!='地址' && address.length>255){
				errors++;
				$("input[name='customer_address']").css("color","red"); 
			} else if($.trim( address ) == ''){
				errors++;
				$("input[name='customer_address']").css("color","red"); 
			} else {
				$("input[name='customer_address']").css("color","black");
			}
			
			if($("#address_province :selected").text() == "所在省份*"){
				errors++;
				$("#prov .ui-btn-text").css("color", "red");
			} else {
				$("#prov .ui-btn-text").css("color", "black");
			}
			$('#address_province').selectmenu('refresh',true);	
			
			if($("#address_city :selected").text() == "所在城市*"){
				errors++;
				$("#city .ui-btn-text").css("color", "red");
			} else {
				$("#city .ui-btn-text").css("color", "black");
			}
			$('#address_city').selectmenu('refresh',true);	
			
			if($("#purchase_brand :selected").text() == "喜爱品牌*"){
				errors++;
				$("#pb .ui-btn-text").css("color", "red");
			} else {
				$("#pb .ui-btn-text").css("color", "black");
			}
			$('#purchase_brand').selectmenu('refresh',true);	

			if($("#purchase_model :selected").text() == "预计购买车型*"){
				errors++;
				$("#pm .ui-btn-text").css("color", "red");
			} else {
				$("#pm .ui-btn-text").css("color", "black");
			}
			$('#purchase_model').selectmenu('refresh',true);	

			if($("#purchase_date :selected").text() == "预计购买的时间*"){
				errors++;
				$("#pd .ui-btn-text").css("color", "red");
			} else {
				$("#pd .ui-btn-text").css("color", "black");
			}
			$('#purchase_date').selectmenu('refresh',true);
			
			if( !$("#purchase_selected").is(":checked") && !$("#car_shijia2").is(":checked") ){
				errors++;
				$("#info .ui-btn-text").css("color", "red");
			} else {
				$("#info .ui-btn-text").css("color", "black");
			}
			
			if(errors==0) {
				submit() ;
			} else {
				document.body.scrollTop = document.documentElement.scrollTop = 0;
			}
       
		}
    });
	
});