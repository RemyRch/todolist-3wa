import TodoList from "./Components/TodoList";
import { SearchProvider } from "./Provider/SearchProvider";
import { TaskProvider } from "./Provider/TaskProvider";

function App() {
  return (
    <>
        <TaskProvider>
          <SearchProvider>
            <TodoList />
          </SearchProvider>
        </TaskProvider>
    </>
  );
}

export default App;
