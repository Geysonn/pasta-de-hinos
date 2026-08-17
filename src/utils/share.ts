export async function shareContent(data: { title: string; text?: string; url?: string }) {
  if (navigator.share) {
    try {
      await navigator.share(data)
      return true
    } catch {
      return false
    }
  }
  if (navigator.clipboard && data.url) {
    await navigator.clipboard.writeText(data.url)
    return 'copied'
  }
  return false
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDayMonth(iso: string): { day: string; month: string } {
  const date = new Date(`${iso}T00:00:00`)
  return {
    day: date.toLocaleDateString('pt-BR', { day: '2-digit' }),
    month: date.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '').toUpperCase(),
  }
}
