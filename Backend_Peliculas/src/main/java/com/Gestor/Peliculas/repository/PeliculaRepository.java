/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Gestor.Peliculas.repository;

import com.Gestor.Peliculas.models.Peliculas;
import org.springframework.data.domain.Pageable;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author frank
 */
public interface PeliculaRepository extends JpaRepository<Peliculas, Long>{
    
    List<Peliculas> findByCategoriaId(Long categoriaId);
    
    List<Peliculas> findByEsFavoritaTrue();
    
     List<Peliculas> findByTituloContainingIgnoreCaseOrDirectorContainingIgnoreCase(
            String titulo,
            String director
    );
     
     @Query("""
       SELECT p.categoria.nombre, COUNT(p)
       FROM Peliculas p
       GROUP BY p.categoria.nombre
       """)
List<Object[]> peliculasPorCategoria();

List<Peliculas> findAllByOrderByRatingDesc(Pageable pageable);

@Query("""
       SELECT AVG(p.rating)
       FROM Peliculas p
       """)
Double promedioRating();
}
