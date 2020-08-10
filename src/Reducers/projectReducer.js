const initState = {
  projects: [
    {
      id: "1",
      title: "Help Me Find Peach",
      content: "Finding the peach is very easy, just look aroun you properly.",
    },
    {
      id: "2",
      title: "Collect All The Stars",
      content: "The collection the all the stars war worrior is in progress.",
    },
    {
      id: "3",
      title: "Egg Hunt With Olamide",
      content: "They said there is also egg hunting, let find out.",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created Project: ", action.project);
      return state;
    
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    
    default: 
      return state
  }
};

export default projectReducer;
