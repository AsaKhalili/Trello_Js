///*eslint-env browser*/ ---> that annoying document not defined error

// Task Box 
function createTitleNode(title){
	var titleElement = createElement('h4', {},title);

	return titleElement;
}

//console.log(createTitleNode('To Do')); //testing

function createTasksListNode(){
	var taskList = createElement('ul',{class: 'task-list'},'');
	
	return taskList;
}

function createAddNewTaskButtonNode(){
	var addTaskButton = createElement('button',{class: 'btn-add-task show'},'Add New Task');
	
	return addTaskButton;
}

function createInputNewTaskNode(){
	var inputNewTask = createElement('input',{class: 'btn-add-task-input hide', type: 'text', placeholder: 'Task'});
	
	return inputNewTask;
}

function createBoxNode(title){
	var titleElement = createTitleNode(title);
	var taskList = createTasksListNode();
	var addTaskButton = createAddNewTaskButtonNode();
	var inputNewTask = createInputNewTaskNode();
	
	var taskBox = createElement('div',{class: 'task-box'});
	
	addTaskButton.addEventListener('click', function(){
		addTaskButton.classList.remove('show');
		addTaskButton.classList.add('hide');
		
		inputNewTask.classList.remove('hide');
		inputNewTask.classList.add('show');
		inputNewTask.focus();
	});
	
	inputNewTask.addEventListener('keyup', function(e){
		if (e.keyCode === 13){
			var newTask = createNewTaskNode(inputNewTask.value);
			var position = document.querySelector('.task-list');
			position.before(newTask);
			
			inputNewTask.classList.remove('show');
			inputNewTask.classList.add('hide');
		
			addTaskButton.classList.remove('hide');
			addTaskButton.classList.add('show');
			inputNewTask.value = '';
		}
	});
	
	
	taskBox.appendChild(titleElement);
	taskBox.appendChild(taskList);
	taskBox.appendChild(addTaskButton);
	taskBox.appendChild(inputNewTask);
	
	return taskBox;
}

//console.log(createBoxNode('To Do'));

//---------------------------------
// Add Card 
function createNewTaskNode(text){
	var newTask = createElement('li', null, text);
	
	return newTask;
}


//---------------------------------
// Add List Call to Action (CTA) 
function createAddListCTANode(){
	var container = createElement('div', {class:'add-list'});
	var CTAaddListButton = createElement('button',{class: 'btn-add-list show'},'Add New List');
	var inputAddList = createElement('input',{class: 'btn-add-input hide', type: 'text', placeholder: 'List Title'});
	
	CTAaddListButton.addEventListener('click',function (){
		CTAaddListButton.classList.remove('show');
		CTAaddListButton.classList.add('hide');
		
		inputAddList.classList.remove('hide');
		inputAddList.classList.add('show');
		inputAddList.focus();
	});
		//type something input 
	inputAddList.addEventListener("keyup", function(e){
		if(e.keyCode === 13){//enter is pressed

			var newList = createBoxNode(inputAddList.value);
			var position = document.querySelector('.add-list');
			position.before(newList);

			inputAddList.classList.remove('show');
			inputAddList.classList.add('hide');
			inputAddList.value = ''; //so nothing's left in it

			CTAaddListButton.classList.remove('hide');
			CTAaddListButton.classList.add('show');
		}
	});
	
	container.appendChild(CTAaddListButton);
	container.appendChild(inputAddList);
	
	return container;
}


