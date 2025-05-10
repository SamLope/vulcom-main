/*
Define as rotas e suas informações, servido como fonte unica de verdade para AppRoutes.jsx e MainMenu.jsx
*/
import Homepage from '../pages/Homepage'

import CarForm from '../pages/car/CarForm'
import CarList from '../pages/car/CarList'

import CustomerForm from '../pages/customer/CustomerForm'
import CustomerList from '../pages/customer/CustomerList'

import UserList from '../pages/user/UserList'
import UserForm from '../pages/user/UserForm'

import Login from '../pages/Login'

import BruteForce from '../pages/BruteForce'


//Constante que definem o nivel de acesso do usuário
const NO_USER = 0               //Não há necessidade de usuario autenticado
const AUTHENTICATED_USER = 1    // somente usuários autenticados
const ADMIN_USER = 2            // somente usuários administradores

const routes = [
    {
        path: '/',
        description: 'Início',
        Element: <Homepage/>,
        userLevel: NO_USER,
        divider: true   //mostra uma divisória no menu
    },
    {
        path: '/login',
        description: 'Entrar',
        Element: <Login/>,
        userLevel: NO_USER,
        omitFromMainMenu: true   //não aparece no menu principal
    },
    {
        path: '/customers',
        description: 'Listagem de Clientes',
        Element: <CustomerList/>,
        userLevel: AUTHENTICATED_USER  
    },
    {
        path: '/customers/new',
        description: 'Cadastro de Clientes',
        Element: <CustomerForm/>,
        userLevel: AUTHENTICATED_USER,
        divider: true   
    },
    {
        path: '/customers/:id',
        description: 'Alterar cliente',
        Element: <CustomerForm/>,
        userLevel: AUTHENTICATED_USER,
        omitFromMainMenu: true   
    },
    {
        path: '/cars',
        description: 'Listagem de Veículos',
        Element: <CarList/>,
        userLevel: AUTHENTICATED_USER  
    }, 
    {
        path: '/cars/new',
        description: 'Cadastro de Veículos',
        Element: <CarForm/>,
        userLevel: AUTHENTICATED_USER,
        divider: true   
    },
    {
        path: '/cars/:id',
        description: 'Alterar Veículo',
        Element: <CarForm/>,
        userLevel: AUTHENTICATED_USER,
        omitFromMainMenu: true  
    },
    {
        path: '/users',
        description: 'Listagem de usuários',
        Element: <UserList/>,
        userLevel: ADMIN_USER 
    },
    {
        path: '/users/new',
        description: 'Cadastro de usuários',
        Element: <UserForm/>,
        userLevel: ADMIN_USER,
        divider: true
    },
    {
        path: '/users/:id',
        description: 'Alterar usuário',
        Element: <UserForm/>,
        userLevel: ADMIN_USER 
    },
    {
        path: '/brute-force',
        description: 'Ataque de força bruta',
        Element: <BruteForce/>,
        userLevel: ADMIN_USER,
        divider: true 
    }
]

export {routes, NO_USER, AUTHENTICATED_USER, ADMIN_USER}
