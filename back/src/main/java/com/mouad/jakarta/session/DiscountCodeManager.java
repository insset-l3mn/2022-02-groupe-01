package com.mouad.jakarta.session;

import com.mouad.jakarta.entities.DiscountCode;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 * Gère les codes de réduction.
 */
@Stateless
public class DiscountCodeManager {

    @PersistenceContext(unitName = "customerPU")
    private EntityManager em;

    public void persist(DiscountCode discountCode) {
        em.persist(discountCode);
    }

    public DiscountCode findById(String discountCode) {
        return em.find(DiscountCode.class, discountCode);
    }

    public List<DiscountCode> getAllDiscountCodes() {
        Query query = em.createNamedQuery("DiscountCode.findAll");
        return query.getResultList();
    }
}
