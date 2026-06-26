package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Venda;
import com.example.demo.service.VendaService;
import com.example.demo.entity.Cliente;
import com.example.demo.entity.Produto;

@RestController
@RequestMapping("/venda")

public class VendaController {
   @Autowired
   private VendaService vendaService;
   @PostMapping
   public Venda criarVenda(@RequestBody Venda venda){
       return vendaService.salvarVenda(venda);
   }
   @GetMapping
   public List<Venda> listarVendas(){
       return vendaService.listarVendas();
   }
   @GetMapping("/{id}")
   public Venda buscarVendaPorId(@PathVariable Long id){
       System.out.println(id); // Log para verificar o ID recebido
       return vendaService.buscarVendaPorId(id.intValue());
   }

   @DeleteMapping("/{id}")
   public void deletarVenda(@PathVariable int id){
       vendaService.deletarVenda(id);
   }

   @PutMapping("/{id}")
   public Venda atualizarVenda(@PathVariable Long id, @RequestBody Venda venda){
       return vendaService.atualizarVenda(id.intValue(), venda);
   }

     
}
