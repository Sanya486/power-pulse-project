import React from 'react';
// import PropTypes from 'prop-types';
import css from './ProductsTable.module.scss';
import { clsx } from 'clsx';

import { ProductTableItem } from 'components/ProductsTableItem/ProductsTableItem';

export const ProductTable = ({ products }) => {
  console.log(products);

  return (
    <>
      <div className={clsx(css.tableContainer)}>
      <div className={css.tableList}>
          {products.map((product) => (
            <div key={product.id} className={css.tableElement}>
              <ProductTableItem
                id={product.id}
                title={product.title}
                category={product.category}
                calories={product.calories}
                weight={product.amount}
                groupBloodNotAllowed={product.groupBloodNotAllowed}
                first={products.indexOf(product) === 0 ? true : false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// ProductTable.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   calories: PropTypes.number.isRequired,
//   weight: PropTypes.number.isRequired,
//   groupBloodNotAllowed: PropTypes.string.isRequired,
// };
