import { questions } from "@/constants/constants";
import { Button } from "./ui/button";

const Questions = () => {
   return (
      <div>
         {questions.map((question) => (
            <div key={question.username} className="border w-[80%]">
               <section>
                  <img src={question.profilePic} alt="profilePic" />
                  <p>{question.username}</p>
                  <p>{question.uploadedAt}</p>
               </section>
               <section>
                  <p>{question.title}</p>
                  <Button>{question.tags}</Button>
                  <p>{question.questionDescription}</p>
               </section>
               <section>
                  <Button>{question.comment}</Button>
                  <Button>{question.check}</Button>
                  <Button>Answer Question</Button>
               </section>
            </div>
         ))}
      </div>   
   );
};

export default Questions;
