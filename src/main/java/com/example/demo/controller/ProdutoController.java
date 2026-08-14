package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Produto;
import com.example.demo.service.ProdutoService;
@CrossOrigin(origins = "http://127.0.0.1:5501")
@RestController
@RequestMapping("/produtos")

public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @PostMapping
    public Produto criarProduto(@RequestBody Produto produto) {
        return produtoService.salvarProduto(produto);
    }

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtoService.listarProdutos();
    }
    @GetMapping("/{id}")
    public Produto buscarProdutoPorId(@PathVariable Long id){
        System.out.println(id); // Log para verificar o ID recebido
        return produtoService.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletarProduto(@PathVariable Long id){
        produtoService.deletarProduto(id);
    }
    
    @PutMapping("/{id}")
    public Produto atualizarProduto(@PathVariable Long id, @RequestBody Produto produtoAtualizado){
        return produtoService.atualizarProduto(id, produtoAtualizado);
    }
    
    
}
