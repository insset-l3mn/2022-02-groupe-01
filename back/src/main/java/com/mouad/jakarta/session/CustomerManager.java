package com.mouad.jakarta.session;

import com.mouad.jakarta.entities.Customer;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author grin
 */
@Stateless
public class CustomerManager {

    @PersistenceContext(unitName = "customerPU")
    private EntityManager em;

    public List<Customer> getAllCustomers() {
        Query query = em.createNamedQuery("Customer.findAll");
        return query.getResultList();
    }

    public Customer update(Customer customer) {
        return em.merge(customer);
    }

    public void persist(Customer customer) {
        em.persist(customer);
    }

    public Customer getCustomer(int idCustomer) {
        return em.find(Customer.class, idCustomer);
    }
}
