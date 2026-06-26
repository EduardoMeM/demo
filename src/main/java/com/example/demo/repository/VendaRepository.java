package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Venda;
public interface VendaRepository extends JpaRepository<Venda, Integer> {
}