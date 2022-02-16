import Sequelize from 'sequelize';
import db from '../../services/MysqlServer';
import ArrayJsonConverter from '../../utils/ArrayJsonConverter';

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
      type: Sequelize.STRING,
      allowNull: false,
      get() {
        return ArrayJsonConverter.stringToArray(this.getDataValue('itens'));
      },
      set(val: JSON[]) {
        this.setDataValue('itens', ArrayJsonConverter.arrayToString(val));
      },
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
