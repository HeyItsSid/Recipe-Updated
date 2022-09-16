
import React from 'react';
const { Header, Footer, Content } = Layout;
import { Input, Space, Layout,Card } from 'antd';
const { Search } = Input;

import '../styles/hope.css'

const { Meta } = Card;
import img1 from '../images/Chicken-Biryani.jpg'

import img3 from '../images/Pasta.jpg'
import img4 from '../images/user.png'
import img5 from '../images/logo.png'


const onSearch = (value) => console.log(value);

const handleClick= (e) =>{
  console.log('hello')
}



const Hope = () => (
    <>
    <Layout className='layout-section'>
      
      <Header style={{height:70}}>
      
      <div style={{color:'white',textAlign:'left',fontSize:50,fontWeight:'lighter', marginTop:-8 }}>RECIPE <img style={{width:43,height:55, marginTop:-12}} src={img5}/>
     
      <li> <a onClick={handleClick}><img  style={{width:39,height:40,float:'right', marginTop:-50}} src={img4} /></a></li>
     
      </div>
      
       
        </Header>
          
      <Content>
      
        <div className='hpimg'>
        
          
       
      <div className='in'> 
     <Space direction="vertical"/>
     <h1 style={{ textAlign:'center', fontSize:80}}>Find a Recipe</h1>
    <Search
      size="large"
      placeholder="Search"
      onSearch={onSearch}
      
    />
     </div>
     </div>
     <h1 className='r'>Top Recommendations:</h1>
        {/* chicken biryani */}
     <Card 
     className='dishes'
    hoverable
    style={{
      width: 240,
    }}
    cover={<img src={img1}/>}
  >
    <Meta title="Chicken Biryani"
     description="" />
  </Card>
  
  {/* palak paneer card */}

  
  {/* <Card 
  className='dishes'
  
  hoverable
    style={{
      width: 240,
    }}
    cover={<img src={img2}/>}
  >
    <Meta title="Palak Paneer"
     description=" 
     " />
  </Card> */}

  {/* pasta card */}

  <Card 
  className='dishes'
  
  hoverable
    style={{
      width: 240,
    }}
    cover={<img src={img3}/>}
  >
    <Meta title="Pasta "
     description="" />
     
  </Card>

  {/* pana colada card */}
  {/* <Card 
  className='dishes'
  
  hoverable
    style={{
      width: 240,
    }}
    cover={<img src="https://res.cloudinary.com/hsxfx8igq/image/upload/t_1x1_recipe_image,f_auto/v1594164094/pina_colada_with_pineapple_coconut_on_wood_zz7xpz.jpg"/>}
  >
    <Meta title="Pasta "
     description="The piña colada is a cocktail made with rum, cream of coconut or coconut milk,
      and pineapple juice, usually served either blended or shaken with ice." />
     
  </Card> */}

  {/* virgin mojito */}
  {/* <Card 
  className='dishes'
  
  hoverable
    style={{
      width: 240,
    }}
    cover={<img src="https://www.entertainingdiva.com/recipes/wp-content/uploads/sites/10/2016/07/mojito-mocktail-3-1-500x500.jpg"/>}
  >
    <Meta title="Virgin Mojito "
     description=" This non-alcoholic mojito recipe will be a hit with kids and adults alike,
                   they are super easy to make for a crowd." />
     
  </Card> */}

{/* a */}
{/* <Card 
  className='dishes'
  
  hoverable
    style={{
      width: 240,
    }}
    cover={<img src="https://www.entertainingdiva.com/recipes/wp-content/uploads/sites/10/2016/07/mojito-mocktail-3-1-500x500.jpg"/>}
  >
    <Meta title="Virgin Mojito "
     description=" This non-alcoholic mojito recipe will be a hit with kids and adults alike,
                   they are super easy to make for a crowd." />
     
  </Card> */}


  

    </Content>
     
      <Footer className='layout-section'>Footer</Footer>
    </Layout>
  </>
);
  export default Hope;
