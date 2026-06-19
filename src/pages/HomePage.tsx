import { useMemo, useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import EmptyState from '../components/EmptyState';
import EditTaskModal from '../components/EditTaskModal';
import ProgressRing from '../components/ProgressRing';
import type { Task } from '../interfaces/Task';

type Filter = 'all' | 'active' | 'completed';

const FILTERS: Array<[Filter, string]> = [
  ['all', 'Tümü'],
  ['active', 'Aktif'],
  ['completed', 'Tamamlanan'],
];

export default function HomePage() {
  const { tasks, addTask, updateTask, toggleComplete, deleteTask } = useTasks();
  const [editing, setEditing] = useState<Task | null>(null);
  const [filter, setFilter] = useState<Filter>('all');

  const completedCount = tasks.filter((task) => task.completed).length;

  const visibleTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((task) => !task.completed);
    if (filter === 'completed') return tasks.filter((task) => task.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="home-page">
      <header className="app-header d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <p className="app-header__eyebrow mb-1">Görev Defteri</p>
          <h1 className="app-header__title mb-0">Bugün ne yapacaksın?</h1>
        </div>
        <ProgressRing completed={completedCount} total={tasks.length} />
      </header>

      <TaskForm onAdd={(title, description, priority) => addTask({ title, description, priority })} />

      <div className="d-flex gap-2 mb-3" role="tablist" aria-label="Görev filtresi">
        {FILTERS.map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={`btn btn-sm filter-btn ${filter === key ? 'active' : ''}`}
            onClick={() => setFilter(key)}
            role="tab"
            aria-selected={filter === key}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="card border-0 shadow-sm p-2 p-md-3">
        {visibleTasks.length === 0 ? (
          <EmptyState
            message={
              tasks.length === 0
                ? 'Henüz görev yok. Yukarıdan ilk görevini ekle.'
                : 'Bu filtreye uyan görev bulunamadı.'
            }
          />
        ) : (
          <TaskList tasks={visibleTasks} onToggle={toggleComplete} onEdit={setEditing} onDelete={deleteTask} />
        )}
      </div>

      <EditTaskModal
        task={editing}
        onClose={() => setEditing(null)}
        onSave={(id, changes) => {
          updateTask(id, changes);
          setEditing(null);
        }}
      />
    </div>
  );
}
