import React/*, { useState, useEffect }*/ from 'react';
import Styled from 'styled-components';
import Istatic from 'common/istatic';
import { TaskViewWrapper, Action } from 'components';
import { useToDoContext } from 'common/contexts/toDo';

const ViewWrapper = Styled.section`
	padding: 10vh 0 0 0;
	display: flex;
	height: 83.5vh;
	justify-content: center;
	background-color: #05060F;
	overflow: scroll;
`
const View = Styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	width: 80%;
`
const InboxHeader = Styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`
const Title = Styled.h1`
	font-weight: bold;
	font-size: 1.3em;
	margin: 0 0 30px 0;
`
const AddTaskBtn = Styled.button`
	border: none;
	border-radius: 8px;
	color: #fff;
	display: flex;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
	background-color: transparent;
	:hover {
		color: #1571C4;
	}
`
const Loading = Styled.img`
	display: ${(props) => (props.show ? "" : "none")};
	width: 30px;
	margin: 20px auto;
`

const Inbox = () => {
	const { toggleActiveEditor, isLoading } = useToDoContext();

	return (
		<ViewWrapper>
			<View>
				<InboxHeader>
					<Title>Inbox</Title>
					<AddTaskBtn onClick={()=> toggleActiveEditor(true)}>
						<Action src={Istatic.iconUrl('add')} alt='add task'/>
						Add Task
					</AddTaskBtn>
				</InboxHeader>
				<TaskViewWrapper/>
				<Loading
					show={isLoading}
					src={Istatic.animatedSvgUrl('loading-jump_black')}
					alt='loading'
				/>
			</View>
		</ViewWrapper>
	);
}

export default Inbox;
