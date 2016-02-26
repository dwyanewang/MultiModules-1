<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>注册信息表</title>
	
	<script type="text/javascript" src="scripts/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="scripts/jquery.validate.js"></script> 
	
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/options.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="scripts/error.js"></script>
	<script type="text/javascript" src="scripts/options.js"></script>
	<script type="text/javascript" src="scripts/ProvinceCity.js"></script>
	<script type="text/javascript" src="scripts/model.js"></script>
	<script type="text/javascript" src="scripts/main.js"></script>
	
	<script>
	$(document).ready(function(){
		   $(".purchase_selected").css("display","none");
		   $("#purchase_selected").click(function(){
			if ($("#purchase_selected").is(":checked"))
			{
				$(".purchase_selected").show("fast");
			}
			else
			{
				$(".purchase_selected").hide("fast");
			}
		  });

		});
	</script>

	<script>
	
	$(function() {
		var opts=$("#source").html(), opts2="<option></option>"+opts;
		   
		$("select.populate").each(function() { 
			var e=$(this);
			e.html(e.hasClass("placeholder")?opts2:opts); 
		});
	});

	window.onload = function () {
	
		lang = true;
		initProvinceCity('${prov}', '${city}');
		initCarBrandAndModel('${brand}', '${model}');
		var occupation = "${occupation}";
		var occ=document.getElementById('e4');
		for(var i=0;i<occ.length;i++){
	        if(occ[i].value==occupation)
				occ[i].setAttribute("selected", "selected");
	    }
		
		if('${formbean.testdrive}'=='true'){
			$(".purchase_selected").show("fast");
			document.getElementById("purchase_selected").checked=true;
		}
		
		if('${formbean.pdinfo}'=='true'){
			document.getElementById("car_shijia2").checked=true;
		}
		
		$("#e1").select2();
		$("#e2").select2();
		$("#e3").select2();
		$("#e4").select2();
		$("#e5").select2();
		$("#e6").select2();
		$("#e7").select2();
		

		
		var gender = '${sex}';
		var g=document.getElementById('male');
		if(g.value==gender)
			g.checked = true;
		g=document.getElementById('female');
		if(g.value==gender)
			g.checked = true;
	 }
</script>
	
</head>

<body>

	<div class="body_main">
		<div class="wrapper">
			<div class="top"><img src="images/top.png"/><a href="#" class="back"><img src="images/back.png"/></a></div>
			
			<form:form action="/ssso/scc/register" method="post" id="registerForm" modelAttribute="formbean" data-ajax="false" accept-charset="UTF-8">
				<div class="formbox">
					<div class="form-level">
						<div class="xingming">
							<form:input path="customer_name" type="text" class="blueline required"/>
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
						<div class="nianling">
							<form:input path="age" type="text" class="blueline"/>
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
						<div class="xingbie">
							<div class="leftline"></div>
							<div class="rightline"></div>
							<div>
								<p>
									<span class="male">性别*</span>
									<form:radiobutton path="customer_gender" value="M" id="male" checked="true" class="nan" /> 
									<label for="male">&nbsp;男</label> 
									<form:radiobutton path="customer_gender" value="F" id="female"  class="nv" /> 
									<label for="female">&nbsp;女</label>
								</p>
							</div>
						</div>
					</div>
					<div class="form-level pace1">
						<div class="phone">
							<form:input path="contact_mobile" type="text" class="blueline"/>
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
						<div class="mail">
							<form:input path="contact_email" type="text" class="blueline"/>
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
					</div>
					<div class="form-level">
						<div class="province">
							<div class="leftline"></div>
							<div class="rightline"></div>
							<div class="span4">
								<form:select path="address_province" style="width:95%;" id="e1" onchange="getCity(this.value, 'e2')">
									<option value="">所在省份*</option>
									<option value="BEIJING">北京市</option>
									<option value="TIANJIN">天津市</option>
									<option value="HEBEI">河北省</option>
									<option value="SHANXI">山西省</option>
									<option value="INNER_MONGOLIA">内蒙古自治区</option>
									<option value="LIAONING">辽宁省</option>
									<option value="JILIN">吉林省</option>
									<option value="HEILONGJIANG">黑龙江省</option>
									<option value="SHANGHAI">上海市</option>
									<option value="JIANGSU">江苏省</option>
									<option value="ZHEJIANG">浙江省</option>
									<option value="ANHUI">安徽省</option>
									<option value="FUJIAN">福建省</option>
									<option value="JIANGXI">江西省</option>
									<option value="SHANDONG">山东省</option>
									<option value="HENAN">河南省</option>
									<option value="HUBEI">湖北省</option>
									<option value="HUNAN">湖南省</option>
									<option value="GUANGDONG">广东省</option>
									<option value="GUANGXI">广西壮族自治区</option>
									<option value="HAINAN">海南省</option>
									<option value="CHONGQING">重庆市</option>
									<option value="SICHUAN">四川省</option>
									<option value="GUIZHOU">贵州省</option>
									<option value="YUNNAN">云南省</option>
									<option value="TIBET">西藏自治区</option>
									<option value="SHAANXI">陕西省</option>
									<option value="GANSU">甘肃省</option>
									<option value="QINGHAI">青海省</option>
									<option value="NINGXIA">宁夏回族自治区</option>
									<option value="XINJIANG">新疆维吾尔自治区</option>
									<option value="HONGKONG">香港特別行政區</option>
									<option value="MACAU">澳門特別行政區</option>
								</form:select>
								<!-- select id="e1" class="populate" style="width:95%"></select-->
							</div>
						</div>
						<div class="city">
							<div class="leftline"></div>
							<div class="rightline"></div>
							<div class="span4">
								<form:select path="address_city" style="width:95%;" id="e2" onmousedown="getDCity('e2')">
									<option value="">所在城市*</option>
								</form:select>
								<!--select id="e2" class="populate" style="width:95%"></select-->
							</div>
						</div>
						<div class="address">
							<form:input path="customer_address" type="text" class="blueline"/>
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
					</div>
					<div class="form-level pace1">
						<div class="phone">
							<div class="leftline"></div>
							<div class="rightline"></div>
							<div class="span4">
								<form:select path="purchase_brand" style="width:95%;" id="e3"  onchange="ChangeModel(this.value,'e5')">
									<option value="">喜爱品牌*</option>
									<option value="AUDI">奥迪</option>
									<option value="BENTLEY">宾利</option>
									<option value="LAMBORGHINI">兰博基尼</option>
									<option value="PORSCHE">保时捷</option>
									<option value="VW">进口大众</option>
									<option value="SHANGHAI VOLKSWAGEN">上海大众</option>
									<option value="FAW - VOLKSWAGEN">一汽大众</option>
								</form:select>
								<!-- select id="e3" class="populate" style="width:95%"></select -->
							</div>
						</div>
						<div class="mail">
							<div class="leftline"></div>
							<div class="rightline"></div>
							
							<div class="span4">
								<form:select path="customer_occupation" style="width:95%;" id="e4">
									<option value="">职业</option>
									<option value="BUSINESS_EXECUTIVES">企业主管</option>
									<option value="CORPORATE_MIDDLE_MANAGMENT">企业中级管理人员</option>
									<option value="OFFICE_STAFF">办公室职员</option>
									<option value="ENGINEERING_TECHNICAL">技术工程师</option>
									<option value="PRIVATE_OWNERSHIP">私营企业</option>
									<option value="INDIVIDUAL_BUSINESS">个体</option>
									<option value="INDIVIDUAL_BUSINESS">经营</option>
									<option value="PROFESSIONALS">学者</option>
									<option value="STATECIVIL_CADRES_STAFF">政府事业机关人员</option>
									<option value=SOLDIER>军人</option>
									<option value="FREELANCE">自由职业者</option>
									<option value="STUDENT">学生</option>
									<option value="HOUSEWIFE">家庭主妇</option>
									<option value="RETIREMENT">退休</option>
									<option value="OTHER">其他</option>
								</form:select>
								<!-- select id="e4" class="populate" style="width:95%"></select -->
							</div>
						</div>
					</div>
				   
					<div>
						<p>
							<input type="checkbox" id="purchase_selected" name="testdrive" value="true"  /> 
							<label for="purchase_selected">&nbsp;&nbsp;对此品牌车型试驾感兴趣，并愿意接受经销商联系*</label> 
						</p>
						<p>&nbsp;&nbsp;</p>
					</div>
					<div id="cartype" class="purchase_selected form-level pace1">
						<div class="type">
							<div class="leftline"></div>
							<div class="rightline"></div>
							<div class="span4">
								<form:select path="purchase_model" style="width:95%;" id="e5" onmousedown="getDModel('purchase_model')">
									<option value="">预计购买车型*</option>
								</form:select>
								<!-- select id="e5" class="populate" style="width:95%"></select-->
							</div>
						</div>
						<div class="time">
							<div class="leftline"></div>
							<div class="rightline"></div>
							<div class="span4">
								<form:select path="purchase_date" style="width:95%;" id="e6">
									<option value="">预计购买的时间*</option>
									<option value="LESS_3_MONTHS" ${less}>小于3个月</option>
									<option value="3_6_MONTHS" ${three}>3到6个月</option>
									<option value="6_12_MONTHS" ${six}>6到12个月</option>
									<option value="1_2_YEARS" ${one}>1到2年</option>
									<option value="MORE_2_YEARS" ${more}>大于2年</option>
								</form:select>
								<!-- select id="e6" class="populate" style="width:95%"></select-->
							</div>
						</div>
						<div class="budget">
							<div class="leftline"></div>
							<div class="rightline"></div>
							<div class="span4">
								<form:select path="purchase_budget" style="width:95%;" id="e7">
									<option value="">预计购车预算*</option>
									<option value="&lt10WAN" ${LESS }><10万</option>
									<option value="10-20WAN" ${ONE }>10-20万</option>
									<option value="20-30WAN" ${TWO }>20-30万</option>
									<option value="30-50WAN" ${THREE }>30-50万</option>
									<option value="50-200WAN" ${FIVE }>50-200万</option>
									<option value="&gtWAN" ${MORE }>>200万</option>
								</form:select>
								<!-- select id="e7" class="populate" style="width:95%"></select -->
							</div>
						</div>
					</div>
					<div>
						<p>
						<!--  
						<form:checkbox path="productionInfo" value="" id="car_shijia2" class="nan" />--> 
						<input type="checkbox" id="car_shijia2" name="pdinfo" value="true"/> 
						<label for="car_shijia2" id="info">&nbsp;&nbsp;我愿意接收此品牌相关产品及品牌推广信息*</label> </p>
					</div>
					<div class="form-level pace1">
						<div class="phone">
							<div class="leftline"></div>
							<div class="rightline"></div>
							
							<div>
								<p>
									<span class="male">是否已有爱车</span>
									<form:radiobutton path="owncar_selected" id="yaiche" value="true" checked="true" class="nan" /> <label for="yaiche">&nbsp;是</label> 
									<form:radiobutton path="owncar_selected" id="naiche" value="false" class="nv" /><label for="naiche">&nbsp;否</label>
								</p>
							</div>

						</div>
					</div>
					<div>
						<p><input type="radio" value="car_shijia3" id="car_shijia3" name="car_shijia3" class="nan" /> <label for="car_shijia3" id="agreement">&nbsp;&nbsp;我同意接受并遵守版权声明及免责声明之规定。并希望接收所选品牌的<br/>&nbsp;&nbsp;推广信息。</label> </p>
					</div>
					<div class="clear"></div>
					<div class="submit-wrap"><input name="submit" type="submit" id="submitbutton" class="submit" value=""></div>
				</div>
			</form:form>
			
		</div>
	</div>
	
</body>
</html>