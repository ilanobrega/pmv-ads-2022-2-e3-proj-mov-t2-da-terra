import React, {useState} from 'react';
import {BottomNavigation,} from 'react-native-paper';
import {StyleSheet} from "react-native";

import MeusPedidos from './MeusPedidos';
import BuscarProdutos from "./BuscarProduto";
import MinhaConta from "../PaginasComuns/MinhaConta";

const HomeCliente = () => {
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        {key: 'buscar', title: 'Buscar produtos', focusedIcon: 'shopping-search'},
        {key: 'meusPedidos', title: 'Meus pedidos', focusedIcon: 'truck-fast'},
        {key: 'minhaConta', title: 'Minha Conta', focusedIcon: 'account'},

    ]);

    const renderScene = BottomNavigation.SceneMap({
        buscar: BuscarProdutos,
        meusPedidos: MeusPedidos,
        minhaConta: MinhaConta,
    });

    return (
        <BottomNavigation
            barStyle={{backgroundColor: '#C0D56A'}}
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};
const styles = StyleSheet.create({




})
export default HomeCliente;