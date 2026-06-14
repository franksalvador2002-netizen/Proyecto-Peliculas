/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.repository;

import com.Gestor.Peliculas.models.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author frank
 */
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
    
}
