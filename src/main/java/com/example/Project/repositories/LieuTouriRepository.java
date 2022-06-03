package com.example.Project.repositories;

import com.example.Project.models.Hotel;
import com.example.Project.models.LieuTouri;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LieuTouriRepository extends JpaRepository<LieuTouri,Integer> {

}