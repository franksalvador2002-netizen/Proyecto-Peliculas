/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Gestor.Peliculas.Controller;

import com.Gestor.Peliculas.dto.CategoriaDto;
import com.Gestor.Peliculas.services.ICategoriaService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author frank
 */
@RestController
@RequestMapping("/api/categorias")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CategoriaController {
    private final ICategoriaService categoriaService;
    
    @GetMapping
    public List<CategoriaDto> listarCategorias(){
        return categoriaService.traerCategorias();
    }
    
    @GetMapping("/{id}")
    public CategoriaDto obtenerCategoria(
            @PathVariable Long id) {

        return categoriaService.traerCategoriaPorId(id);
    }
    @PostMapping
    public CategoriaDto crearCategoria( @RequestBody CategoriaDto categoria){
         return categoriaService.crearCategorias(categoria);
    }

    
    @PutMapping("/{id}")
    public CategoriaDto actualizarCategoria(@PathVariable Long id, @RequestBody CategoriaDto categoria){
        return categoriaService.actualizarCategorias(id, categoria);
    }
    
    @DeleteMapping("/{id}")
    public void eliminarCategoria(
            @PathVariable Long id) {

        categoriaService.eliminarCategoria(id);
    }
    
}
