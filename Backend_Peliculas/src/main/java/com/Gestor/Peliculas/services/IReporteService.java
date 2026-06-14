/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.services;

import com.Gestor.Peliculas.dto.PeliculaDto;
import com.Gestor.Peliculas.dto.ReporteCategoriaDto;
import java.util.List;

/**
 *
 * @author frank
 */
public interface IReporteService {
    
    List<ReporteCategoriaDto> peliculasPorCategoria();

    List<PeliculaDto> topRated(int size);

    Double promedioRating();
}

