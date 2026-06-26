package com.example.demo.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.*;


@Entity
@Table(name = "venda")
public class Venda {
    //Atrbutos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_venda;
    private int id_cliente; 
    private String data_venda;
    private double valor_total;
    //Getters e Setters
    public int getId_venda() {
        return id_venda;
    }
    public void setId_venda(int id_venda) {
        this.id_venda = id_venda;
    }
    public int getId_cliente() {
        return id_cliente;
    }
    public void setId_cliente(int id_cliente) {
        this.id_cliente = id_cliente;
    }
    public String getData_venda() {
        return data_venda;
    }
    public void setData_venda(String data_venda) {
        this.data_venda = data_venda;
    }
    public double getValor_total() {
        return valor_total;
    }
    public void setValor_total(double valor_total) {
        this.valor_total = valor_total;
    }
    
}
