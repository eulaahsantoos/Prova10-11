import Imagem from './img/tentativa-de-estupro.jpg'
import './App.css';
import ProfileImage from './components/ProfileImage';
function App() {
  return (
    <div className="App">
      <h1>Mulher salva de tentativa de estupro por motorista
         e passageiros de ônibus diz à polícia que homem ameaçou
        'furar costela' dela caso não o abraçasse</h1>

        <h2>Vítima de 38 anos caminhava pela Rua Dom Vilares, na Vila das Mercês,
           quando um homem armado com objeto cortante a rendeu. Motorista de ônibus desconfiou de abordagem e parou o veículo.</h2>

     <ProfileImage
      titulo="A mulher de 38 anos que foi salva de uma tentativa de estupro por um motorista 
      e passageiros de ônibus, na Zona Sul de São Paulo, afirmou à polícia que o homem que a abordou ameaçou 
      furar sua costela, caso ela não o abraçasse e continuasse caminhando com ele sem pedir socorro."
      imagem={Imagem}
      
      />

<ProfileImage
      titulo="Uma câmera de segurança registrou o crime, no dia 23 de outubro. Nas imagens,
       é possível ver o momento em que o homem aborda a vítima na Rua Dom Vilares,
       na Vila das Mercês, e a segura pela cintura. A mulher se assusta e deixa a bolsa cair "
      imagem={Imagem}
      
      />
   
   
    </div>
  );
}
 
export default App;