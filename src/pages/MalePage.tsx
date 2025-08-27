import React, { useState } from "react";
import type { Answers, QuestionProps } from "../components/Answer3";
import Image1Q1 from "../assets/fair_girl-removebg-preview.png";
import Image2Q1 from "../assets/black_girl-removebg-preview.png";
import Image3Q1 from "../assets/white-removebg-preview.png";
import Image1Q2 from "../assets/SKINNY-removebg-preview.png";
import Image2Q2 from "../assets/normal-removebg-preview.png";
import Image3Q2 from "../assets/fat-removebg-preview.png";
import Image1Q3 from "../assets/short-removebg-preview (1).png";
import Image2Q3 from "../assets/meduimWoman-removebg-preview.png";
import Image3Q3 from "../assets/TallestWoman-removebg-preview.png";
import Answer3 from "../components/Answer3";

function MalePage() {
  const Questiondata: QuestionProps[] = [
    {
      question: "Which girl will you look like to marry?",
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
    {
      question: "Which type of girl do you prefer?",
      answers: [
        {
          image: Image1Q3,
          type: "short",
        },
        {
          image: Image3Q3,
          type: "meduim",
        },
        {
          image: Image2Q3,
          type: "tall",
        },
      ],
    },
  ];
  const [counter, setCounter] = useState(0);
  const [answerData, setAnswerData] = useState<Answers[]>([]);

  const handleAddtoAnswers = (data: Answers) => {
    setAnswerData([...answerData, { image: data.image, type: data.type }]);
  };

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
                Congratulations, you will have 11 children, Good luck feeding them
            </p>

        </div>
      )}
    </div>
  );
}

export default MalePage;
