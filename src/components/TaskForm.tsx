import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Priority } from '../interfaces/Task';

interface TaskFormProps {
  onAdd: (title: string, description: string, priority: Priority) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim()) {
      setError('Görev başlığı boş olamaz.');
      return;
    }
    onAdd(title, description, priority);
    setTitle('');
    setDescription('');
    setPriority('medium');
    setError('');
  };

  return (
    <form className="task-form card border-0 shadow-sm p-3 p-md-4 mb-4" onSubmit={handleSubmit} noValidate>
      <h2 className="task-form__heading h6 mb-3">Yeni görev ekle</h2>
      <div className="row g-2 align-items-start">
        <div className="col-12 col-md-5">
          <input
            type="text"
            className={`form-control ${error ? 'is-invalid' : ''}`}
            placeholder="Ne yapılacak?"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              setError('');
            }}
            aria-label="Görev başlığı"
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
        <div className="col-12 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Açıklama (opsiyonel)"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            aria-label="Görev açıklaması"
          />
        </div>
        <div className="col-8 col-md-2">
          <select
            className="form-select"
            value={priority}
            onChange={(event) => setPriority(event.target.value as Priority)}
            aria-label="Öncelik"
          >
            <option value="low">Düşük</option>
            <option value="medium">Orta</option>
            <option value="high">Yüksek</option>
          </select>
        </div>
        <div className="col-4 col-md-1 d-grid">
          <button type="submit" className="btn btn-primary" aria-label="Görevi ekle">
            Ekle
          </button>
        </div>
      </div>
    </form>
  );
}
