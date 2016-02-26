package myDao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Example;

public class CustomersNoneSsoDao {

	private Session session;
	
	SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sessionFactory){
		this.sessionFactory = sessionFactory;
	}

	public void setSession(Session s) {
		this.session = s;
	}

	protected Session getSession() {
		session = sessionFactory.getCurrentSession();
		if (session == null)
			throw new IllegalStateException(
					"Session has not been set on DAO before usage");
//		return session;
		return sessionFactory.getCurrentSession();
	}

	public CustomersNoneSSO findById(Long id) {
		CustomersNoneSSO entity;
		entity = (CustomersNoneSSO) getSession().load(CustomersNoneSSO.class, id);
		return entity;
	}

	public List<CustomersNoneSSO> findAll() {
		return findByCriteria();
	}

	@SuppressWarnings("unchecked")
	public List<CustomersNoneSSO> findByExample(CustomersNoneSSO exampleInstance, String[] excludeProperty) {
		Criteria crit = getSession().createCriteria(CustomersNoneSSO.class);
		Example example = Example.create(exampleInstance);
		for (String exclude : excludeProperty) {
			example.excludeProperty(exclude);
		}
		crit.add(example);
		return crit.list();
	}

	public CustomersNoneSSO makePersistent(CustomersNoneSSO entity) {
		getSession().saveOrUpdate(entity);
		return entity;
	}

	public void makeTransient(CustomersNoneSSO entity) {
		getSession().delete(entity);
	}

	public void flush() {
		getSession().flush();
	}

	public void clear() {
		getSession().clear();
	}

	/**
	 * Use this inside subclasses as a convenience method.
	 */
	@SuppressWarnings("unchecked")
	public List<CustomersNoneSSO> findByCriteria(Criterion... criterion) {
		Criteria crit = getSession().createCriteria(CustomersNoneSSO.class);
		for (Criterion c : criterion) {
			crit.add(c);
		}
		return crit.list();
	}

}
