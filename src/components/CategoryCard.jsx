import React from 'react';

const CategoryCard = (props) => {
    return (
        <div className="category__card">
            <img className="category__card__img" src={props.category.img} alt=""/>
            <h2 className="category__card__title">{props.category.title}</h2>
        </div>
    );
};

export default CategoryCard;