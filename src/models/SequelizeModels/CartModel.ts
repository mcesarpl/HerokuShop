import Sequelize from 'sequelize';
import db from '../../services/MysqlServer';

const Cart = db.define(
  'carts',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    abandoned: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    itens: {
      type: Sequelize.ARRAY,
      allowNull: false,
    },
    subtotal: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    discounts: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    taxes: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    total: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
);

export default Cart;
