package com.alexelgier.website.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alexelgier.website.model.Link;

public interface LinkRepository extends JpaRepository<Link, Long> {

}
