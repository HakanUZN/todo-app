import { useLocalStorage } from './useLocalStorage';
import type { Task, TaskDraft } from '../interfaces/Task';

const STORAGE_KEY = 'gorev-defteri.tasks';

/**
 * Proje teslim yönergesindeki dört temel işlemi tek bir yerde topluyoruz:
 * Ekle, Listele (tasks state'i), Güncelle, Sil.
 */
export function useTasks() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(STORAGE_KEY, []);

  // 1) EKLE
  const addTask = (draft: TaskDraft) => {
    const title = draft.title.trim();
    if (!title) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description: draft.description?.trim() || undefined,
      priority: draft.priority,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  // 3) GÜNCELLE
  const updateTask = (id: string, changes: Partial<TaskDraft>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...changes } : task)),
    );
  };

  const toggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // 4) SİL
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // 2) LİSTELE -> "tasks" değeri zaten bileşenlerde listeleme için kullanılıyor.
  return { tasks, addTask, updateTask, toggleComplete, deleteTask };
}
