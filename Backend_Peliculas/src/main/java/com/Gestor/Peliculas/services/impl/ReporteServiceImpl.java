/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.services.impl;

import com.Gestor.Peliculas.dto.PeliculaDto;
import com.Gestor.Peliculas.dto.ReporteCategoriaDto;
import com.Gestor.Peliculas.mapper.Mapper;
import com.Gestor.Peliculas.repository.PeliculaRepository;
import com.Gestor.Peliculas.services.IReporteService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReporteServiceImpl implements IReporteService {

    private final PeliculaRepository peliculaRepo;

    @Override
    public List<ReporteCategoriaDto> peliculasPorCategoria() {

        return peliculaRepo.peliculasPorCategoria()
                .stream()
                .map(r -> new ReporteCategoriaDto(
                        (String) r[0],
                        (Long) r[1]))
                .toList();
    }

    @Override
    public List<PeliculaDto> topRated(int size) {

        return peliculaRepo
                .findAllByOrderByRatingDesc(
                        PageRequest.of(0, size))
                .stream()
                .map(Mapper::toDTOPelicula)
                .toList();
    }

    @Override
    public Double promedioRating() {

        return peliculaRepo.promedioRating();
    }
}
