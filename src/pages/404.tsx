import Layout from '../layout/Layout';
import underConst from '../assets/underConstruct.png'


export default function P404() {
  return(
    <Layout>
      <div className='h-screen flex flex-col justify-center items-center mx-auto'>
        <img src={underConst} alt="UnderConstruction" className='w-full h-[50rem]'/>
        <h2>Web page under construction...</h2>
      </div>
    </Layout>
  );
};