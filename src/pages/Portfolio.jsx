export default function Portfolio() {
    
    return (
        <div className="projects" style={{ color:'#A1683A', margin: '0'}} >
            <ul className="list-group" style={{display:'flex', flexDirection:'row', justifyContent: 'spaceBetween',flexWrap:'wrap' }} >
                <li style={{display:'flex', flexDirection:'column', margin:'60px'}}> <img src='images\pizzzapuz.png' style={{height:'200px', width:'200px'}}></img> Pizza Puzzler: The Game <a href='https://pizza-puzzler-df030c54c16c.herokuapp.com/'>Check out the game!</a>
                <a href='https://github.com/collinshepherd/Pizza-Puzzler'>Check out the Repository!</a></li>

                <li style={{display:'flex', flexDirection:'column', justifyContent: 'space between', margin:'60px'}}><img src='\images\weatherapp.png' style={{height:'200px', width:'200px'}}></img> Weather App <a href='https://harmonyburke.github.io/weather-app/'>Check out the webpage here!</a> 
                <a href='https://github.com/harmonyburke/weather-app'>Check out the Repository!</a></li>

                <li style={{display:'flex', flexDirection:'column', margin:'60px'}}><img src='/images/employee.png' style={{height:'200px', width:'200px'}}></img> Employee Tracker: MySQL<a href='https://drive.google.com/file/d/1ge4TZTvvlFZj7cUUXqIct05TLb8q9mck/view'>Check out this short video walkthrough!</a> 
                <a href='https://github.com/harmonyburke/employee-tracker'>Check out the Repository!</a></li>

                <li style={{display:'flex', flexDirection:'column', margin:'60px'}}><img src='/images/insomnia bug.png' style={{height:'200px', width:'200px'}}></img> E-Commerce Application: MySQL<a href='https://drive.google.com/file/d/1R-lGeW7Pv-nv1hicR6zulEbZqIzc0Zaq/view?usp=sharing'>Check out this short video walkthrough!</a> 
                <a href='https://github.com/harmonyburke/e-commerce'>Check out the Repository!</a></li>

                <li style={{display:'flex', flexDirection:'column', margin:'60px'}}> <img src='images\beatdeetz.png' style={{height:'200px', width:'200px'}}></img> Beat Deetz <a href='https://harmonyburke.github.io/beatdeets/'>Check out the webpage!</a>
                <a href='https://github.com/harmonyburke/beatdeets'>Check out the Repository!</a></li>

                <li style={{display:'flex', flexDirection:'column', margin:'60px'}}> <img src='images\portfolio1.png' style={{height:'200px', width:'200px'}}></img> Beginner Portfolio <a href=' https://harmonyburke.github.io/my-portfolio/'>Check out the webpage!</a>
                <a href='https://github.com/harmonyburke/my-portfolio'>Check out the Repository!</a></li>
            </ul>
        </div>
    )
}



