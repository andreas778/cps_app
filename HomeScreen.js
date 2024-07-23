import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import ProductScreen from './ProductScreen';
import BasketScreen from './BasketScreen';



export default function HomeScreen ({user}) {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const products = [
    ['Blue Circle General Purpose Grey Cement in Paper Bag 25kg', 
      'This cement bag from Blue Circle provides a multi-purpose cement suitable for a wide range of standard uses, including concrete, mortar, rendering and screeds. It is compatible with a wide range of admixtures such as air-entraining agents, workability aids and pigments.',
      'https://dam-assets.apps.travisperkins.group/v448ke0/GPID_1000266989_IMG_00.png?width=450&height=300'
    ],
    ['Blue Circle Mastercrete Grey Cement in Plastic Bag 25kg', 
      'Mastercrete contains cement quality improver to give the following benefits compared with ordinary Portland cement: lower water demand, more cohesive mix, less tendency for water to segregate and bleed and enhanced resistance of hardened concrete or mortar to freeze/thaw attack. Mastercrete is also 39% better for the environment. Comes in a convenient weatherproof plastic bag.',
      'https://dam-assets.apps.travisperkins.group/o35nk3j/GPID_1000328492_IMG_00.png?width=450&height=300'
    ],
    ['Blue Circle Ready to Use Postcrete 20kg', 
      'This Blue Circle ready to use Postcrete is a ready-mix Portland cement with a blend of selected sand, cement and additives formulated for fixing all kinds wooden, concrete and metal posts. It comes in a convenient weatherproof and tear-resistant plastic bag. Easy to use just add to water. Rapid setting (around 5 to 10 minutes), No mixing required',
      'https://dam-assets.apps.travisperkins.group/vnek1g3/GPID_1000388127_IMG_00.png?width=450&height=300'
    ],
    ['Blue Circle Quality Assured Ready to Use Mortar 20kg', 
      'Pre-mixed and ready to use with the addition of clean water, M4 (designation III) 1:1:6 cement:hydrated lime:sand mortar. Comprising specially graded sand, lime and admixtures this Blue Circle mortar offers convenience, with no compromise in performance or quality. Weather resistant and durable, this mortar is suitable for most general brick and block applications. Also ideal for pointing or gable ends. The mix is highly workable and cohesive, with a long board life.',
      'https://dam-assets.apps.travisperkins.group/xgyl91e/GPID_1000388125_IMG_00.png?width=450&height=300'
    ],
    ['Blue Circle Hydralime Hydrated Lime 25kg', 
      'Hydralime may be used with Procem, Mastercrete, General Purpose Cement, Snowcrete and Sulfacrete. Hydralime improves the cohesion, workability, plasticity and long term durability of Mortars and Renders when used. Note that as Hydralime is non-hydraulic, it is not suitable for use in mortars and renders without a Portland cement.',
      'https://dam-assets.apps.travisperkins.group/xp8kqmm/GPID_1000328453_IMG_00.png?width=450&height=300'
    ],
    ['Blue Circle Extra Rapid Fast Set Cement 25kg', 
      'A Portland cement containing calcium aluminate to Extra Rapid gives rapid hardening and setting properties for repair and maintenance where rapid hardening is required, eg, setting manholes, repairs to paths and steps, Suitable for concrete, mortar, rendering and floor screeds. Extra Rapid takes foot traffic in 4-6 hours and vehicular traffic in 8-12 hours.',
      'https://dam-assets.apps.travisperkins.group/v448ky0/GPID_1000267032_IMG_00.png?width=450&height=300'
    ],
    ['Blue Circle Snowcrete White Cement 25kg', 
      'Snowcrete is a white cement and is used for architectural uses, providing attractive and durable concrete, rendering and mortar. Uses include cast stone, architectural precast concrete, paving slabs, street furniture and terrazzo. Snowcrete on the UK Mainland is a High Strength CEM I 52,5R. Note to produce a white finish you must also use a white sand and/or aggregate',
      'https://dam-assets.apps.travisperkins.group/xlmk1ed/GPID_1000076801_IMG_00.png?width=450&height=300'
    ],
    ['Blue Circle Natural Hydraulic Lime 3.5 25kg', 
      'Limelite NHL 3,5, a moderately hydraulic lime suitable for general-purpose use for mortar/pointing/rendering of most masonry types.',
      'https://dam-assets.apps.travisperkins.group/v6wdkqm/GPID_1000695887_IMG_00.jpg?width=450&height=300'
    ],
    ['Limelite Renovating Plaster 25kg', 
      'Limelite Renovating Plaster is a Pre-blended and dry-bagged lightweight, cementitious plaster which has been developed to control dampness passing through traditionally constructed plaster. It can also be applied shortly after insertion of a new damp-proof course or system.',
      'https://dam-assets.apps.travisperkins.group/xw4w76d/GPID_1000267392_IMG_00.jpg?width=450&height=300'
    ]
  ]
  const [product, setProduct] = useState(null);
  const [basketFill, setBasketFill] = useState([]);
  const [basketView, setBasketView] = useState(false);
  //console.log('user in Home =');
  //console.log(user);


  useEffect(() => {
    function handleSearch () {
      console.log(search);
      let searches= [];
      for (let i = 0; i < products.length; i++) {
        //console.log(products[i][0]);
        if ((products[i][0].toLowerCase()).includes(search.toLowerCase()) ){// && search != '') {
          console.log(products[i][0]);
          searches.push(
            //<Text> {products[i][0]} </Text>
            <Button title={products[i][0]} onPress={() => handleProduct(products[i])} />
          )
        }
      }
      console.log(searchResults);
      setSearchResults(searches);
    }
    handleSearch(searchResults);
  }, [search]);

  const handleProduct = (product) => {
    console.log('OHHH MYYY');
    setProduct(product);
    console.log(product);
  }

  const nullProduct = () => {
    console.log('OHHH MYYY');
    setProduct(0);
    console.log(product);
  }

  const inBasket = (product) => {
    for (let i = 0; i < basketFill.length; i++) {
      if (basketFill[i][0] == product[0]) {
        return i+1;
      }
    }
    return false;
  }

  const addToBasket = (product) => {
    let basket = basketFill;
    const index = inBasket(product);
    if (index) {
      basket[index-1][1] += 1;
    }
    else {
      basket.push([product[0], 1]);
    }
    setBasketFill(basket);
  }

  return (
    <View >  
      {product && !basketView ? (
        <ProductScreen product={product} handleProduct={handleProduct} addToBasket={addToBasket} user={user}/>
      ) : (null)}
      {!product && !basketView ? (
        <>
          <TextInput
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
          />
          {searchResults}
        </> 
      ) : (null)}   
      {basketView ? (
        <BasketScreen basketFill={basketFill} setBasketFill={setBasketFill}
        setBasketView={setBasketView} user={user}/>
      ) : (null)}
      {!basketView && user.role != 'admin' ? (
        <Button title='Basket' onPress={() => setBasketView(true)}/>)
        : (null)}
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
