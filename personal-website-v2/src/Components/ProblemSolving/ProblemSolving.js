import React, {useState} from 'react';
import { ProblemSolvingWrapper, ProblemSolvingHeading, Problem, ProblemInfoContainer, ProblemNumber, ProblemDesc, ProblemBtn, SolutionScreenshotContainer, SolutionScreenshot } from './ProblemSolvingElements';
const ProblemSolving = ({ problemSolvingData }) => {

    const [problems, setProblems] = useState(problemSolvingData);
    

    const toggleSolution = (index) => {
        // console.log(problems); (check showingSolution)

        setProblems(prevState => ( 
            prevState.map((problem, i) => {
                return i == index ? { ...problem, showingSolution: !problem.showingSolution } : problem
            }) 
        ));
        
        // console.log(problems); (used to see if showingSolution had changed)
    }

    return (
        <ProblemSolvingWrapper>
            <ProblemSolvingHeading>Problem-Solving</ProblemSolvingHeading>
            {problems.map( (problem, index) => {
                return (
                    <Problem key={index}>
                        <ProblemInfoContainer>
                            <ProblemNumber>{problem.number}</ProblemNumber>
                            <ProblemDesc>{problem.task}</ProblemDesc>
                            <ProblemBtn onClick={() => toggleSolution(index)} >
                                {problem.showingSolution ? problem.hideSolutionBtn : problem.viewSolutionBtn}
                            </ProblemBtn>
                        </ProblemInfoContainer>
                        <SolutionScreenshotContainer>
                            <SolutionScreenshot src={ problem.showingSolution ? problem.solution : problem.blank } />
                        </SolutionScreenshotContainer>
                    </Problem>
                )
            })}
        </ProblemSolvingWrapper>
    )
}

export default ProblemSolving;
