import MainDirectory from "../components/main-directory/MainDirectory";

const categories = [
    {
      id: "1",
      title: "Men's",
      route: "/men-shop",
      imageUrl: 'https://i.pinimg.com/564x/c0/5c/da/c05cdab1aedd7d248b1f3f43485e9ab8.jpg'
    },
    {
      id: "2",
      title: "Women's",
      route: "/women-shop",
      imageUrl: 'https://i.pinimg.com/564x/fb/08/b9/fb08b9b5eceb0e4b08e3831f43d8095f.jpg'
    },
  ];

  function MainDivision() {
    return <MainDirectory categories={categories}/>
  }
  
  export default MainDivision;