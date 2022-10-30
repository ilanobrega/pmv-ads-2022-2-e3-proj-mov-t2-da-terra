using System.ComponentModel.DataAnnotations.Schema;
using WebApi.Models;

namespace WebApi.ViewModel
{
  public class CreateUsuarioViewModel
  {
    public int Id { get; set; }

    public int ProdutoId { get; set; }
    [ForeignKey("ProdutoId")]
    public Produto Produto { get; set; }

    public string Nome { get; set; }
    public string DataNascimento { get; set; }
    public string Cpf { get; set; }
    public string Telefone { get; set; }
    public string Rua { get; set; }
    public string Bairro { get; set; }
    public int NumeroCasa { get; set; }
    public int Cep { get; set; }
    public string Cidade { get; set; }
    public string Uf { get; set; }
    public string Complemento { get; set; }
    public string Email { get; set; }
    public string Senha { get; set; }
    public string TipoUsario { get; set; }
    public string DataCadastro { get; set; }
  }
}