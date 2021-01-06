import React from 'react';
import { ProblemSolvingWrapper, ProblemSolvingHeading, Problem, ProblemInfoContainer, ProblemNumber, ProblemDesc, ProblemBtn, SolutionScreenshotContainer, SolutionScreenshot } from './ProblemSolvingElements';
const ProblemSolving = ({ problemSolvingData }) => {
    return (
        <ProblemSolvingWrapper>
            <ProblemSolvingHeading>Problem-Solving</ProblemSolvingHeading>
            {problemSolvingData.map( (problem, index) => {
                return (
                    <Problem key={index}>
                        <ProblemInfoContainer>
                            <ProblemNumber>{problem.number}</ProblemNumber>
                            <ProblemDesc>{problem.task}</ProblemDesc>
                            <ProblemBtn>{problem.viewSolutionBtn}</ProblemBtn>
                        </ProblemInfoContainer>
                        <SolutionScreenshotContainer>
                            <SolutionScreenshot src={problem.solution} />
                        </SolutionScreenshotContainer>
                    </Problem>
                )
            })}
        </ProblemSolvingWrapper>
    )
}

export default ProblemSolving;
