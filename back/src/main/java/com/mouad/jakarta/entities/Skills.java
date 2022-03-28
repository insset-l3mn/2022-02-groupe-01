/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mouad.jakarta.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 *
 * @author mdcreative
 */
@Entity
@Table(name = "skills")
@NamedQueries({
    @NamedQuery(name = "Skills.findAll", query = "SELECT s FROM Skills s"),
    @NamedQuery(name = "Skills.findById", query = "SELECT s FROM Skills s WHERE s.id = :id"),
    @NamedQuery(name = "Skills.findByStudent", query = "SELECT s FROM Skills s WHERE s.student = :student"),
    @NamedQuery(name = "Skills.findByDomain", query = "SELECT s FROM Skills s WHERE s.domain = :domain"),
    @NamedQuery(name = "Skills.findByPercentage", query = "SELECT s FROM Skills s WHERE s.percentage = :percentage")})
public class Skills implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Column(name = "student")
    private int student;
    @Basic(optional = false)
    @NotNull
    @Column(name = "domain")
    private int domain;
    @Basic(optional = false)
    @NotNull
    @Column(name = "percentage")
    private int percentage;

    public Skills() {
    }

    public Skills(Integer id) {
        this.id = id;
    }

    public Skills(Integer id, int student, int domain, int percentage) {
        this.id = id;
        this.student = student;
        this.domain = domain;
        this.percentage = percentage;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getStudent() {
        return student;
    }

    public void setStudent(int student) {
        this.student = student;
    }

    public int getDomain() {
        return domain;
    }

    public void setDomain(int domain) {
        this.domain = domain;
    }

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Skills)) {
            return false;
        }
        Skills other = (Skills) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.mouad.jakarta.entities.Skills[ id=" + id + " ]";
    }
    
}
