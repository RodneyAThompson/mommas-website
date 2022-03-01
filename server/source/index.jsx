const express = require ('express');
const cors = require ('cors');
const sequelize = require ('./sequelize');

export { Login } from './login';
export{ Register } from './register';

import './style.scss';