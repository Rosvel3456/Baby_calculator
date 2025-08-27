import { useState } from "react";
import type { QuestionProps } from "../components/Answer3";
import Image1Q1 from "../assets/man_1-removebg-preview.png";
import Image2Q1 from "../assets/man_2-removebg-preview.png";
import Image3Q1 from "../assets/whiteman.jpg";
import Image1Q2 from "../assets/thin_man-removebg-preview.png";
import Image2Q2 from "../assets/whiteman.jpg";
import Image3Q2 from "../assets/big-removebg-preview.png";
import Answer3 from "../components/Answer3";

function FemalePage() {
 const Questiondata: QuestionProps[] = [
    {
      question: "Which boy will you look like to marry?",
      answers: [
        {
          image: Image1Q1,
          type: "fair",
        },
        {
          image: Image2Q1,
          type: "black",
        },
        {
          image: Image3Q1,
          type: "white",
        },
      ],
    },
    {
      question: "Which type of girl do you prefer?",
      answers: [
        {
          image: Image1Q2,
          type: "skinny",
        },
        {
          image: Image2Q2,
          type: "normal",
        },
        {
          image: Image3Q2,
          type: "fat",
        },
      ],
    },
    
  ];
  const [counter, setCounter] = useState(0);


  return (
    <div  className="container">
      {counter < Questiondata.length ? (
       <div>
         <Answer3
          question={Questiondata[counter].question}
          answers={Questiondata[counter].answers}
        />
                  <button className='button' style={{position: 'absolute', right: 50, width: 100,height: 50, marginTop: 50, fontSize: 18 }}  onClick={()=> setCounter((prev)=> prev + 1)}>Next &gt;</button>

       </div>
      ) : (
       <div className="congrats-container">
            <p className="congrats">
                Congratulations, you will have 6 children, 5 stubborn ones and one noisy one
            </p>

        </div>
      )}
    </div>
  );
}


export default FemalePage




