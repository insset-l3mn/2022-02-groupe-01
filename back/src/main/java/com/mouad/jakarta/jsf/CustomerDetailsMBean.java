package com.mouad.jakarta.jsf;

import com.mouad.jakarta.entities.Customer;
import com.mouad.jakarta.entities.DiscountCode;
import com.mouad.jakarta.session.CustomerManager;
import com.mouad.jakarta.session.DiscountCodeManager;
import java.io.Serializable;
import java.util.List;
import javax.ejb.EJB;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.inject.Named;
import javax.faces.view.ViewScoped;

/**
 *
 * @author grin
 */
@Named(value = "customerDetailsMBean")
@ViewScoped
public class CustomerDetailsMBean implements Serializable {

    private int idCustomer;
    private Customer customer;

    @EJB
    private CustomerManager customerManager;
    @EJB
    private DiscountCodeManager discountCodeManager;

    public int getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(int idCustomer) {
        this.idCustomer = idCustomer;
    }

    /**
     * Renvoie les détails du client courant (celui dans l'attribut customer de
     * cette classe), qu'on appelle une propriété (property)
     */
    public Customer getDetails() {
        return customer;
    }

    /**
     * Action handler - met à jour la base de données en fonction du client
     * passé en paramètres.
     *
     * @return la prochaine page à afficher, celle qui affiche la liste des
     * clients.
     */
    public String update() {
        customer = customerManager.update(customer);
        return "CustomerList";
    }

    public void loadCustomer() {
        this.customer = customerManager.getCustomer(idCustomer);
    }

    /**
     * Retourne la liste de tous les DiscountCode.
     */
    public List<DiscountCode> getDiscountCodes() {
        return discountCodeManager.getAllDiscountCodes();
    }

    /**
     * getter pour la propriété discountCodeConverter.
     */
    public Converter<DiscountCode> getDiscountCodeConverter() {
        return new Converter<DiscountCode>() {
            /**
             * Convertit une String en DiscountCode.
             *
             * @param value valeur à convertir
             */
            @Override
            public DiscountCode getAsObject(FacesContext context, UIComponent component, String value) {
                return discountCodeManager.findById(value);
            }

            /**
             * Convertit un DiscountCode en String.
             *
             * @param value valeur à convertir
             */
            @Override
            public String getAsString(FacesContext context, UIComponent component, DiscountCode value) {
                return value.getDiscountCode();
            }
        };
    }
}
