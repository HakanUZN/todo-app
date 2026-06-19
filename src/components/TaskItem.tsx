import { useState } from 'react';
import type { Task } from '../interfaces/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const priorityLabel: Record<Task['priority'], string> = {
  low: 'Düşük',
  medium: 'Orta',
  high: 'Yüksek',
};

export default function TaskItem({ task, onToggle, onEdit, onDelete }: TaskItemProps) {
  const [confirming, setConfirming] = useState(false);

  return (
    <li
      className={`task-item list-group-item border-0 mb-2 rounded-3 priority-${task.priority} ${
        task.completed ? 'is-done' : ''
      }`}
    >
      <div className="d-flex align-items-start gap-3">
        <input
          type="checkbox"
          className="form-check-input mt-1 task-item__check"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={task.completed ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}
        />
        <div className="flex-grow-1">
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <span className="task-item__title">{task.title}</span>
            <span className={`badge rounded-pill priority-badge priority-badge--${task.priority}`}>
              {priorityLabel[task.priority]}
            </span>
          </div>
          {task.description && <p className="task-item__desc mb-0 mt-1">{task.description}</p>}
        </div>
        <div className="d-flex gap-2 task-item__actions">
          {!confirming ? (
            <>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => onEdit(task)}
                aria-label="Görevi düzenle"
              >
                Düzenle
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={() => setConfirming(true)}
                aria-label="Görevi sil"
              >
                Sil
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>
                Evet, sil
              </button>
              <button type="button" className="btn btn-sm btn-light" onClick={() => setConfirming(false)}>
                Vazgeç
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}
