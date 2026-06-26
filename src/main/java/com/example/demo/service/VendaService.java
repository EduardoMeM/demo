package com.example.demo.service;
import com.example.demo.repository.VendaRepository;
import com.example.demo.entity.Venda;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class VendaService {
    private final VendaRepository vendaRepository;
    
    public VendaService(VendaRepository vendaRepository) {
        this.vendaRepository = vendaRepository;
    }
    
    public Venda salvarVenda(Venda venda){
        return vendaRepository.save(venda);
    }
    
    public Venda buscarVendaPorId(int id_venda){
        return vendaRepository.findById(id_venda).orElse(null);
    }
    
    public Venda atualizarVenda(int id_venda, Venda vendaAtualizada){
        Venda vendaExistente = vendaRepository.findById(id_venda).orElse(null);
        if (vendaExistente != null){
            vendaExistente.setData_venda(vendaAtualizada.getData_venda());
            vendaExistente.setValor_total(vendaAtualizada.getValor_total());
            return vendaRepository.save(vendaExistente);
        }
        return null;
    }
    
    public void deletarVenda(int id_venda){
        vendaRepository.deleteById(id_venda);
    }
    
    public List<Venda> listarVendas(){
        return vendaRepository.findAll();
    }
 
    
}
