package myDao;

import java.math.BigDecimal;
import java.sql.Timestamp;

public class CustomersNoneSSO {

	BigDecimal cns_id;
	String appid;
	String contact_email;
	String contact_mobile;
	  
	String customer_name;
	String customer_birthday;
	String customer_occupation;
	String customer_education;
	String customer_gender;
	String customer_address;  
	
	String hobby;
	String address_province;
	String address_city;
	String purchase_brand;
	String purchase_model;
	String purchase_date;
	String purchase_budget;
	   
	String owncar_manufacturer;
	String owncar_age;
	String owncar_model;
	
	Boolean productionInfo;
	  
	Timestamp insert_timestamp;
	Timestamp update_timestamp;
	int matched;
	long mdm_id;
	String gc_id;
	
	String purchase_selected = null;
	String owncar_selected;
	String marketing_permission = null;
	String testdrive_permission = null;
	
	Timestamp pinConfirmedAt;
	String pinToken;
	
	String userAgent;
	String userIpAddress;

	public BigDecimal getCns_id() {
		return cns_id;
	}
	public void setCns_id(BigDecimal cns_id) {
		this.cns_id = cns_id;
	}
	public String getAppid() {
		return appid;
	}
	public void setAppid(String appid) {
		this.appid = appid;
	}
	public String getContact_email() {
		return contact_email;
	}
	public void setContact_email(String contact_email) {
		this.contact_email = contact_email;
	}
	public String getContact_mobile() {
		return contact_mobile;
	}
	public void setContact_mobile(String contact_mobile) {
		this.contact_mobile = contact_mobile;
	}
	public String getCustomer_name() {
		return customer_name;
	}
	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}
	public String getCustomer_birthday() {
		return customer_birthday;
	}
	public void setCustomer_birthday(String customer_birthday) {
		this.customer_birthday = customer_birthday;
	}
	public String getCustomer_occupation() {
		return customer_occupation;
	}
	public void setCustomer_occupation(String customer_occupation) {
		this.customer_occupation = customer_occupation;
	}
	public String getCustomer_education() {
		return customer_education;
	}
	public void setCustomer_education(String customer_education) {
		this.customer_education = customer_education;
	}
	public String getCustomer_gender() {
		return customer_gender;
	}
	public void setCustomer_gender(String customer_gender) {
		this.customer_gender = customer_gender;
	}
	public String getCustomer_address() {
		return customer_address;
	}
	public void setCustomer_address(String customer_address) {
		this.customer_address = customer_address;
	}
	public String getHobby() {
		return hobby;
	}
	public void setHobby(String hobby) {
		this.hobby = hobby;
	}
	public String getAddress_province() {
		return address_province;
	}
	public void setAddress_province(String address_province) {
		this.address_province = address_province;
	}
	public String getAddress_city() {
		return address_city;
	}
	public void setAddress_city(String address_city) {
		this.address_city = address_city;
	}
	public String getPurchase_brand() {
		return purchase_brand;
	}
	public void setPurchase_brand(String purchase_brand) {
		this.purchase_brand = purchase_brand;
	}
	public String getPurchase_model() {
		return purchase_model;
	}
	public void setPurchase_model(String purchase_model) {
		this.purchase_model = purchase_model;
	}
	public String getPurchase_date() {
		return purchase_date;
	}
	public void setPurchase_date(String purchase_date) {
		this.purchase_date = purchase_date;
	}
	public String getPurchase_budget() {
		return purchase_budget;
	}
	public void setPurchase_budget(String purchase_budget) {
		this.purchase_budget = purchase_budget;
	}
	public String getOwncar_manufacturer() {
		return owncar_manufacturer;
	}
	public void setOwncar_manufacturer(String owncar_manufacturer) {
		this.owncar_manufacturer = owncar_manufacturer;
	}
	public String getOwncar_age() {
		return owncar_age;
	}
	public void setOwncar_age(String owncar_age) {
		this.owncar_age = owncar_age;
	}
	public String getOwncar_model() {
		return owncar_model;
	}
	public void setOwncar_model(String owncar_model) {
		this.owncar_model = owncar_model;
	}
	public Boolean getProductionInfo() {
		return productionInfo;
	}
	public void setProductionInfo(Boolean productionInfo) {
		this.productionInfo = productionInfo;
	}
	public Timestamp getInsert_timestamp() {
		return insert_timestamp;
	}
	public void setInsert_timestamp(Timestamp insert_timestamp) {
		this.insert_timestamp = insert_timestamp;
	}
	public Timestamp getUpdate_timestamp() {
		return update_timestamp;
	}
	public void setUpdate_timestamp(Timestamp update_timestamp) {
		this.update_timestamp = update_timestamp;
	}
	public int getMatched() {
		return matched;
	}
	public void setMatched(int matched) {
		this.matched = matched;
	}
	
	public long getMdm_id() {
		return mdm_id;
	}
	public void setMdm_id(long mdm_id) {
		this.mdm_id = mdm_id;
	}
	
	public String getGc_id() {
		return gc_id;
	}
	public void setGc_id(String gc_id) {
		this.gc_id = gc_id;
	}
	public String getPurchase_selected() {
		return purchase_selected;
	}
	public void setPurchase_selected(String purchase_selected) {
		this.purchase_selected = purchase_selected;
	}
	public String getOwncar_selected() {
		return owncar_selected;
	}
	public void setOwncar_selected(String owncar_selected) {
		this.owncar_selected = owncar_selected;
	}
	public String getMarketing_permission() {
		return marketing_permission;
	}
	public void setMarketing_permission(String marketing_permission) {
		this.marketing_permission = marketing_permission;
	}
	public String getTestdrive_permission() {
		return testdrive_permission;
	}
	public void setTestdrive_permission(String testdrive_permission) {
		this.testdrive_permission = testdrive_permission;
	}
	public Timestamp getPinConfirmedAt() {
		return pinConfirmedAt;
	}
	public void setPinConfirmedAt(Timestamp pinConfirmedAt) {
		this.pinConfirmedAt = pinConfirmedAt;
	}
	public String getPinToken() {
		return pinToken;
	}
	public void setPinToken(String pinToken) {
		this.pinToken = pinToken;
	}
	public String getUserAgent() {
		return userAgent;
	}
	public void setUserAgent(String userAgent) {
		this.userAgent = userAgent;
	}
	public String getUserIpAddress() {
		return userIpAddress;
	}
	public void setUserIpAddress(String userIpAddress) {
		this.userIpAddress = userIpAddress;
	}
	
	private boolean owncar;
	private String age;
	private boolean testdrive;
	private boolean pdinfo;
	private String domain;
	
	public boolean getOwncar() {
		return owncar;
	}
	public void setOwncar(boolean owncar) {
		this.owncar = owncar;
	}
	public String getAge(){
		return age;
	}
	public void setAge(String age){
		this.age = age;
	}
	
	public boolean getTestdrive() {
		return testdrive;
	}
	public void setTestdrive(boolean testdrive) {
		this.testdrive = testdrive;
	}
	public boolean getPdinfo() {
		return pdinfo;
	}
	public void setPdinfo(boolean pdinfo) {
		this.pdinfo = pdinfo;
	}
	public String getDomain(){
		return domain;
	}
	public void setDomain(String domain){
		this.domain = domain;
	}
	
	public String toString() {
		return "";
	}
	
}
