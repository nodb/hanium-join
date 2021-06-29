import React from 'react'
import styled from 'styled-components';

const IntroText = styled.div`
    padding-left: 30px;
    font-size: 18px;
    color: gray;
`

const ClassText = styled.div`
    font-size: 20px;
    padding-left: 30px;
`

function MyClass() {
    return (
        <>
            <IntroText>
                강의를 클릭하면 해당 페이지로 이동합니다.    
            </IntroText> <br />
            <ClassText>
                수업이름, 수업코드 : 000001    
            </ClassText>  <br />
            <ClassText>
                수업이름, 수업코드 : 000002   
            </ClassText>  <br/>
            <ClassText>
                수업이름, 수업코드 : 000003    
            </ClassText>  
        </>
    )
}

export default MyClass
