import React from 'react';
import axios from 'axios';


class Questions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: false,
            currentQuestion: 0
        };

        this.getQuestions();
    
    }

    getQuestions() {

        // Make a request for a user with a given ID
        axios.get(process.env.REACT_APP_BACKEND_ENDPOINT+'questions/')
        .then((response) => {
            
            this.setState({questions: response.data});

            console.log(response.data);
          
        })
        .catch((error) => {

        })
        .then(function () {
        // always executed
        });
    }

    answerClicked(event) {
        // Correct

        this.setState(prevState => {
            console.log('clicked');
            return {currentQuestion: prevState.currentQuestion + 1}
         })

         
        
    }

    render () {

        let currentQuestion;
        let options = {};
        if (this.state.questions) {

            currentQuestion = this.state.questions[this.state.currentQuestion];
            options = JSON.parse(currentQuestion.options);
            
        }
        return (
            
            <div className='questions-panel'>
                {options.length > 0 &&
                <>
                <h4>Question {this.state.currentQuestion} : {currentQuestion.question}</h4>
                <form ref={(el) => this.myFormRef = el}>
                {
                    options.map((object, i) => {
                        setTimeout(() => {}, 1000);
                        return (
                            <label className='shadow-sm col-8 card p-3 mb-2' style={{cursor: 'pointer'}} >
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name={`question_option` + this.state.currentQuestion } />
                                    <span class="form-check-label">
                                        {object.value}
                                    </span>
                                </div>
                            </label>
                        );
                    })
                }
                </form>
                </>

                }
                

                <button className='btn btn-success' onClick={this.answerClicked.bind(this)}>Suivant</button>
            </div>
            
        );
        
    }
}

export default Questions;