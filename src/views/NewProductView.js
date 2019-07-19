import React, { Component } from 'react';

import { ProductService } from '../services/ProductService';

class NewProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            description: '',
            price: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { target } = event, 
            { name, value } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newProduct = this.state;

        if(newProduct.description && newProduct.price) {
            ProductService.create(newProduct);
            this.setState({
                image: '',
                description: '',
                price: 0
            })
        }
    }

    render() {
        const { state } = this;
        return (
            <div>
                <h1>Novo Produto</h1>
                <form className="product-form" onSubmit={this.handleSubmit}>
                    <label>
                        <span>Imagem</span>
                        <input type="text" onChange={this.handleChange} name="image" value={state.image} />
                    </label>
                    <label>
                        <span>Descrição</span>
                        <input type="text" onChange={this.handleChange} name="description" value={state.description} />
                    </label>
                    <label>
                        <span>Preço</span>
                        <input onChange={this.handleChange} name="price" value={state.price} />
                    </label>
                    <button type="submit" >Criar produto</button>
                </form>
            </div>
        )
    }
}

export default NewProductView