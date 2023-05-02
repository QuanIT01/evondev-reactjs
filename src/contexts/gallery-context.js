import useLocalStorage from "../hooks/useLocalStorage";

const { createContext, useContext, useState } = require("react");

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1669673748084-605b2cbb1330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1668962161756-bbf8577b49cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1668770235702-44e39f4dfdb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1668656379942-920e753667b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1668104365744-6c7732fabe0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isFavorite: false,
  },
];

const GalleryContext = createContext();
function GalleryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favoriteList, setFavoriteList] = useState([]);

  function toggleFavorite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  }
  // 1. Viết function addToCart
  // 2. Function addToCart truyền params là photo
  function addToCart(newItem) {
    // 3. Cập nhật lại state giỏ hàng (cartItems)
    setCartItems((prevItems) => {
      // 4. Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      console.log("setCartItems ~ isExisted", isExisted);
      // 5. Nếu tồn tại thì trả về danh sách trước đó
      if (isExisted) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      // 6. Chưa tồn tại thì thêm vào giỏ hàng
      setStoredCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }

  function removeFromCart(photoId) {
    setCartItems((prevItems) => {
      const result = prevItems.filter((item) => item.id !== photoId);
      setStoredCart(result);
      return result;
    });
  }

  const value = {
    photos,
    cartItems,
    favoriteList,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}
export { useGallery, GalleryProvider };
