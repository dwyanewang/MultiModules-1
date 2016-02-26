package myService;

import java.sql.Timestamp;
import java.util.Date;

import myDao.CustomersNoneSSO;
import myDao.CustomersNoneSsoDao;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RegisterService {
	
	private static Logger logger = Logger.getLogger(RegisterService.class);
	
	@Autowired
	CustomersNoneSsoDao cnsDao;

	@Transactional("dcrm")
	public int getRegisterService(String appId, String gc_id){
		
		logger.debug("The input parameters: appId = " + appId + ", gc_id = " + gc_id);

		return 1;
	}
	
	@Transactional("dcrm")
	public boolean postRegisterService(CustomersNoneSSO cns){
		
		Date d = new Date();
		Timestamp t = new Timestamp(d.getTime());
		/**
		 * If gc_id in database exists
		 */
		logger.info("new user without gc_id");
		cns.setAppid("f651244294201c4fc583df69e46cd8ca");
		cns.setInsert_timestamp(t);
		cns.setUpdate_timestamp(t);
		
		//mandatory fields
		// name
		try {
		String name = cns.getCustomer_name();
		if ( name != null ) {
			if(name.length() > 20) {
				name = name.substring(0,20);
			}
		}
		cns.setCustomer_name(name);
		} catch (Exception e) {logger.error(e);}
		
		cns.setOwncar_selected("1");
		
		
		//optional fields
		
		cns.setPurchase_selected("1");
		
		if(cns.getPurchase_budget()!=null)
			cns.setPurchase_budget(cns.getPurchase_budget().replace("&lt", "<").replace("&gt", ">"));
		
		cns.setCustomer_birthday("1990");
		
		
		cns.setMarketing_permission("0");
		
		try {
		if(!(cns.getOwncar_selected()!=null && cns.getOwncar_selected().equals("1") 
				&& cns.getOwncar_model()!=null && !cns.getOwncar_model().equals("已有爱车车型") && !cns.getOwncar_model().trim().equals("")))
			cns.setOwncar_model(null);
		} catch (Exception e) {logger.error(e);}
		
		try {
			if(cns.getCustomer_address()==null || cns.getCustomer_address().equals("地址"))
				cns.setCustomer_address(null);
		} catch (Exception e) {logger.error(e);}
		
		try {
		//Validation database enum values
		if(cns.getCustomer_name()!=null && cns.getCustomer_name().length()>100)
			cns.setCustomer_name(cns.getCustomer_name().substring(0,100));
		if(cns.getCustomer_address()!=null && cns.getCustomer_address().length()>255)
			cns.setCustomer_address(cns.getCustomer_address().substring(0,255));
		if(cns.getOwncar_model()!=null && cns.getOwncar_model().length()>50)
			cns.setOwncar_model(cns.getOwncar_model().substring(0,50));
		} catch (Exception e) {logger.error(e);}
		
		try {
			CustomersNoneSSO res = cnsDao.makePersistent(cns);
			logger.info("Instance of CustomerNoneSSO saved with cns_id = " + res.getCns_id());
		} catch (Exception e) {logger.error(e);}
		
		return true;
	}
	
}
