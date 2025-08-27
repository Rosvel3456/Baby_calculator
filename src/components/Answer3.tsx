
export interface QuestionProps {
question: string;
answers: Answers[]
}

export interface Answers {
    image: any;
    type: string;
}

function Answer3(data: QuestionProps) {
  return (
    <div style={{
       justifyContent: 'center',
       alignItems: 'center',
        flex: 1
    }}>
        {/* header */}
        <p style={{color: '#ff69b4', fontSize: 30, marginBottom: 24, textAlign: 'center', paddingTop:100 }}>
           {data.question}
        </p>
        <div className="containerAns" style={{display: 'flex', flexDirection:'row', justifyContent: 'space-around', flex: 1}}>
                               {data.answers.map((ans) => (
                                 <div className='button-container' id={ans.type}>
              <img src={ans.image} height={300} width={200}  />
              < button className='button' >{ans.type}</button>
            </div>
                               ))}

        </div>


    </div>
  )
}


export default Answer3
