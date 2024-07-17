import React, { useState } from 'react';
import "../../assets/css/style.scss";

function FAQ() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [secondAnswer, setSecondAnswer] = useState(false);
  const [secondAnswers, setSecondAnswers] = useState(false);
  const [thirdAnswer, setThirdAnswer] = useState(false);
  const [thirdAnswers, setThirdAnswers] = useState(false);
  const [fourthAnswer, setfourthAnswer] = useState(false);
  

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  const toggleAnswerss = () => {
    setShowAnswers(!showAnswers);
  };


  const SecondAnswer1 = () => {
    setSecondAnswer(!secondAnswer);
  };
  const SecondAnswer2 = () => {
    setSecondAnswers(!secondAnswers);
  };


  const ThirdAnswer1 = () => {
    setThirdAnswer(!thirdAnswer);
  };
  const ThirdAnswer2 = () => {
    setThirdAnswers(!thirdAnswers);
  };


  const toggleAnswers = () => {
    setfourthAnswer(!fourthAnswer);
  };

  return (
    <div className="faq-containers">
      <main className="faq-mains">
        <div className="faq-contents">
          <h1>FAQs</h1>
          <div className="faq-rx">
            <h3>Shopping</h3>
            <div className='flex-rx'>
           <strong> How can I get assistance if I need it? </strong>
            <button className="question-rx" onClick={toggleAnswer}> 
               {
                (showAnswer)?("-"): ("+")
               }
            </button>
            </div>
            {showAnswer && (
              <p className="answer-rx">
                Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros.
              </p>
            )}

            <div className='flex-rx'>
           <strong> How can I get assistance if I need it? </strong>
            <button className="question-rx" onClick={toggleAnswerss}>    
              
               {
                (showAnswers)?("-"): ("+")
               }
            </button>
            </div>
            {showAnswers && (
              <p className="answer-rx">
                Duis nec nisi id ligula dapibus maximus nec eu dui. Proin ornare, ipsum vitae tincidunt rutrum, diam neque accumsan turpis, a dignissim nisi libero non lacus. Nulla quis massa nulla. Morbi metus lacus, sagittis sed est vel, aliquet ultrices nibh. Morbi auctor ex eget egestas auctor. Duis nec nisi id ligula dapibus maximus nec eu dui. Proin ornare, ipsum vitae tincidunt rutrum, diam neque accumsan turpis, a dignissim nisi libero non lacus. Nulla quis massa nulla. Morbi metus lacus, sagittis sed est vel, aliquet ultrices nibh. Morbi auctor ex eget egestas auctor.
              </p>
            )}

            {/* Add other FAQs here */}
          </div>

          <div className="faq-rx">
            <h3>Payment</h3>
            <div className='flex-rx'>
           <strong> How can I get assistance if I need it? </strong>
            <button className="question-rx" onClick={SecondAnswer1}>
               {
                (secondAnswer)?("-"): ("+")
               }
            </button>
            </div>
            {secondAnswer && (
              <p className="answer-rx">
                Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt
              </p>
            )}

            <div className='flex-rx'>
           <strong> How can I get assistance if I need it? </strong>
            <button className="question-rx" onClick={SecondAnswer2}>
               {
                (secondAnswers)?("-"): ("+")
               }
            </button>
            </div>
            {secondAnswers && (
              <p className="answer-rx">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            )}
            </div>

            <div className="faq-rx">
            <h3>Returns</h3>
            <div className='flex-rx'>
           <strong> How can I get assistance if I need it? </strong>
            <button className="question-rx" onClick={ThirdAnswer1}>
               {
                (thirdAnswer)?("-"): ("+")
               }
            </button>
            </div>
            {thirdAnswer && (
              <p className="answer-rx">
                Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt
              </p>
            )}

            <div className='flex-rx'>
           <strong> How can I get assistance if I need it? </strong>
            <button className="question-rx" onClick={ThirdAnswer2}>
               {
                (!thirdAnswers)?("-"): ("+")
               }
            </button>
            </div>
            {!thirdAnswers && (
              <p className="answer-rx">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            )}
            </div>

            <div className="faq-rx">
            <h3>Shipping</h3>
            <div className='flex-rx'>
           <strong> How can I get assistance if I need it? </strong>
            <button className="question-rx" onClick={toggleAnswers}>
               {
                (fourthAnswer)?("-"): ("+")
               }
            </button>
            </div>
            {fourthAnswer && (
              <p className="answer-rx">
                Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt
              </p>
            )}
            </div>

        </div>
      </main>
     
    </div>
  );
}

export default FAQ;

