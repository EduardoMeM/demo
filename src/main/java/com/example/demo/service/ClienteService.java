package com.example.demo.service;
import com.example.demo.repository.ClienteRepository;
import com.example.demo.entity.Cliente;
import java.util.List;
import org.springframework.stereotype.Service;
@Service
public class ClienteService {
    private final ClienteRepository clienteRepository;
    
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    public Cliente salvarCliente(Cliente cliente){
        return clienteRepository.save(cliente);
        }
        
    public Cliente buscarClientePorId(int id_cliente){
        return clienteRepository.findById(id_cliente).orElse(null);
    }
    public Cliente atualizarCliente(int id_cliente, Cliente clienteAtualizado){
        Cliente clienteExistente = clienteRepository.findById(id_cliente).orElse(null);
        if (clienteExistente !=null){
            clienteExistente.setNome_cliente(clienteAtualizado.getNome_cliente());
            clienteExistente.setEmail_cliente(clienteAtualizado.getEmail_cliente());
            clienteExistente.setTelefone_cliente(clienteAtualizado.getTelefone_cliente());
            return clienteRepository.save(clienteExistente);
            
        }
        return null;
    }

    public void deletarCliente(int id_cliente){
        clienteRepository.deleteById(id_cliente);
    }
    
    public List<Cliente> listarClientes(){
        return clienteRepository.findAll();
    }
    

}
