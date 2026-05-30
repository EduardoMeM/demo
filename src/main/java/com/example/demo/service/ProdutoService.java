package com.example.demo.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Produto;
import com.example.demo.repository.ProdutoRepository;

@Service
public class ProdutoService{
    
    private final ProdutoRepository produtoRepository;
    // Construtor para injetar o repositório
    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    // Método para salvar um produto
    public Produto salvarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }
    // Método para listar todos os produtos
    public List<Produto> listarProdutos(){
        return produtoRepository.findAll();
    }
    // Método para buscar um produto por ID
    public Produto buscarPorId(Long id) {
        return produtoRepository.findById(id).orElse(null);
    }
    // Método para deletar um produto por ID
    public void deletarProduto(Long id) {
        produtoRepository.deleteById(id);
    }

    
}
