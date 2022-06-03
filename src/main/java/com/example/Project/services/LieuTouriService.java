package com.example.Project.services;


import com.example.Project.models.LieuTouri;
import com.example.Project.repositories.LieuTouriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LieuTouriService {
    @Autowired
    private LieuTouriRepository touriRepository;
    public List<LieuTouri> getLieu() {
        return touriRepository.findAll();}

    public void deleteLieu(Integer id) {
        touriRepository.deleteById(id);

    }
    public LieuTouri saveLieu(LieuTouri lieu) {
        return touriRepository.save(lieu);
    }


}