import React, { Component } from "react";
import './home.css';
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
    tema: string
}

export default class Home extends Component<Props> {
    render() {
        return (
            <div className="container">
                <h5 className="center-align">Bem Vindo!</h5>
                <div>
                    <p>
                        Bem-vindo ao sistema WB!

                        Aqui, você pode realizar seu cadastro de forma rápida e prática. Aproveite uma variedade de serviços personalizados para atender às suas necessidades.

                        Ao se cadastrar, você terá acesso a recursos exclusivos, como:

                        Gerenciamento de perfil: Atualize suas informações pessoais, como endereço, telefone e preferências de contato.
                        Suporte ao cliente: Uma equipe dedicada estará disponível para ajudá-lo com dúvidas ou problemas que possam surgir.
                        Para se cadastrar, basta preencher o formulário de inscrição com suas informações pessoais. Após o envio, você receberá um e-mail de confirmação com todos os detalhes para acessar sua conta.

                        Estamos entusiasmados em recebê-lo em nossa comunidade!
                    </p>
                </div>
            </div>
        );
    }
}
