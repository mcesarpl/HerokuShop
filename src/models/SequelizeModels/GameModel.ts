import Sequelize from 'sequelize';
import db from '../../services/MysqlServer';

const Game = db.define(
  'games',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    discount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    platform: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
);

export default Game;
