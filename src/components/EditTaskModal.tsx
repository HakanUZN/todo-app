import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import type { Priority, Task, TaskDraft } from '../interfaces/Task';

interface EditTaskModalProps {
  task: Task | null;
  onSave: (id: string, changes: TaskDraft) => void;
  onClose: () => void;
}

export default function EditTaskModal({ task, onSave, onClose }: EditTaskModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description ?? '');
      setPriority(task.priority);
    }
  }, [task]);

  if (!task) return null;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;
    onSave(task.id, { title: title.trim(), description: description.trim(), priority });
  };

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose} />
      <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-modal="true" aria-label="Görevi düzenle">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Görevi düzenle</h5>
                <button type="button" className="btn-close" onClick={onClose} aria-label="Kapat" />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label" htmlFor="edit-title">
                    Başlık
                  </label>
                  <input
                    id="edit-title"
                    className="form-control"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="edit-description">
                    Açıklama
                  </label>
                  <textarea
                    id="edit-description"
                    className="form-control"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows={3}
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="edit-priority">
                    Öncelik
                  </label>
                  <select
                    id="edit-priority"
                    className="form-select"
                    value={priority}
                    onChange={(event) => setPriority(event.target.value as Priority)}
                  >
                    <option value="low">Düşük</option>
                    <option value="medium">Orta</option>
                    <option value="high">Yüksek</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" onClick={onClose}>
                  Vazgeç
                </button>
                <button type="submit" className="btn btn-primary">
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
