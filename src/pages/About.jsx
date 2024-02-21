export default function About() {
  return (
    <div style={{background:'#E8998D'}}>
      <img
        className="img"
        src="\images\harmony2.jpg"
        style={{
          height: "200px",
          marginLeft: "500px",
          marginTop:'40px',
          display: "flex",
          alignContent:'center',
          border:'solid',
          borderBlockColor:'#EED2CC',
          borderBlockWidth:'5px',
          borderRadius:'30px'
        }}
      />

      <h1
        style={{
          color: "#3F292B",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          marginLeft: "70px",
        }}
      >
        Welcome to my portfolio!
      </h1>

      <p style={{ color: "#A1683A", fontSize: "25px", display:'flex', alignContent:'center',  }}>
        With a diverse background spanning from retail management to animal
        care, I am embarking on an exciting transition into the world of web
        development. Currently honing my skills through a rigorous coding
        bootcamp, I am poised to bring a unique perspective to the tech
        industry. My passion for learning and adaptability has been evident
        throughout my career, whether meticulously grooming beloved pets or
        leading teams in retail environments. I am driven by a deep love for
        animals, plants, and the natural world, finding inspiration in their
        beauty and complexity. As I embrace this new chapter, I am eager to
        merge my expertise in animal care with the innovative realm of web
        development, where creativity and problem-solving converge to create
        meaningful experiences.
      </p>
    </div>
  );
}
