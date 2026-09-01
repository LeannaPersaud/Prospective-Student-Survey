/*Author: Leanna Persaud
 * This program creates a Java class which represents a Survey that prospective students fill out
 */

package com.example.hw3_spring.hw3_spring.Entity;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="surveys")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="surveyID", nullable=false)
    private long id;

    @Column(name="firstName", nullable=false)
    private String firstName;

    @Column(name="lastName", nullable=false)
    private String lastName;

    @Column(name="street", nullable=false)
    private String street;

    @Column(name="city", nullable=false)
    private String city;

    @Column(name="_state", nullable=false)
    private String state;

    @Column(name="zip", nullable=false)
    private String zip;

    @Column(name="telephone", nullable=false)
    private String telephone;

    @Column(name="email", nullable=false)
    private String email;

    @Column(name="_date", nullable=false)
    private String date;

    @Column(name="liked")
    private String liked;

    @Column(name="interest")
    private String interest;

    @Column(name="_likelihood")
    private String likelihood;

    @Column(name="_comments", length=500)
    private String comments;

    public long getId(){
        return id;
    }

    public void setId(long id){
        this.id = id;
    }

    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }

    public String getStreet(){
        return street;
    }

    public void setStreet(String street){
        this.street = street;
    }

    public String getCity(){
        return city;
    }

    public void setCity(String city){
        this.city = city;
    }

    public String getState(){
        return state;
    }

    public void setState(String state){
        this.state = state;
    }

    public String getZip(){
        return zip;
    }

    public void setZip(String zip){
        this.zip = zip;
    }

    public String getTelephone(){
        return telephone;
    }

    public void setTelephone(String telephone){
        this.telephone = telephone;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getDate(){
        return date;
    }

    public void setDate(String date){
        this.date = date;
    }

    public String getLiked(){
        return liked;
    }

    public void setLiked(String liked){
        this.liked = liked;
    }

    public String getInterest(){
        return interest;
    }

    public void setInterest(String interest){
        this.interest = interest;
    }

    public String getLikelihood(){
        return likelihood;
    }

    public void setLikelihood(String likelihood){
        this.likelihood = likelihood;
    }

    public String getComments(){
        return comments;
    }

    public void setComments(String comments){
        this.comments = comments;
    }

    @Override
    public int hashCode(){
        return Objects.hash(id, firstName, lastName, date);
    }

    @Override
    public boolean equals(Object obj){
        if (getClass() != obj.getClass()){
            return false;
        }

        return this == obj;
    }
}

