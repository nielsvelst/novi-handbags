import React from 'react';
import './App.css';
import NavButtons from "./components/NavButtons";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import ourStory from './assets/our_story.png'
import Product from "./components/Product";
import Tile from "./components/Tile";

function App() {

  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <NavButtons
                buttonName='the collection'
                buttonOnOff={false}
            />
            <NavButtons
                buttonName='shop all bags'
                buttonOnOff={false}
            />
            <NavButtons
                buttonName='pre-order'
                buttonOnOff={true}
            />
        </nav>
        <main>
            <Product
                itemType='Best seller'
                image={bag1}
                bagTitle='handy'
                itemPrice={400}
            />
            <Product
                itemType='Best seller'
                image={bag2}
                bagTitle='stylish'
                itemPrice={250}
            />
            <Product
                itemType='New collection'
                image={bag3}
                bagTitle='simple'
                itemPrice={300}
            />
            <Product
                itemType='New collection'
                image={bag4}
                bagTitle='trendy'
                itemPrice={150}
            />
        </main>
        <footer>
            <Tile title='the brand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem dolor eos et eveniet itaque rem sequi tenetur voluptatem voluptatum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem esse ex, exercitationem laborum non perspiciatis placeat provident quibusdam tempore.
                </p>
            </Tile>
            <Tile
                image={brand}
                altImage='the designers'
            />
            <Tile
                image={ourStory}
                altImage='the designers'
            />
            <Tile title='our story'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque fugiat iusto magnam saepe! Aperiam atque commodi facere fugit hic, nisi optio perferendis, provident quasi quis quisquam sit velit veritatis.
                </p>
            </Tile>
        </footer>
      </>
  );
}


export default App;



