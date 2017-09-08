package com.example.AngularProject;

import javax.persistence.*;

@Entity
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   
    public Long id;
  
    public String name;
  
    public String email;
   
    public String gender;
public void setId(Long id)
{
    this.id=id;
}
public Long getId()
{
    return id;
}
public void setName(String name)
{
    this.name=name;
}
public String getName()
{
    return name;
}
public void setEmail(String email)
{
    this.email=email;
}
public String getEmail()
{
    return email;
}
public void  setGender(String gender)
{
    this.gender=gender;
}
public String getGender()
{
    return gender;
}
}