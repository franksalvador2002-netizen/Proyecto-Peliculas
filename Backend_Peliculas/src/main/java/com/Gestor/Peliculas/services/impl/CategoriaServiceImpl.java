/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.services.impl;

import com.Gestor.Peliculas.dto.CategoriaDto;
import com.Gestor.Peliculas.mapper.Mapper;
import com.Gestor.Peliculas.models.Categoria;
import com.Gestor.Peliculas.services.ICategoriaService;
import exception.NotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.Gestor.Peliculas.repository.CategoriaRepository;

/**
 *
 * @author frank
 */
@Service
@RequiredArgsConstructor
public class CategoriaServiceImpl implements ICategoriaService {

    private final CategoriaRepository categoriaRepo;
    @Override
    public List<CategoriaDto> traerCategorias() {
         return categoriaRepo.findAll()
                .stream()
                .map(Mapper::toDTOCategoria)
                .toList();
    }
    
    @Override
public CategoriaDto traerCategoriaPorId(Long id) {

    Categoria categoria = categoriaRepo.findById(id)
            .orElseThrow(() ->
                    new NotFoundException(
                            "Categoria no encontrada"));

    return Mapper.toDTOCategoria(categoria);
}

    @Override
    public CategoriaDto crearCategorias(CategoriaDto categoriaDto) {
        Categoria categoria = Categoria.builder()
                .nombre(categoriaDto.getNombre())
                .descripcion(categoriaDto.getDescripcion())
                .build();

        return Mapper.toDTOCategoria(
                categoriaRepo.save(categoria));
    }

    @Override
    public CategoriaDto actualizarCategorias(Long id, CategoriaDto categoriaDto) {
        Categoria categoria = categoriaRepo.findById(id)
                .orElseThrow(() ->
                        new NotFoundException(
                                "Categoria no encontrada"));

        categoria.setNombre(categoriaDto.getNombre());
        categoria.setDescripcion(
                categoriaDto.getDescripcion());

        return Mapper.toDTOCategoria(
                categoriaRepo.save(categoria));
    }

    @Override
    public void eliminarCategoria(Long id) {
        if (!categoriaRepo.existsById(id)) {
            throw new NotFoundException(
                    "Categoria no encontrada");
        }

        categoriaRepo.deleteById(id);
    }
    
}
