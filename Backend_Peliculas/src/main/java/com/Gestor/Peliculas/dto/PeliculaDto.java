/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;

/**
 *
 * @author frank
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class PeliculaDto {
    
     private Long id;
    private String titulo;
    private String director;
    private Integer anio;
    private String sinopsis;
    private String urlPortada;
    
    
    @Min(value = 1, message = "El rating mínimo es 1.0")
    @Max(value = 5, message = "El rating máximo es 5.0")
    private Double rating;
    private Boolean esFavorita;
    private Long categoriaId;
    private String categoriaNombre;
    
}
