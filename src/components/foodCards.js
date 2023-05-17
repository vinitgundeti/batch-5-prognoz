export default function FoodCard({title, image}){
    return (
        <div className='foodCard'>
            <img src={image} alt=''/>
            <h3>{title}</h3>
        </div>
    )
}