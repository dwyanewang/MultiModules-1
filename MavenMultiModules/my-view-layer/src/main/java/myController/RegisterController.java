package myController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import myDao.CustomersNoneSSO;
import myService.RegisterService;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RegisterController{
	
	private static Logger logger = Logger.getLogger(RegisterController.class);

	@Autowired
	RegisterService registerService;
	
	@RequestMapping(value="/register", method=RequestMethod.GET)
	public String registerGet(@RequestParam(required=false) String appId,
									@RequestParam(required=false) String gc_id, 
									@RequestHeader("User-Agent") String userAgent,
									Model model, HttpServletRequest request, HttpSession session){
		CustomersNoneSSO fb = new CustomersNoneSSO();
		fb.setGc_id(gc_id);
		fb.setCustomer_name("����*");
		fb.setAge("����");
		fb.setContact_mobile("�ֻ�����*");
		fb.setContact_email("��������*");
		fb.setCustomer_address("��ַ");
		fb.setCustomer_gender("M");
		fb.setOwncar_selected("true");
		fb.setOwncar_model("���а�������");
		model.addAttribute("appId", appId);
		model.addAttribute("gc_id", gc_id);
		model.addAttribute("formbean", fb);
		return "form";
	}
	
	@RequestMapping(value="/register", method=RequestMethod.POST)
	public String registerPost( @ModelAttribute("formbean") CustomersNoneSSO formbean, @RequestHeader("User-Agent") String userAgent, 
			BindingResult result , Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response
			) {
		
		if ( userAgent != null) {
			if(userAgent.length() > 200)
				userAgent = userAgent.substring(0,200);
			formbean.setUserAgent(userAgent);
		}
				
		String ip_address = request.getRemoteAddr();
		if ( ip_address != null ) {
			if(ip_address.length() > 40)
				ip_address = ip_address.substring(0,40);
		
			formbean.setUserIpAddress(ip_address);
		}
		
		formbean.setDomain(request.getServerName());
		
		if(request.getParameter("testdrive")==null)
			formbean.setTestdrive(false);
		else
			formbean.setTestdrive(true);
		
		if(request.getParameter("pdinfo")==null)
			formbean.setPdinfo(false);
		else
			formbean.setPdinfo(true);
		
		if(registerService.postRegisterService(formbean)){
			logger.debug("The Registration was successful");
			model.addAttribute("text", "�ύ�ɹ�����л����֧�֣�");
			model.addAttribute("link", "true");
			model.addAttribute("contextPath", request.getContextPath());
			return "success";
		}
		else{
			logger.debug("The Registeration was no success. (Probably there was an internal error)");
			model.addAttribute("errorMessage", "�ύʧ�ܣ�����������д��"); 
			return "error";
		}
	}
	
}
