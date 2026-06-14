/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.Controller;

import com.Gestor.Peliculas.dto.PeliculaDto;
import com.Gestor.Peliculas.services.IPeliculaService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author frank
 */
@RestController
@RequestMapping("/api/peliculas")
@RequiredArgsConstructor
@CrossOrigin("*")
public class PeliculaController {
    
    private final IPeliculaService peliculaService;
    
    @GetMapping
    public List<PeliculaDto> listarPeliculas(){
        return peliculaService.traerPeliculas();
    }
    @GetMapping("/{id}")
public PeliculaDto obtenerPelicula(
        @PathVariable Long id) {

    return peliculaService.traerPeliculaPorId(id);
}

@GetMapping("/buscar")
public List<PeliculaDto> buscarPeliculas(
        @RequestParam String q) {

    return peliculaService.buscarPeliculas(q);
}

@GetMapping("/categoria/{id}")
public List<PeliculaDto> peliculasPorCategoria(
        @PathVariable Long id) {

    return peliculaService.peliculasPorCategoria(id);
}

@GetMapping("/favoritas")
public List<PeliculaDto> peliculasFavoritas() {

    return peliculaService.peliculasFavoritas();
}

    @PostMapping
    public PeliculaDto crearPelicula(@Valid @RequestBody PeliculaDto pelicula){
          return peliculaService.crearPelicula(pelicula);
    }
    
    @PutMapping("/{id}")
    public PeliculaDto actualizarPelicula(@PathVariable Long id, @RequestBody PeliculaDto pelicula){
        return peliculaService.actualizarPelicula(id, pelicula);
    }
    @PatchMapping("/{id}/favorita")
public PeliculaDto cambiarFavorita(
        @PathVariable Long id) {

    return peliculaService.cambiarFavorita(id);
}
    
    @DeleteMapping("/{id}")
   public void eliminarPelicula(
            @PathVariable Long id) {

        peliculaService.eliminarPelicula(id);
    }
}
