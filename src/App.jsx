import {data} from "./data";
import Question from "./Question";
import {useState} from "react";

const App = () => {
  const [questions, setQuestions] = useState(data)
  return (

    <main className={"bg-purple-900 flex justify-center items-center h-full"}>
      <div className={"bg-gray-50 w-11/12 mx-auto rounded p-4 my-20 md:w-8/12 lg:8/12"}>
        <h3 className={"text-lg font-semibold py-2 tracking-wider"}>Questions And Answers About Login</h3>
        <section>
          {questions.map((question) => {
            return  (
              <Question key={question.id} {...question} />
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App