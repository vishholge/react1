import React  from 'react';
import './GrandChildComponant1.css';

const GrandChildComponant = ({title,padding,borderRadius,width}) =>{
    return(
        <div className='GrandChildComponant' style= {{padding,borderRadius,width}}>
            <h3>{title}</h3>
            <p className='firstpara'> LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

        </div>

    );
};
export default GrandChildComponant;