interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({ message = 'Henüz görev yok. Yukarıdan ilk görevini ekle.' }: EmptyStateProps) {
  return (
    <div className="empty-state text-center py-5">
      <div className="empty-state__icon mb-2" aria-hidden="true">
        ✓
      </div>
      <p className="mb-0 text-muted">{message}</p>
    </div>
  );
}
