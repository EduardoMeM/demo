package com.example.demo.service;
import com.example.demo.entity.ItemVenda;
import com.example.demo.repository.ItemVendaRepository;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ItemVendaService {
    private final ItemVendaRepository itemVendaRepository;
    public ItemVendaService(ItemVendaRepository itemVendaRepository){
        this.itemVendaRepository = itemVendaRepository;
    }
    public ItemVenda salvarItemVenda(ItemVenda itemVenda){
        return itemVendaRepository.save(itemVenda);
    }
    public ItemVenda buscarItemVendaById(Long id_item_venda){
        return itemVendaRepository.findById(id_item_venda).orElse(null);
    }
    public ItemVenda atualizarItemVenda(Long id_item_venda, ItemVenda itemVendaAtualizado){
        ItemVenda itemVendaExistente = itemVendaRepository.findById(id_item_venda).orElse(null);
        if (itemVendaExistente !=null){
            itemVendaExistente.setQuantidade(itemVendaAtualizado.getQuantidade());
            itemVendaExistente.setPreco_unitario(itemVendaAtualizado.getPreco_unitario());
            itemVendaExistente.setProduto(itemVendaAtualizado.getProduto());
            itemVendaExistente.setVenda(itemVendaAtualizado.getVenda());
            return itemVendaRepository.save(itemVendaExistente);

        }
        return null;
        
    }
    public void deletarItemVenda(Long id_item_venda){
        itemVendaRepository.deleteById(id_item_venda);
    }
    public List<ItemVenda> listItemVendas(){
        return itemVendaRepository.findAll();
    }
    
}