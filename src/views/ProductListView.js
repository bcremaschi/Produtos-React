import React, { Component } from 'react';

import { ProductService } from '../services/ProductService'
import { Channel } from '../services/EventService';

import ProductList from '../components/ProductList';

class ProductListView extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.startData = this.startData.bind(this);
        this.remove = this.remove.bind(this);
    }

    async startData() {
        const products = await ProductService.list();
        this.setState({products});
    }
    
    componentDidMount() {
        this.startData();
        Channel.on('product:remove', this.remove);
    }

    async remove(productId) {
        const { products } = this.state,
            productIndex = products.findIndex(product => product.id === productId)

        await ProductService.remove(productId);
        products.splice(productIndex, 1);
        this.setState({products});
    }

    componentWillUnmount() {
        Channel.removeListener('product:remove', this.remove);
    }

    render() { 
        const { state } = this;
        return ( 
            <div>
                <h1>Lista de Produtos</h1>
                <ProductList products={state.products} />
            </div>
         )
    }
}
 
export default ProductListView;