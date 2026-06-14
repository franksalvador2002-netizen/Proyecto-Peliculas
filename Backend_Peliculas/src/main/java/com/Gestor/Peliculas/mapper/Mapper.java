/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.mapper;

import com.Gestor.Peliculas.dto.CategoriaDto;
import com.Gestor.Peliculas.dto.PeliculaDto;
import com.Gestor.Peliculas.models.Categoria;
import com.Gestor.Peliculas.models.Peliculas;

/**
 *
 * @author frank
 */
public class Mapper {
    
    public static PeliculaDto toDTOPelicula(Peliculas pelicula){
        if(pelicula == null){
            return null;
        }
         return PeliculaDto.builder()
            .id(pelicula.getId())
            .titulo(pelicula.getTitulo())
            .director(pelicula.getDirector())
            .anio(pelicula.getAnio())
            .sinopsis(pelicula.getSinopsis())
            .urlPortada(pelicula.getUrlPortada())
            .rating(pelicula.getRating().doubleValue())
            .esFavorita(pelicula.getEsFavorita())
            .categoriaId(pelicula.getCategoria().getId())
            .categoriaNombre(pelicula.getCategoria().getNombre())
            .build();
    }
    public static CategoriaDto toDTOCategoria(Categoria categoria){

    if(categoria == null){
        return null;
    }

    return CategoriaDto.builder()
            .id(categoria.getId())
            .nombre(categoria.getNombre())
            .descripcion(categoria.getDescripcion())
            .build();
}
}
