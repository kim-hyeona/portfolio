import "./layout.scss"
function Star() {
    const path = process.env.PUBLIC_URL;
    return (
        <div className='star1 star'>
          <img src={path + 'images/black_star2.png'} alt="+" />
          <img src={path + 'images/black_star1.png' } alt="." />
        </div>
    );
}



export default Star;