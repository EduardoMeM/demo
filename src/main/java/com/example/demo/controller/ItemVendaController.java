package com.example.demo.controller;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ItemVenda;
import com.example.demo.service.ItemVendaService;

@CrossOrigin(origins = "http://127.0.0.1:5501")
@RestController
@RequestMapping("/itemvenda")
public class ItemVendaController {

    private final ItemVendaService itemVendaService;

    public ItemVendaController(ItemVendaService itemVendaService) {
        this.itemVendaService = itemVendaService;
    }

    @PostMapping
    public void criarItemVenda(@RequestBody ItemVenda itemVenda) {
        itemVendaService.salvarItemVenda(itemVenda);
    }

    @GetMapping
    public List<ItemVenda> listarItemVendas() {
        return itemVendaService.listItemVendas();
    }

    @GetMapping("/{id_item_venda}")
    public ItemVenda buscarItemVendaPorId(
            @PathVariable("id_item_venda") Long id_item_venda) {

        return itemVendaService.buscarItemVendaById(id_item_venda);
    }

    @PutMapping("/{id_item_venda}")
    public ItemVenda atualizarItemVenda(
            @PathVariable("id_item_venda") Long id_item_venda,
            @RequestBody ItemVenda itemVendaAtualizado) {

        return itemVendaService.atualizarItemVenda(
                id_item_venda,
                itemVendaAtualizado
        );
    }

    @DeleteMapping("/{id_item_venda}")
    public void deletarItemVenda(
            @PathVariable("id_item_venda") Long id_item_venda) {

        itemVendaService.deletarItemVenda(id_item_venda);
    }
}