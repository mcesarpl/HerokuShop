import Sequelize from 'sequelize';
import db from '../../services/MysqlServer';

const Movie = db.define(
  'movies',
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
    duration: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    rating: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
);

export default Movie;
