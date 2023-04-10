const SHOP_DATA = [
  {
    title: "men",
    categories: [
      {
        title: "Hoodies",
        items: [
          {
            id: 1,
            name: "Nike classic hoodie in brown",
            imageUrl:
              "https://cdn.shopify.com/s/files/1/0852/3376/products/ce5a588d1c0ecdd32e1b81ba652ca8b4_2048x2048.jpg?v=1670272365&title=nike-bv2654-259-club-fleece-pullover-mens-hoodie-brown",
            price: 79,
          },
          {
            id: 2,
            name: "Adidas hoodie in green",
            imageUrl:
              "https://i.pinimg.com/originals/78/9f/2c/789f2ca8920a2c67e6c7ccdc5124faa9.jpg",
            price: 79,
          },
          {
            id: 3,
            name: "Tommy Hilfiger hoodie in black",
            imageUrl:
              "https://tommy-europe.scene7.com/is/image/TommyEurope/KS0KS00213_BDS_main?$main$",
            price: 99,
          },
          {
            id: 4,
            name: "The North Face hoodie in grey",
            imageUrl:
              "https://cdn.shopify.com/s/files/1/0152/9745/products/northface-logo-hoodie-grey-1.jpg?v=1605559453",
            price: 89,
          },
          {
            id: 5,
            name: "Lacoste hoodie in red",
            imageUrl:
              "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwd863655e/TH9349_240_24.jpg",
            price: 99,
          },
          {
            id: 6,
            name: "Jordan hoodie in blue",
            imageUrl:
              "https://i.pinimg.com/originals/78/9f/2c/789f2ca8920a2c67e6c7ccdc5124faa9.jpg",
            price: 79,
          },
        ],
      },
      {
        title: "T-shirts",
        items: [
          {
            id: 7,
            name: "Nike basic t-shirt white",
            imageUrl:
              "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ta+g0Z6uL._AC_UX385_.jpg",
            price: 49,
          },
          {
            id: 8,
            name: "Nike t-shirt red",
            imageUrl:
              "https://i5.walmartimages.com/asr/cb3e3f88-edbf-47a5-b569-57645f890719.8e46861dbe0a93f0b28e14166125d5d5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
            price: 39,
          },
          {
            id: 9,
            name: "Jordan t-shirt in black",
            imageUrl:
              "https://images.asos-media.com/products/jordan-t-shirt-with-chest-logo-in-black/23727535-1-black?$n_640w$&wid=513&fit=constrain",
            price: 49,
          },
          {
            id: 10,
            name: "Tommy Hilfiger t-shirt in grey",
            imageUrl:
              "https://i5.walmartimages.com/asr/cb3e3f88-edbf-47a5-b569-57645f890719.8e46861dbe0a93f0b28e14166125d5d5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
            price: 59,
          },
          {
            id: 11,
            name: "Adidas t-shirt in blue",
            imageUrl:
              "https://images.asos-media.com/products/adidas-originals-adicolor-large-logo-t-shirt-in-sky-blue/202288904-1-blue?$n_640w$&wid=513&fit=constrain",
            price: 39,
          },
          {
            id: 12,
            name: "Calvin Klein t-shirt white",
            imageUrl:
              "https://img.shopstyle-cdn.com/sim/eb/6f/eb6f242dfc12c25cf33ad6063c221a50_xlarge/front-print-t-shirt.jpg",
            price: 59,
          },
        ],
      },
      {
        title: "Trousers",
        items: [
          {
            id: 13,
            name: "Nike sweatpants in grey",
            imageUrl:
              "https://media.endclothing.com/media/catalog/product/1/9/19-01-2021_MB_BV2671-063_1_1.jpg",
            price: 49,
          },
          {
            id: 14,
            name: "Adidas joggers in black",
            imageUrl:
              "https://rollbackdeal.com/az-images/dh5801_main.jpg",
            price: 39,
          },
          {
            id: 15,
            name: "Nike joggers in green",
            imageUrl:
              "https://static.nike.com/a/images/t_default/a3cac71a-5d67-4788-b984-e7efae9ca93b/sportswear-tech-fleece-mens-joggers-4x29ft.png",
            price: 49,
          },
          {
            id: 16,
            name: "Nike cargojogger in grey",
            imageUrl:
              "https://media.very.co.uk/i/very/P9MVV_SQ1_0000000070_DARK_GREY_MDf?$300x400_retinamobilex2$",
            price: 49,
          },
          {
            id: 17,
            name: "Puma joggers in black",
            imageUrl:
              "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pzn2MiqdL._AC_UX679_.jpg",
            price: 49,
          },
          {
            id: 18,
            name: "Reebok joggers in blue",
            imageUrl:
              "https://cdn11.bigcommerce.com/s-27joa6hsn8/images/stencil/original/products/2352/6666/14-386786__03505.1654849572.jpg?c=2",
            price: 49,
          },
        ],
      },
      {
        title: "Footwear",
        items: [
          {
            id: 19,
            name: "Nike dunk low black/white",
            imageUrl: "https://i.ebayimg.com/images/g/x1MAAOSwCiJivSlj/s-l500.jpg",
            price: 299,
          },
          {
            id: 20,
            name: "Air Jordan 1 red",
            imageUrl: "https://media.endclothing.com/media/catalog/product/0/1/01-06-2015_nike_airjordan1retrohighogchicago_red_white_sh_1.jpg",
            price: 399,
          },
          {
            id: 21,
            name: "Air Jordan 4 retro",
            imageUrl: "https://cdn.shopify.com/s/files/1/0591/1805/9685/products/air-jordan-4-red-metallic-release-date-price-00_1024x1024.jpg?v=1630797932",
            price: 299,
          },
          {
            id: 22,
            name: "Nike Air Force 1 white",
            imageUrl: "https://static.footshop.com/759265/171346.jpg",
            price: 149,
          },
          {
            id: 23,
            name: "New Balance 327",
            imageUrl: "https://cdn.shopify.com/s/files/1/0139/8942/products/Unisex-New-Balance-327-Grey-4_3c71f0bd-c1d9-459a-96ee-cfea9096ecb3.jpg?v=1672939775",
            price: 149,
          },
          {
            id: 24,
            name: "Vans old school in black",
            imageUrl: "https://samsbmx.com/wp-content/uploads/2019/01/vans-2.png",
            price: 129,
          },
          {
            id: 25,
            name: "Nike Blazer Mid'77 white",
            imageUrl: "https://cdn.shopify.com/s/files/1/0577/7784/8502/products/da4086100_nike_blazer_mid_77__5_671x.jpg?v=1657346089",
            price: 139,
          },
        ],
      },
    ],
  },
  {
    title: "women",
    categories: [
      {
        title: "Sweatshirts",
        items: [
          {
            id: 26,
            name: "Plain gray knit sweatshirt",
            imageUrl: "https://i.etsystatic.com/5389420/r/il/1210d4/1890803411/il_500x500.1890803411_sqe6.jpg",
            price: 49,
          },
          {
            id: 27,
            name: "Adidas sweatshirt in pink",
            imageUrl: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/663a5c18c2eb4e7496b2af0000baba0d_9366/Essentials_Two-Colored_Big_Logo_Cotton_Hoodie_Pink_IB8774_01_laydown.jpg",
            price: 79,
          },
          {
            id: 28,
            name: "New York oversided hoodie",
            imageUrl: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41umKnoYXfL._SS400_.jpg",
            price: 49,
          },
          {
            id: 29,
            name: "Fila swearshirt in beige",
            imageUrl: "https://i.etsystatic.com/30268680/r/il/1cc01f/3176986611/il_fullxfull.3176986611_soim.jpg",
            price: 49,
          },
          {
            id: 30,
            name: "Nike sweatshirt in purple",
            imageUrl: "https://cdn.shopify.com/s/files/1/0187/5180/products/ONENESS_0040_WOMENS-NIKE-ESSENTIAL-FLEECE-HOODIE-VIOLET-CZ2590-591_b5039209-7e61-4108-a42d-e8744ad89949.jpg?v=1623251636",
            price: 59,
          },
          {
            id: 31,
            name: "Puma sweatshirt in white",
            imageUrl: "https://cdn.shopify.com/s/files/1/0773/7001/products/Puma-ESS-Logo-Hoodie-TR-586791-02.jpg?v=1614912475",
            price: 45,
          },
        ],
      },
      {
        title: "Shirts",
        items: [
          {
            id: 32,
            name: "Pink summer shirt",
            imageUrl: "https://n.nordstrommedia.com/id/sr3/5d3cca9b-317d-437d-9729-0d3a14b34814.jpeg?h=365&w=240&dpr=2",
            price: 49,
          },
          {
            id: 33,
            name: "Yellow summer shirt",
            imageUrl: "https://i.ebayimg.com/thumbs/images/g/Gh8AAOSwj2hgpM-r/s-l300.jpg",
            price: 49,
          },
          {
            id: 34,
            name: "Blue summer shirt",
            imageUrl: "https://n.nordstrommedia.com/id/sr3/4951e3e6-bb7c-4bbe-b070-c935722ac881.jpeg?h=365&w=240&dpr=2",
            price: 49,
          },
          {
            id: 35,
            name: "Shirt in stripe",
            imageUrl: "https://www.rlmedia.io/is/image/PoloGSI/s7-1250432_lifestyle?wid=1200&hei=1200&fmt=png",
            price: 49,
          },
          {
            id: 36,
            name: "Shirt in khaki",
            imageUrl: "https://internetfusion.imgix.net/1603472.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=600&h=600",
            price: 49,
          },
          {
            id: 37,
            name: "Shirt in red",
            imageUrl: "https://n.nordstrommedia.com/id/sr3/bc21dc29-fb5d-4c2c-be86-f826e6e955b4.jpeg?h=365&w=240&dpr=2",
            price: 49,
          },
        ],
      },
      {
        title: "Footwear",
        items: [
          {
            id: 38,
            name: "Nike Air Force",
            imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4dcd6c9b-2298-48e7-af26-1d4c220eb6e4/air-force-1-07-se-womens-shoes-XSwHNZ.png",
            price: 119,
          },
          {
            id: 39,
            name: "Coverse All Star in black",
            imageUrl: "https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Converse-Chuck-Taylor-All-Star-Black-High-Top-Shoes-_261640-alt5-US.jpg",
            price: 99,
          },
          {
            id: 40,
            name: "New Balance 530",
            imageUrl: "https://aritzia.scene7.com/is/image/Aritzia/large/f22_98_n01_82640_28863_off_b.jpg",
            price: 99,
          },
          {
            id: 41,
            name: "Nike Air Max 97",
            imageUrl: "https://cdn.shopify.com/s/files/1/0577/7784/8502/products/dh1594001_nike_womens_air_max_97_phantom__iron_grey__plum_fog__honeydew_B_671x.jpg?v=1660298626",
            price: 99,
          },
          {
            id: 42,
            name: "Adidas Stan Smith white",
            imageUrl: "https://d2ob0iztsaxy5v.cloudfront.net/product/192046/1920461060m3_zm.jpg",
            price: 99,
          },
          {
            id: 43,
            name: "Adidas Originals Ozweego in beige",
            imageUrl: "https://i.ebayimg.com/images/g/NOoAAOSwgslj5mQd/s-l500.jpg",
            price: 99,
          },
        ],
      },
      {
        title: "Hats",
        items: [
          {
            id: 10,
            name: "Beige Hat",
            imageUrl: "https://imagescdn.simons.ca/images/2270/42312/20/A1_2.jpg?__=4",
            price: 119,
          },
          {
            id: 11,
            name: "White hat",
            imageUrl: "https://n.nordstrommedia.com/id/sr3/d01617ad-420b-4580-aafa-8ff8201da7cf.jpeg?h=365&w=240&dpr=2",
            price: 99,
          },
          {
            id: 10,
            name: "Nike hat in pink",
            imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/affc515f-45ea-43db-8a62-e050d95a07f5/aerobill-tailwind-running-cap-jx0vWd.png",
            price: 119,
          },
          {
            id: 11,
            name: "Nike cap in yellow",
            imageUrl: "https://n.nordstrommedia.com/id/sr3/d01617ad-420b-4580-aafa-8ff8201da7cf.jpeg?h=365&w=240&dpr=2",
            price: 99,
          },
          {
            id: 11,
            name: "Under Armor cap in black",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTusr9A_tufUAzN4bEUWkTkX0LsLsCcaAFgQ&usqp=CAU",
            price: 99,
          },
          {
            id: 11,
            name: "The North Face cap in pink",
            imageUrl: "https://www.sportinglife.ca/dw/image/v2/BCLQ_PRD/on/demandware.static/-/Sites-spl-master/default/dw688fa6cb/images/default/25580770_COSMO_PINK_3.JPG?sw=315",
            price: 99,
          },
        ],
      },
    ],
  },
];

export default SHOP_DATA;
