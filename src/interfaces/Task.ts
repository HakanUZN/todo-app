// Uygulamanın temel veri modeli.
// "Interfaces" klasörü, projede kullanılan veri tiplerini tek bir yerde tutar.

export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  completed: boolean;
  createdAt: number;
}

// Düzenleme/güncelleme işleminde sadece bu alanların değişmesine izin veriyoruz.
export type TaskDraft = Pick<Task, 'title' | 'description' | 'priority'>;
