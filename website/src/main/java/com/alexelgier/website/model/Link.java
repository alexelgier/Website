package com.alexelgier.website.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Link {

    private Long id;
    private String name;
    private String href;

    public Link() {
        super();
    }

    public Link(String name, String href) {
        super();
        this.name = name;
        this.href = href;
    }

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHref() {
      return href;
    }

    public void setHref(String href) {
      this.href = href;
    }
}
