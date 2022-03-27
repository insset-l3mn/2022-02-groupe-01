import React, { useState, useEffect , useRef} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";



function Questions() {



	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);


	let { domainId } = useParams();


	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
		let obj = data.question_option.reduce((a, v, key) => ({ ...a, [key]: v}), {}) 


	};


	useEffect(() => {
		const fetchData = async () => {
		  const result = await axios(
			process.env.REACT_APP_BACKEND_ENDPOINT+'questions/domain/'+domainId,
		  );
	
		  setQuestions(result.data);
		  

		};
	
		fetchData();
	  }, []);



	function nextButton(event) {
		event.preventDefault();

		if (currentQuestion < questions.length-1) {
			setCurrentQuestion(currentQuestion+1)
		}

	}

	function prevButton(event) {
		event.preventDefault();

		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion-1)
		}
		

	}

	
	function paginate(event) {
		event.preventDefault();


		let index = event.target.getAttribute("data-index");


		setCurrentQuestion(Number(index))

	}

	

		return (
			
			<div className='questions-panel'>
				{questions.length > 0 &&
				<>
				<div className='progress mb-4 mt-3'>
					<div className='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style={{width: ((100/questions.length)*(currentQuestion+1))+`%`}}></div>
				</div>

				<nav >
					<ul className='pagination pagination-sm'>

						{questions.map((object, i) => {
							return (
								<li onClick={paginate}  className={`page-item` + ((currentQuestion == i) ? ` active` : ``) }><a  data-index={i} className='page-link' href='#'>{i+1}</a></li>
							);
						})}

					</ul>
				</nav>
				<h4 className='my-3'>Question {Number(currentQuestion)+1} : {questions[currentQuestion].question}</h4>
				<form onSubmit={handleSubmit(onSubmit)}>
				{
					questions.map((object, questionIndex) => {

						return (
							<div className={`question ` + ((currentQuestion == questionIndex) ? `show` : `d-none`) }>
								{
									JSON.parse(object.options).map((option, i) => {
										return (
											<label className='shadow-sm col-8 card p-3 mb-2' style={{cursor: 'pointer'}} >
												<div className='form-check'>
													<input className='form-check-input' {...register(`question_option[` + object.id + `]`)} type='radio' value={option.key} />
													<span className='form-check-label'>
														{option.value}
													</span>
												</div>
											</label>
										);
									})
								}
							</div>
						);
					})
				}
				<div className='my-5'>
					<button className='btn btn-secondary' disabled={currentQuestion === 0 ? `true` : ``} onClick={prevButton}>Precedent</button>

					<button className={`btn btn-primary float-end ` + (currentQuestion === questions.length-1 ? `d-none` : ``) } onClick={nextButton}>Suivant</button>
					<button type="submit" className={`btn btn-success float-end ` + (currentQuestion === questions.length-1 ? `d-block` : `d-none`) } >Terminer</button>

					
				</div>
				</form>
				</>

				}
				
				

				<div className='my-5'>

				</div>
			</div>
			
		);
		
}

export default Questions;