package com.example.demo.controller;
import com.example.demo.service.ClienteService;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Cliente;
import java.util.List;
@CrossOrigin(origins = "http://127.0.0.1:5501")
@RestController
@RequestMapping("/clientes")
public class ClienteController {
    private final ClienteService clienteService;
    
    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }
    
    @PostMapping
    public Cliente criarCliente(@RequestBody Cliente cliente) {
        return clienteService.salvarCliente(cliente);
    }
    
    @GetMapping
    public List<Cliente> obterClientes() {
        return clienteService.listarClientes();
    }
    @GetMapping("/{id_cliente}")
    public Cliente buscarClientePorId(@PathVariable int id_cliente) {
        return clienteService.buscarClientePorId(id_cliente);
    }
    @PutMapping("/{id_cliente}")
    public Cliente atualizarCliente(@PathVariable int id_cliente,@RequestBody Cliente cliente){
        return clienteService.atualizarCliente(id_cliente,cliente);
    }
    @DeleteMapping("/{id}")
    public void deletarCliente(@PathVariable int id){
        clienteService.deletarCliente(id);
    }

    
}
