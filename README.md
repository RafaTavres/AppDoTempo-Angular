# AppDoTempo-Angular
Aplicativo de Clima feito em Angular

## Explicando o Código

Componentes:

busca-cidade html - local para o usuario digitar a cidade/cep
busca-ciade ts - classe BuscaCidadeComponent valida e manda para o tempoService com o minímo de 2 e máximo de 15 letras para iniciar a busca 


modulos/poluicao :

poluicao routing module - Caminhos para direcionar o PolutionComponent
poluicao module ts - importa o PoluicaoRoutingModule e exporta o PoluicaoModule

NotFound :

Not found Component - exporta o NotfoundComponent (erro caso o caminho seja invalido)

poluicao html - mostra para o usuario a qualidade do ar, os elementos, simbolos, e um botao para voltar
poluicao ts - Exporta o PoluicaoComponent e o construtor do BuscaPoluicao do TempoService

Tempo Service :

tempoAtual - possui os valores de TempoAtual

    cidade: '',
    pais: '',
    date: Date.now().toLocaleString(),
    descricao: '',
    temperatura: 0,
    image: '',
    latitude: 0,
    longitude: 0
    
Possui as Classe BuscarTempoAtual e BuscarPoluicao (onde estão as conexoes com as API's)
Além das classes transformToITempoAtual(transforma os dados de IcurrentWeatherData do clima para a Interface),(transformToPolutionData(transforma os dados de IcurrentWeatherData do concentracao de carbono para a Interface) e convertKelvinToCelcius(converte kelvin para celcius)

Tempo-Atual :
tempo-atual html -  mostra para o usuario o clima ,temperatura ,cidade , pais, data,descricao, e um botao para ir para a concentracao de carbono
tempo-atual ts - exporta a classe TempoAtualComponent, possui o construtor de TempoAtual

AppRoutingModule :

Possui as Rotas dos componentes : component: TempoAtualComponent,PoluicaoModule, BuscaCidadeComponent, NotfoundComponent 

App Component html : 

Tela Inicial possui o <router-outlet></router-outlet> que direciona as rotas

App Component ts : 

 Exporta o AppComponent 
 
 App Modules : 
 
 Exporta AppModule, Importa NgModule,NotfoundComponent,AppRoutingModule,PoluicaoComponent,BuscaCidadeComponent,MaterialModule,BrowserAnimationsModule,HttpClientModule,TempoService,TempoAtualComponent,AppComponent,FormsModule,BrowserModule
 
 ItempoAtual : 
 
 exporta a  interface ITempoAtual com os valores
  cidade: string,
  pais: string,
  date: string,
  image: string,
  temperatura: number,
  descricao: string,
  latitude: number,
  longitude: number
  
  
Material Modules: Importa e Exporta do Angular Material


 
 
 
   
    
    
    
    
    
    
    
    
    
    
    


   
