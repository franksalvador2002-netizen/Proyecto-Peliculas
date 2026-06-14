/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.Controller;

import com.Gestor.Peliculas.dto.PeliculaDto;
import com.Gestor.Peliculas.dto.ReporteCategoriaDto;
import com.Gestor.Peliculas.services.IReporteService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reportes")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ReporteController {

    private final IReporteService reporteService;

    @GetMapping("/peliculas-por-categoria")
    public List<ReporteCategoriaDto> peliculasPorCategoria() {

        return reporteService.peliculasPorCategoria();
    }

    @GetMapping("/top-rated")
    public List<PeliculaDto> topRated(
            @RequestParam(defaultValue = "5") int size) {

        return reporteService.topRated(size);
    }

    @GetMapping("/promedio-rating")
    public Double promedioRating() {

        return reporteService.promedioRating();
    }
}
