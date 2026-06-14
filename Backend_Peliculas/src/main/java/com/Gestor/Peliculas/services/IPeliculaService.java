/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Gestor.Peliculas.services;

import com.Gestor.Peliculas.dto.PeliculaDto;

import java.util.List;

/**
 *
 * @author frank
 */
public interface IPeliculaService {
    
     List<PeliculaDto> traerPeliculas();

    PeliculaDto traerPeliculaPorId(Long id);

    List<PeliculaDto> buscarPeliculas(String q);

    List<PeliculaDto> peliculasPorCategoria(Long categoriaId);

    List<PeliculaDto> peliculasFavoritas();

    PeliculaDto cambiarFavorita(Long id);

    PeliculaDto crearPelicula(PeliculaDto pelicula);

    PeliculaDto actualizarPelicula(Long id, PeliculaDto pelicula);

    void eliminarPelicula(Long id);
}
