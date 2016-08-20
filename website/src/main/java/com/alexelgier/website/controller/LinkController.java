package com.alexelgier.website.controller;

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.web.controller.RepositoryBasedRestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alexelgier.website.model.Link;
import com.alexelgier.website.repository.LinkRepository;

@Controller
@RequestMapping(value = "/api/link")
public class LinkController extends RepositoryBasedRestController<Link, Long, LinkRepository> {

    @Inject
    @Named("linkRepository")
    @Override
    public void setRepository(LinkRepository repository) {
        this.repository = repository;
    }
}
