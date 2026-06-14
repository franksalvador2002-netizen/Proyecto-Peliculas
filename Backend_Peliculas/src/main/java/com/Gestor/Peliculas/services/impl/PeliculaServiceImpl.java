/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.services.impl;

import com.Gestor.Peliculas.dto.PeliculaDto;
import com.Gestor.Peliculas.mapper.Mapper;
import com.Gestor.Peliculas.models.Categoria;
import com.Gestor.Peliculas.models.Peliculas;
import com.Gestor.Peliculas.services.IPeliculaService;
import exception.NotFoundException;
import java.math.BigDecimal;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.Gestor.Peliculas.repository.CategoriaRepository;
import com.Gestor.Peliculas.repository.PeliculaRepository;

/**
 *
 * @author frank
 */
@Service
@RequiredArgsConstructor
public class PeliculaServiceImpl implements IPeliculaService{
     private final PeliculaRepository peliculaRepo;
    private final CategoriaRepository categoriaRepo;
    @Override
    public List<PeliculaDto> traerPeliculas() {
         return peliculaRepo.findAll()
                .stream()
                .map(Mapper::toDTOPelicula)
                .toList();
    }

    @Override
    public PeliculaDto crearPelicula(PeliculaDto peliculaDto) {
         Categoria categoria = categoriaRepo.findById(
                peliculaDto.getCategoriaId())
                .orElseThrow(() ->
                        new NotFoundException(
                                "Categoria no encontrada"));

        Peliculas  pelicula = Peliculas.builder()
                 .titulo(peliculaDto.getTitulo())
                 .director(peliculaDto.getDirector())
                 .anio(peliculaDto.getAnio())
                 .sinopsis(peliculaDto.getSinopsis())
                 .urlPortada(peliculaDto.getUrlPortada())
                 .rating(
                         BigDecimal.valueOf(
                                 peliculaDto.getRating()))
                 .esFavorita(false)
                 .categoria(categoria)
                 .build();

        return Mapper.toDTOPelicula(
                peliculaRepo.save(pelicula));
    }

    @Override
    public PeliculaDto actualizarPelicula(Long id, PeliculaDto peliculaDto) {
         Peliculas pelicula = peliculaRepo.findById(id)
                .orElseThrow(() ->
                        new NotFoundException(
                                "Pelicula no encontrada"));

        Categoria categoria = categoriaRepo.findById(
                peliculaDto.getCategoriaId())
                .orElseThrow(() ->
                        new NotFoundException(
                                "Categoria no encontrada"));

        pelicula.setTitulo(peliculaDto.getTitulo());
        pelicula.setDirector(peliculaDto.getDirector());
        pelicula.setAnio(peliculaDto.getAnio());
        pelicula.setSinopsis(peliculaDto.getSinopsis());
        pelicula.setUrlPortada(
                peliculaDto.getUrlPortada());

        pelicula.setRating(
                BigDecimal.valueOf(
                        peliculaDto.getRating()));

        pelicula.setCategoria(categoria);

        return Mapper.toDTOPelicula(
                peliculaRepo.save(pelicula));
    }

    @Override
    public void eliminarPelicula(Long id) {
        if (!peliculaRepo.existsById(id)) {
            throw new NotFoundException(
                    "Pelicula no encontrada");
        }

        peliculaRepo.deleteById(id);
    }

    @Override
    public PeliculaDto traerPeliculaPorId(Long id) {
        Peliculas pelicula = peliculaRepo.findById(id)
            .orElseThrow(() ->
                    new NotFoundException("Pelicula no encontrada"));

    return Mapper.toDTOPelicula(pelicula);
    }

    @Override
    public List<PeliculaDto> buscarPeliculas(String q) {
         return peliculaRepo
            .findByTituloContainingIgnoreCaseOrDirectorContainingIgnoreCase(q, q)
            .stream()
            .map(Mapper::toDTOPelicula)
            .toList();
    }

    @Override
    public List<PeliculaDto> peliculasPorCategoria(Long categoriaId) {
         return peliculaRepo.findByCategoriaId(categoriaId)
            .stream()
            .map(Mapper::toDTOPelicula)
            .toList();
    }

    @Override
    public List<PeliculaDto> peliculasFavoritas() {
        return peliculaRepo.findByEsFavoritaTrue()
            .stream()
            .map(Mapper::toDTOPelicula)
            .toList();
    }

    @Override
    public PeliculaDto cambiarFavorita(Long id) {
        Peliculas pelicula = peliculaRepo.findById(id)
            .orElseThrow(() ->
                    new NotFoundException("Pelicula no encontrada"));

    pelicula.setEsFavorita(!pelicula.getEsFavorita());

    return Mapper.toDTOPelicula(
            peliculaRepo.save(pelicula)
    );
    }
}
    
