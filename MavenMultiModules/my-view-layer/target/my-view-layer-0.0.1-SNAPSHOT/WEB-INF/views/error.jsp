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
	
	<link rel="stylesheet"  href="css/jquery.mobile.css" />

	<script src="scripts/jquery-1.7.1.min.js"></script>
	<script src="scripts/jquery.mobile.docs.js"></script>

	
</head>
<body>

	<div data-role="page" class="type-interior">

		<!-- header -->
		<div data-role="header" data-theme="f">
			<div class="header_wrap">
			<div class="top_left"></div>
			<div class="top_right"></div>
			</div>
		</div>
		<!-- /header -->

		<div data-role="content">
			<div class="content-primary">
				<!-- First Row --> 
				<div class="f_text">
					<p>${errorMessage }</p>
				</div>
				<c:if test="${link }">
					<div class="uiblockd"><a href="/ssso/scc/register?appId=${appId }&gc_id=${gc_id }" class="back"></a> </div>	
				</c:if>
			</div><!--/content-primary -->		

		</div><!-- /content -->

	
	</div><!-- /page -->

</body>
</html>
