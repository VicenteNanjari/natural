import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (foto) => {
        setFavorites([...favorites, foto]);
    };

    const removeFavorite = (fotoId) => {
        setFavorites(favorites.filter((foto) => foto !== fotoId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};