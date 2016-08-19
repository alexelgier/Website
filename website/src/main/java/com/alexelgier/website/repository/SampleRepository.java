package com.alexelgier.website.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alexelgier.website.model.Sample;

public interface SampleRepository extends JpaRepository<Sample, Long> {

}
