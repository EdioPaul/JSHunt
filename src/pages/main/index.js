import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';


export default class Main extends Component {

    //para armazenar os resultados dos produtos não utiliza classes. 
    //será em variaveis, no caso o state. Estado é sempre um obj.
    state = {
       products: [],
       productInfo: {},
       page: 1
    };

    //metodo de ciclo de vida, componentDidMount exibe sempre que o componente é carregado em tela.
    componentDidMount() {
      this.loadProducts();
    }

    //acessa a api
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        //cria as variaveis para armazenar os produtos e as informações ue vem da api.
        const { docs, ...productInfo} = response.data;

        this.setState({ products: docs, productInfo, page });
       //this.setState({ products: response.data.docs });
      //  console.log(response.data.docs);
    };


    prevPage = () => {
        //verifica qual a pagina atual
        const { page, productInfo } = this.state;
        
        //se for a 1, pois não tem menor
        if (page === 1 ) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);

    }


   nextPage = () => {
       //verifica qual a pagina atual
       const { page, productInfo } = this.state;

       //se for a ultima retorna
       if (page === productInfo.pages) return;

       //se não for a ultima, cria.
       const pageNumber = page + 1;

       this.loadProducts(pageNumber);
      
   }


   //O render escuta as alterações de estado no state
    render() {
       // return <h1>Contagem de produtos: { this.state.products.length }</h1>;

       //desestruturação para reduzir o map.
       const { products, page, productInfo } = this.state;

       //percorre a lista de produtos do state e mostra 
       return (
           <div className="product-list">
               { products.map(product => (
                   // O react pede que após o map, o primeiro elemento que vir 
                   //sempre tenha um id key com valor unico para cada produto.
                   //abaixo a lista detalhada com descrição.
                  <article key= { product._id }> 
                  <strong>{ product.title }</strong> 
                  <p>{ product.description }</p>
                  
                  <Link to={ `/products/${product._id}`}>Acessar</Link>
                  </article>
               ))}
               <div className="actions">
                   <button disabled={ page === 1 } onClick={ this.prevPage }>Anterior</button>
                   <button disabled={ page === productInfo.pages }onClick={ this.nextPage }>Próxima</button>
               </div>
           </div>
       )
    };
}