export const formatDate = (date: Date): string => {
  if (!date) return '---';
  
  return date.toLocaleString('es-EC', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}