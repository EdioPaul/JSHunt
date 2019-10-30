import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';


//buscando os dados dos produtos
export default class Product extends Component {
 state = {
     product: {},
 };

    //carregando os dados dos produtos
   async componentDidMount() {
       //pega o id na url e os parametros.
       const { id } = this.props.match.params;
       //acessa a api
       const response = await api.get(`/products/${id}`);
        //preenche os dados do produto no estado.
       this.setState({ product: response.data });
   }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
               <h1>{ product.title }</h1>
               <p>{ product.description }</p>

               <p>
                   URL: <a href= { product.url }>{ product.url }</a>
               </p>
            </div>
        );
    }
} 