package com.example.demo.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "item_venda")

public class ItemVenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_item_venda;
    private int quantidade;
    private double preco_unitario;
    private double subtotal;
    @ManyToOne
    @JoinColumn(name = "id_produto")
    private Produto produto;
    @ManyToOne
    @JoinColumn(name = "id_venda")
    private Venda venda;
    public Long getId_item_venda() {
        return id_item_venda;
    }
    public void setId_item_venda(Long id_item_venda) {
        this.id_item_venda = id_item_venda;
    }
    public int getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
    public double getPreco_unitario() {
        return preco_unitario;
    }
    public void setPreco_unitario(double preco_unitario) {
        this.preco_unitario = preco_unitario;
    }
    public Produto getProduto() {
        return produto;
    }
    public void setProduto(Produto produto) {
        this.produto = produto;
    }
    public Venda getVenda() {
        return venda;
    }
    public void setVenda(Venda venda) {
        this.venda = venda;
    }
    public double getSubtotal(){
        return subtotal;
    }
    public void setSubtotal(double subtotal){
        this.subtotal = subtotal;
    }
}