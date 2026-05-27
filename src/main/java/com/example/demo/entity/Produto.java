package com.example.demo.entity;
import java.math.BigDecimal;
import jakarta.persistence.*;

@Entity
@Table(name = "produto")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //Atributos
    private Long id_produto;
    private String nome_produto;
    private BigDecimal preco;
    private Integer quantidade_estoque;
    private String descricao;
    
    //Metodos Getters e Setters
    public Long getId_produto() {
        return id_produto;
    }
    public void setId_produto(Long id_produto) {
        this.id_produto = id_produto;
    }
    public String getNome_produto() {
        return nome_produto;
    }
    public void setNome_produto(String nome_produto) {
        this.nome_produto = nome_produto;
    }
    public BigDecimal getPreco() {
        return preco;
    }
    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }
    public Integer getQuantidade_estoque() {
        return quantidade_estoque;
    }
    public void setQuantidade_estoque(Integer quantidade_estoque) {
        this.quantidade_estoque = quantidade_estoque;
    }
    public String getDescricao() {
        return descricao;
    }   
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}