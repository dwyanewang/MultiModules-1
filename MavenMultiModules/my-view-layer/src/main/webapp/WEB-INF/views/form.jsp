<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html class="ui-mobile-rendering">
	<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>注册信息表</title>
	
	<link rel="stylesheet"  href="css/jquery.mobile.css" type="text/css"/>
	<script type="text/javascript" src="scripts/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="scripts/jquery.mobile.docs.js"></script>
	<script type="text/javascript" src="scripts/jquery.validate.js"></script> 
	<script type="text/javascript" src="scripts/scc.js"></script>
	
	<script>
		window.onload = function () {

			initProvinceCity('${prov}', '${city}');
			initCarBrandAndModel('${brand}', '${model}');
			
			var occupation = "${occupation}";			
			var occ=document.getElementById('customer_occupation');
			for(var i=0;i<occ.length;i++){
	        	if(occ[i].value==occupation)
					occ[i].setAttribute("selected", "selected");
	    	}		
			$('#purchase_brand').selectmenu('refresh',true);
			$('#purchase_model').selectmenu('refresh',true);			
			$('#address_province').selectmenu('refresh', true);
			$('#address_city').selectmenu('refresh',true);
			$('#customer_occupation').selectmenu('refresh',true);

			if('false'=='${owncar_selected}'){
		    	$('#owncar_model').textinput('disable');
		    	$("input[name='owncar_model']").css("color","grey");
			}

		}
	</script>
	
</head>
<body>

	<div data-role="page" class="type-interior">

		<div class="header_wrap">
			<div class="top_left"></div>
			<div class="top_right"></div>
		</div>
		<!-- header -->

		<div data-role="content">
			<div class="content-primary">
			
				<form:form id="registerForm" accept-charset="UTF-8" action="/scc/register" modelAttribute="formbean" method="post"  data-ajax="false" >
				
					<!-- First Row --> 
				<div class="first_row_wrap">
					<div class="xingming">
						<div data-role="fieldcontain">
						<form:input path="customer_name" class="blueline" data-mini="true" />
						<div class="leftline"></div>
						<div class="rightline"></div>
						</div>
					</div>
					
					<div class="nianling">
						<div data-role="fieldcontain">
							<form:input path="age" class="blueline" data-mini="true"/>
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
					</div>

					<div class="xingbie">
						<div data-role="fieldcontain">
							<fieldset data-role="controlgroup" data-mini="true">
								<legend>性别*</legend>
									<!-- input type="radio" name="customer_gender" id="male" value="M" class="nan" / -->
									<form:radiobutton path="customer_gender" id="male" value="M" class="nan" />
									<label for="male">男</label>
									<!-- input type="radio" name="customer_gender" id="female" value="F" class="nv"  / -->
									<form:radiobutton path="customer_gender" id="female" value="F" class="nv" />
									<label for="female">女</label>			
							</fieldset>
						</div>	
						<div class="leftline"></div>
						<div class="rightline"></div>
					</div>
				</div>
					<div class="clear"></div>
				
					<!-- Second Row --> 
					<div class="form-level">
						<div data-role="fieldcontain" class="phone">
							<form:input path="contact_mobile" class="blueline" data-mini="true" />
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
					</div>
					
					<div class="form-level">
						<div data-role="fieldcontain" class="mail">
							<form:input path="contact_email" class="blueline" data-mini="true" />
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
					</div>
				
					<div class="clear"></div>
				
					<div data-role="fieldcontain" class="form-level">
						<div class="province" id="prov">
							<form:select path="address_province" style="width:95%;" onchange="getCity(this.value, 'address_city')" 
							data-mini="true"  data-placeholder="true">
								<option >所在省份*</option>
							</form:select>
						</div>
						<div class="leftline"></div>
						<div class="rightline"></div>
					</div>
				
					<div data-role="fieldcontain" class="form-level">
						<div class="city" id="city">
							<form:select path="address_city" style="width:95%;" onchange="changeColor('city', 'black')" data-mini="true">
								<option value="">所在城市*</option>
							</form:select>
						</div>
						<div class="leftline"></div>
						<div class="rightline"></div>
					</div>
				
					<div class="clear"></div>
				
					<!-- Third Row --> 
					<div class="form-level">
						<div data-role="fieldcontain" class="mail">
							<form:input path="customer_address" class="blueline" data-mini="true"/>
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
					</div>
					
					<div data-role="fieldcontain" class="form-level">
						<div class="phone">
							<form:select path="customer_occupation" style="width:95%;" data-mini="true">
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
								<option value="SOLDIER">军人</option>
								<option value="FREELANCE">自由职业者</option>
								<option value="STUDENT">学生</option>
								<option value="HOUSEWIFE">家庭主妇</option>
								<option value="RETIREMENT">退休</option>
								<option value="OTHER">其他</option>
							</form:select>
						</div>
						<div class="leftline"></div>
						<div class="rightline"></div>
					</div>
					
					<div class="clear"></div>

					<!-- Forth Row --> 
					<div data-role="fieldcontain" class="form-level">
						<div class="mail" id="pb">
							<form:select path="purchase_brand" onchange="ChangeModel(this.value, 'purchase_model')" style="width:95%;" data-mini="true">
								<option value="">喜爱品牌*</option>
							</form:select>
						</div>
						<div class="leftline"></div>
						<div class="rightline"></div>
					</div>
				
					<div data-role="fieldcontain" class="form-level">
						<div class="type" id="pm">
							<form:select path="purchase_model" style="width:95%;" onchange="changeColor('pm', 'black')" data-mini="true">
								<option value="">预计购买车型*</option>
							</form:select>
						</div>
						<div class="leftline"></div>
						<div class="rightline"></div>
					</div>
				
					<div class="clear"></div>
					
					<div data-role="fieldcontain" class="form-level">
						<div class="time" id="pd">
							<form:select path="purchase_date" style="width:95%;" onchange="changeColor('pd', 'black')"  data-mini="true">
								<option value="">预计购买的时间*</option>
								<option value="LESS_3_MONTHS" ${less}>小于3个月</option>
								<option value="3_6_MONTHS" ${three}>3到6个月</option>
								<option value="6_12_MONTHS" ${six}>6到12个月</option>
								<option value="1_2_YEARS" ${one}>1到2年</option>
								<option value="MORE_2_YEARS" ${more}>大于2年</option>
							</form:select>
						</div>
						<div class="leftline"></div>
						<div class="rightline"></div>
					</div>
					
					<div data-role="fieldcontain" class="form-level">
						<div class="budget">
							<form:select path="purchase_budget" style="width:95%;" data-mini="true">
								<option value="">预计购车预算</option>
								<option value="&lt10WAN" ${LESS }>&lt;10万</option>
								<option value="10-20WAN" ${ONE }>10-20万</option>
								<option value="20-30WAN" ${TWO }>20-30万</option>
								<option value="30-50WAN" ${THREE }>30-50万</option>
								<option value="50-200WAN" ${FIVE }>50-200万</option>
								<option value="&gtWAN" ${MORE }>&gt;200万</option>
							</form:select>
						</div>
						<div class="leftline"></div>
						<div class="rightline"></div>
					</div>

					<!-- Sivth Row --> 
					<div class="xingyaiche">
						<div data-role="fieldcontain">
							<fieldset data-role="controlgroup" data-mini="true">
								<legend>是否已有爱车</legend>
									<form:radiobutton path="owncar_selected" id="yaiche" class="nan" value="true"/>
									<label for="yaiche">是</label>
									<form:radiobutton path="owncar_selected" id="naiche" class="nv" value="false"/>
									<label for="naiche">否</label>	
							</fieldset>
						</div>	
						<div class="leftline"></div>
						<div class="rightline"></div>
					</div>
					
					<div class="xingcar">
						<div data-role="fieldcontain" >
							<form:input path="owncar_model" id="owncar_model" class="blueline" data-mini="true"/>
							<div class="leftline"></div>
							<div class="rightline"></div>
						</div>
					</div>
					
					<!-- Sixth Row --> 
					<div data-role="fieldcontain" class="ui-checkbox">
						<fieldset data-role="controlgroup" data-mini="true">
							<form:checkbox path="testdrive" id="purchase_selected" class="custom" />
							<label for="purchase_selected" class="ui-checkbox" id="td">对此品牌车型试驾感兴趣，并愿意接受经销商联系*</label>
						</fieldset>
					</div>
					
					<!-- Seventh Row --> 
					<div data-role="fieldcontain" class="ui-checkbox">
						<fieldset data-role="controlgroup" data-mini="true">
							<form:checkbox path="pdinfo" id="car_shijia2" class="custom" />
							<label for="car_shijia2" class="ui-checkbox" id="info">我愿意接收此品牌相关产品及品牌推广信息*</label>
						</fieldset>
					</div>
					<input type="hidden" name="gc_id" value="${gc_id }">
					<div class="ui-body ui-body-b">
						<fieldset class="ui-grid-a">
								<div class="ui-block-b"><input type="submit" data-theme="a" data-mini="true" value=" "></div>
						</fieldset>
					</div>
				
				
				</form:form>
			</div><!--/content-primary -->		
		</div><!-- /content -->
	</div><!-- /page -->

</body>
</html>
