import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User]; // array que deve ter todos os models

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // criação da conexão

    // passagem do parâmetro da conexão para cada model do array
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
