package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.ItemVenda;
public interface ItemVendaRepository extends JpaRepository<ItemVenda, Long> {
}