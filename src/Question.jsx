import {AiOutlineMinus, AiOutlinePlus} from "react-icons/all";
import {useState} from "react";

const Question = ({question, answer}) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <section className={"my-4 flex justify-between items-start border shadow border px-6 py-4"}>
      <div className={"flex flex-col"}>
        <div className={"text-sm font-semibold tracking-wide"}>{question}</div>
        {showInfo && <div className={"text-sm py-2"}>{answer}</div>}
      </div>

      <button className={"bg-gray-200 p-2 w-8 text-center rounded-full "} onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus className={"text-red-600"}/> : <AiOutlinePlus className={"text-red-600"}/>}
      </button>
    </section>
  )
}

export default Question