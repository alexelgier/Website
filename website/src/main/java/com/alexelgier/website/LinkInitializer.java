package com.alexelgier.website;

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.common.util.PostInitialize;

import com.alexelgier.website.model.Link;
import com.alexelgier.website.repository.LinkRepository;

@Named("linkInitializer")
public class LinkInitializer {

    @Inject
    @Named("linkRepository")
    private LinkRepository linkRepository;

    @PostInitialize
    public void init() {
        linkRepository.save(new Link("Google", "www.google.com"));
        linkRepository.save(new Link("testSample2", "www.tuvieja.com"));
        linkRepository.save(new Link("testSample3", "alexelgier.com"));
    }
}
