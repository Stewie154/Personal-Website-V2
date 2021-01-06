import React from 'react';
import { ProblemSolvingWrapper, ProblemSolvingHeading, Problem, ProblemInfoContainer, ProblemNumber, ProblemDesc, ProblemBtn, SolutionScreenshotContainer, SolutionScreenshot } from './ProblemSolvingElements';
const ProblemSolving = ({ problemSolvingData }) => {
    return (
        <ProblemSolvingWrapper>
            <ProblemSolvingHeading>Problem-Solving</ProblemSolvingHeading>
            <Problem>
                <ProblemInfoContainer>
                    <ProblemNumber>{problemSolvingData[0].number}</ProblemNumber>
                    <ProblemDesc>{problemSolvingData[0].task}</ProblemDesc>
                    <ProblemBtn>{problemSolvingData[0].viewSolutionBtn}</ProblemBtn>
                </ProblemInfoContainer>
                <SolutionScreenshotContainer>
                    <SolutionScreenshot src={problemSolvingData[0].solution}/>
                </SolutionScreenshotContainer>
            </Problem>
            <Problem>
                <ProblemInfoContainer>
                    <ProblemNumber>{problemSolvingData[0].number}</ProblemNumber>
                    <ProblemDesc>{problemSolvingData[0].task}</ProblemDesc>
                    <ProblemBtn>{problemSolvingData[0].viewSolutionBtn}</ProblemBtn>
                </ProblemInfoContainer>
                <SolutionScreenshotContainer>
                    <SolutionScreenshot src={problemSolvingData[0].solution}/>
                </SolutionScreenshotContainer>
            </Problem>
            <Problem>
                <ProblemInfoContainer>
                    <ProblemNumber>{problemSolvingData[0].number}</ProblemNumber>
                    <ProblemDesc>{problemSolvingData[0].task}</ProblemDesc>
                    <ProblemBtn>{problemSolvingData[0].viewSolutionBtn}</ProblemBtn>
                </ProblemInfoContainer>
                <SolutionScreenshotContainer>
                    <SolutionScreenshot src={problemSolvingData[0].solution}/>
                </SolutionScreenshotContainer>
            </Problem>
        </ProblemSolvingWrapper>
    )
}

export default ProblemSolving;
