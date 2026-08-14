package com.example.demo.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


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
    private String formade_pagamento;
    private String statu;
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
    public String getFormade_pagamento(){
        return formade_pagamento;
    }
    public void setFormade_pagamento(String formade_pagamento){
        this.formade_pagamento = formade_pagamento;
    }
    public String getStatu(){
        return statu;
    }
    
    public void setStatu(String statu){
        this.statu = statu;
    }
}
