/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Gestor.Peliculas.services;

import com.Gestor.Peliculas.dto.CategoriaDto;
import java.util.List;

/**
 *
 * @author frank
 */
public interface ICategoriaService {
    
    List<CategoriaDto> traerCategorias();
     CategoriaDto traerCategoriaPorId(Long id);
    CategoriaDto crearCategorias(CategoriaDto categoria);
    CategoriaDto actualizarCategorias(Long id, CategoriaDto categoria);
    void eliminarCategoria(Long id);
}
